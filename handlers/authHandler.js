let Config=global.config,
    Token=new require('../models/token'),
    Application=new Model("applications"),
    Permission = new Model("permissions"),
    User= new (require('../models/user'))(),
    bcrypt = require('bcryptjs'),
    co=require('co'),
    jwt=require('jsonwebtoken'),
    passport=require('passport');

class AuthHandler{

    /**
     * Authentication Application/Service
     * @param client_id {string}
     * @param client_secret {string}
     * @param callback {function(...[*]=)}
     */
    authenticateService(client_id,client_secret,callback){
        Application.find({client_id,client_secret,flg_active:'1',flg_delete:'0'},(err,application)=>{
            if(err){
                console.log(err);
                callback(err);
            }
            else if(!application || application.length <= 0){
                err = new Error('invalid service');
                err.code = 401;
                callback(err);
            }
            else{
                application=application[0];
                //create token
                let payload = {
                        id:application.id,
                        name:application.name,
                        type:0
                    },
                    signingOptions={
                        issuer:  Config.APP_NAME,
                        subject:  Config.APP_NAME,
                        audience: application.name,
                        expiresIn:  Config.SERVICE_TOKEN_VALIDITY,
                        algorithm:  Config.SERVICE_TOKEN_ALGORITHM
                    };

                createToken(payload,signingOptions,application.id,0,application,callback);
            }
        },null,1);
    }

    /**
     * Authenticate User
     * @param username {string}
     * @param password {string}
     * @param service_token {string}
     * @param callback {function(...[*]=)}
     */
    authenticateUser(username,password,service_token,callback){
        Token.get(service_token,(err,serviceToken)=>{
            if(err){
                callback(err);
            }
            else {
                serviceToken = serviceToken ? serviceToken : {type:"false"};
                if(serviceToken.type!==0){
                    err = new Error('invalid service token');
                    err.code = 401;
                    callback(err);
                }
                else{
                    //get Service and permissions
                    co(function* (){
                        return {
                            application:yield new Promise((fulfill,reject)=>{
                                Application.read(serviceToken.owner_id,(err,application)=>{
                                    if(err)  {
                                        console.log(err);
                                        reject({code:501,message:"Internal server error: unable to retrieve API service"});
                                    }
                                    else if(!application){
                                        reject({code:404,message:"API Service NOT found!"});
                                    }
                                    else{
                                        fulfill(application);
                                    }
                                })
                            }),
                            user: yield new Promise((fulfill,reject)=>{
                                User.findByEmail(username,(err,user)=>{
                                    if(err) {
                                        reject(err)
                                    } else if(!user) {
                                        reject({code:404,message:'user does NOT exist'});
                                    }
                                    else if(!user.flg_verified){
                                        reject({code:401,message:"Account NOT verified"});
                                    }
                                    else{
                                        fulfill(user);
                                    }
                                })
                            })
                        }
                    })
                        .then(value=>{
                            //Decrypt Service Token
                            let token = decryptToken(service_token,value.application,value.application.public_key);

                            //Get Token Permissions
                            AuthHandler.getTokenPermissions(token,(err,permissions)=>{
                                if(err){
                                    console.log(err);
                                    callback(err);
                                }
                                else if(permissions.user_login===true||permissions.user_login===1||permissions.user_login==="true"){
                                    //verify user credentials
                                    let {id,first_name,last_name,email,type,phone}=value.user;
                                    if(bcrypt.compareSync(password,value.user.password)){
                                        let payload = {
                                                id,
                                                name:first_name + " " + last_name,
                                                email,
                                                type
                                            },
                                            signingOptions={
                                                issuer:  Config.APP_NAME,
                                                subject:  Config.APP_NAME,
                                                expiresIn:  Config.USER_TOKEN_VALIDITY,
                                                algorithm:  Config.USER_TOKEN_ALGORITHM
                                            };
                                        createToken(payload,signingOptions,value.user.id,1,value.application,(err,token)=>{
                                            if(err) {
                                                callback(err);
                                            }
                                            else {
                                                callback(err, token,{
                                                    id,
                                                    first_name,
                                                    last_name,
                                                    email,
                                                    phone,
                                                    type
                                                });
                                            }
                                        });
                                    }
                                    else{
                                        callback({code:401,message:"Invalid credentials"});
                                    }
                                }
                                else{
                                    callback({code:401,message:"Invalid credentials"});
                                }
                            });
                        },callback)
                }
            }
        },0)
    }

    /**
     * Authorize Request
     * @param req
     * @param res
     * @param next
     */
    authorizeRequest(req,res,next){
        req.result = {success:false};

        let path = req.originalUrl,
            authing = (/^\/v[0-9]*\/auth(\/)?$/.test(path) || /^\/v[0-9]*\/auth\//.test(path)||/^\/auth(\/)?/.test(path)||/^\/test(\/)?/.test(path)),
            downloading_content = (/^\/v[0-9]*\/contents\/[0-9]{1,}\/(1|true)?$/.test(path)),
            generic_data = (/^\/data\//.test(path) || /^\/v[0-9]{1,}\/data\//.test(path) || /^\/users\/login/.test(path)),
            htc_token = (req.headers['x-htc-token']) ? req.headers['x-htc-token'] : undefined;
        htc_token = (req.body.token) ? req.body.token : htc_token;
        htc_token = (req.query.token) ? req.query.token : htc_token;

        if(!!req.headers.authorization) {
            let authorization = req.headers.authorization,
                regexp = new RegExp(/^Bearer\s/);
            htc_token = authorization.replace(regexp, '');
        }
        req.headers['x-htc-token'] = htc_token;

        if(authing === false && generic_data === false && downloading_content === false){
            if(!htc_token){
                res.error={code:401,message:"Unauthorized Action"};
                next();
            }
            else{
                Token.get(htc_token, (err,token) => {
                    if (err) {
                        console.log(err);
                        res.status(401);
                        res.send({code:401,message:"Unauthorized Action"});
                    }
                    else if(!token || token.expires < (Date.now()/1000)){
                        res.status(401);
                        res.send(JSON.stringify({code:401,message:"Unauthorized Action"}));
                    }
                    else{
                        co(function* (){
                            let data = {
                                application: yield new Promise((fulfil,reject)=>{
                                    //Get API Service
                                    Application.read(token.application_id,(err,application)=>{
                                        if(err){
                                            console.log(err);
                                            reject({code:501,message:"Internal server error: unable to retrieve API application"});
                                        }
                                        else if(!application){
                                            reject({code:404,message:"API Application NOT found"});
                                        }
                                        else{
                                            fulfil(application);
                                        }
                                    })
                                })
                            };
                            if(token.type===1){
                                data.user=yield new Promise((fulfil,reject)=>{
                                    User.read(token.owner_id,(err,user)=>{
                                        if(err){
                                            console.log(err);
                                            reject({code:501,message:"Internal server error: unable to retrieve token owner"});
                                        }
                                        else if(!user){
                                            reject({code:404,message:"Token owner NOT found"});
                                        }
                                        else {
                                            fulfil(user);
                                        }
                                    })
                                });
                            }
                            return data;
                        }).then(data=>{
                            //update token use time
                            Token.update({id:token.id,last_use:Math.round(Date.now()/1000)});
                            req.auth = {};
                            if(!!data.user) req.auth.user = data.user;

                            //TEST PERMISSIONS
                            AuthHandler.getTokenPermissions(token,(err, permissions)=>{
                                if(err){
                                    console.log(err);
                                    res.status(401);
                                    res.send(JSON.stringify({code:401,message:"Unauthorized Action"}));
                                }
                                else{
                                    req.auth.permissions=permissions;
                                    let request_type = req.method,
                                        url=req._parsedUrl.pathname,
                                        action;
                                    url=url.split("\/");

                                    let resource=url[2],
                                        endpoint=url[3],
                                        permission_list= (permissions[resource]) ? permissions[resource] : false;

                                    if(permission_list===true){
                                        next();
                                    }
                                    else if(permission_list){
                                        try{
                                            permission_list = permission_list instanceof String ? JSON.parse(permission_list) : permission_list;
                                        }
                                        catch(e){
                                            console.log(e);
                                            permission_list=undefined;
                                        }

                                        switch (request_type){
                                            case "get":
                                            case "GET":
                                                action="read";
                                                break;
                                            case "post":
                                            case "POST":
                                                action="create";
                                                break;
                                            case "put":
                                            case "PUT":
                                                action="update";
                                                break;
                                            case "delete":
                                            case "DELETE":
                                                action="delete";
                                                break;
                                        }

                                        if(!endpoint||!permission_list[endpoint]){
                                            if(permission_list!==undefined&&(permission_list[action]===true||permission_list[action]==="true"||permission_list[action]===1||parseInt(permission_list)===1)){
                                                next();
                                            }
                                            else{
                                                res.status(401);
                                                res.send(JSON.stringify({code:401,message:"insufficient permissions"}));
                                            }
                                        }
                                        else if(!!permission_list[endpoint] && (permission_list[endpoint]===true || permission_list[endpoint][action]===true || permission_list[endpoint][action]==="true" ||permission_list[endpoint][action]===1)){
                                            next();
                                        }
                                        else{
                                            res.status(401);
                                            res.send(JSON.stringify({code:401,message:"insufficient permissions"}));
                                        }
                                    }
                                    else{
                                        res.status(401);
                                        res.send(JSON.stringify({code:401,message:"insufficient permissions"}));
                                    }
                                }
                            })
                        }).catch(err=>{
                            req.error=err;
                            next();
                        });

                    }
                });
            }
        }
        else{
            next();
        }
    }

    decryptServiceToken=(service_token,callback)=>{
        Token.findOne({where:{token:service_token}}).then((err,token)=>{
            if(err||!token){
                console.log(err);
                callback({code:401,message:"invalid token"});
            }
            else{
                // Find Related Service
                Application.read(token.owner_id,(err,application)=>{
                    if(err||!application){
                        callback({code:401,message:"unauthorized service"});
                    }
                    else{
                        //decrypt token
                        let verify =  this.decryptToken(service_token,application,application.public_key);
                        if(verify){
                            callback(null,verify);
                        }
                        else{
                            callback({code:401,message:"unable to decrypt token"});
                        }
                    }
                })
            }
        },undefined,1);
    };

    getPermissions(){
        //TODO: replicate gates and permissions
    }

    createToken(){

    }

    decryptToken(token,subject,key,type){
        type= type || 0;
        let verifyOptions =  {
            issuer:  Config.APP_NAME,
            subject:  Config.APP_NAME,
            expiresIn:  (type===1) ? Config.USER_TOKEN_VALIDITY : Config.SERVICE_TOKEN_VALIDITY,
            algorithm:  (type===1) ? [Config.USER_TOKEN_ALGORITHM] : [Config.SERVICE_TOKEN_ALGORITHM],
        };
        if(subject){
            verifyOptions.audience=(type===1) ? subject.email : subject.name;
        }
        return jwt.verify(token,key,verifyOptions);
    }
}

module.exports = AuthHandler;
