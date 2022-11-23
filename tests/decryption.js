global.config = require('../config.js');
let initModels = require('../models/init-models'),
    crypto = require('crypto'),
    key = global.config.DB.ENCRYPTION_KEY,
    models = initModels(),
    EncryptionHandler = new (require("../handlers/encryptionHandler"))(),
    user = models.users,
    { Encryptor } = require('node-laravel-encryptor');
    key = key.replace(/^base64:/,"");
    let salt = EncryptionHandler.getSalt(),
        encryptor = new Encryptor({
            key,
            key_length:32,
            cipher: 'AES-128-CBC',
    });

    user.findOne({where:{id:18384}}).then(user=>{
        console.log(user.id,user.email)
        email = Buffer.from(email, 'base64');//.toString('utf-8');
        console.log(email.toString('utf-8'));
    }).catch(console.error).finally(process.exit);


