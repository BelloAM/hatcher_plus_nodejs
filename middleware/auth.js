let AuthHandler = new (require('../handlers/authHandler'))(),
    Service = require('../models/api_services'),
    Token = require('../models/tokens'),
    User = require('../models/users');
const authenticateRequest = function(req,res,next){
    req.result = {success:false};
    let path = req.originalUrl,
        authing = (/^\/v[0-9]*\/auth(\/)?$/.test(path) || /^\/v[0-9]*\/auth\//.test(path)||/^\/auth(\/)?/.test(path)||/^\/test(\/)?/.test(path)),
        downloading_content = (/^\/v[0-9]*\/contents\/[0-9]{1,}\/(1|true)?$/.test(path)),
        generic_data = (/^\/data\//.test(path) || /^\/v[0-9]{1,}\/data\//.test(path) || /^\/users\/login/.test(path)),
        gbl_token = (req.headers['x-gbl-token']) ? req.headers['x-gbl-token'] : undefined;

    gbl_token = (req.body.token) ? req.body.token : gbl_token;
    gbl_token = (req.query.token) ? req.query.token : gbl_token;

    if(!!req.headers.authorization) {
        let authorization = req.headers.authorization,
            regexp = new RegExp(/^Bearer\s/);
        gbl_token = authorization.replace(regexp, '');
    }
    req.headers['x-gbl-token'] = gbl_token;

    if(authing === false && generic_data === false && downloading_content === false){
        if(!gbl_token){
            res.error={code:401,message:"Unauthorized Action"};
            next();
        }
        else {
            Token.findOne({where: {token: gbl_token}})
                .then((err, token) => {
                    if (err) {
                        console.log(err);
                        res.status(401);
                        res.send({code: 401, message: "Unauthorized Action"});
                    } else if (!token || token.expires < (Date.now() / 1000)) {
                        res.status(401);
                        res.send(JSON.stringify({code: 401, message: "Unauthorized Action"}));
                    } else {
                        co(function* () {
                            let data = {
                                application: yield new Promise((fulfil, reject) => {
                                    //Get API Service
                                    Service.findOne({where: {id: token.application_id}}).then((err, application) => {
                                        if (err) {
                                            console.log(err);
                                            reject({
                                                code: 501,
                                                message: "Internal server error: unable to retrieve API application"
                                            });
                                        } else if (!application) {
                                            reject({code: 404, message: "API Application NOT found"});
                                        } else {
                                            fulfil(application);
                                        }
                                    })
                                })
                            };
                            if (token.type === 1) {
                                data.user = yield new Promise((fulfil, reject) => {
                                    User.findOne({where: {id: token.owner_id}}).then((err, user) => {
                                        if (err) {
                                            console.log(err);
                                            reject({
                                                code: 501,
                                                message: "Internal server error: unable to retrieve token owner"
                                            });
                                        } else if (!user) {
                                            reject({code: 404, message: "Token owner NOT found"});
                                        } else {
                                            fulfil(user);
                                        }
                                    })
                                });
                            }
                            return data;
                        }).then(data => {
                            //update token use time
                            Token.update({last_use: Math.round(Date.now() / 1000)}, {where: {id: token.id}})
                                .then((err, updated) => {
                                    req.auth = {};
                                    if (!!data.user) req.auth.user = data.user;

                                    //TEST PERMISSIONS
                                    AuthHandler.getPermissions(token, (err, permissions) => {
                                        if (err) {
                                            console.log(err);
                                            res.status(401);
                                            res.send(JSON.stringify({code: 401, message: "Unauthorized Action"}));
                                        } else {
                                            req.auth.permissions = permissions;
                                            let request_type = req.method,
                                                url = req._parsedUrl.pathname,
                                                action;
                                            url = url.split("\/");

                                            let resource = url[2],
                                                endpoint = url[3],
                                                permission_list = (permissions[resource]) ? permissions[resource] : false;

                                            if (permission_list === true) {
                                                next();
                                            } else if (permission_list) {
                                                try {
                                                    permission_list = permission_list instanceof String ? JSON.parse(permission_list) : permission_list;
                                                } catch (e) {
                                                    console.log(e);
                                                    permission_list = undefined;
                                                }

                                                switch (request_type) {
                                                    case "get":
                                                    case "GET":
                                                        action = "read";
                                                        break;
                                                    case "post":
                                                    case "POST":
                                                        action = "create";
                                                        break;
                                                    case "put":
                                                    case "PUT":
                                                        action = "update";
                                                        break;
                                                    case "delete":
                                                    case "DELETE":
                                                        action = "delete";
                                                        break;
                                                }

                                                if (!endpoint || !permission_list[endpoint]) {
                                                    if (permission_list !== undefined && (permission_list[action] === true || permission_list[action] === "true" || permission_list[action] === 1 || parseInt(permission_list) === 1)) {
                                                        next();
                                                    } else {
                                                        res.status(401);
                                                        res.send(JSON.stringify({
                                                            code: 401,
                                                            message: "insufficient permissions"
                                                        }));
                                                    }
                                                } else if (!!permission_list[endpoint] && (permission_list[endpoint] === true || permission_list[endpoint][action] === true || permission_list[endpoint][action] === "true" || permission_list[endpoint][action] === 1)) {
                                                    next();
                                                } else {
                                                    res.status(401);
                                                    res.send(JSON.stringify({
                                                        code: 401,
                                                        message: "insufficient permissions"
                                                    }));
                                                }
                                            } else {
                                                res.status(401);
                                                res.send(JSON.stringify({
                                                    code: 401,
                                                    message: "insufficient permissions"
                                                }));
                                            }
                                        }
                                    })
                                }).catch(err => {
                                req.error = err;
                                next();
                            });
                        });
                    }
                });
        }
    }
    else{
        next();
    }
}

module.exports=authenticateRequest;
