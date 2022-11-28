let crypto = require('crypto');
const aesEcb = require('aes-ecb');
const {Encryptor} = require('node-laravel-encryptor');

class EncryptionHandler {
    constructor(config){
        if(!!config) {
            for (let k in config) {
                if (config.hasOwnProperty(k)) this[k] = config[k];
            }
        }
        this.encryptor = new Encryptor({key:global.config.DB.ENCRYPTION_KEY});
    }
    /**
     * Decrypts payload with master key
     * @param data
     */
    decrypt(data) {
        let algo = this.getAlgorithm().toLowerCase();
        if(algo === "aes-128-ecb") {
            data = aesEcb.decrypt(this.getKey(), data);
        }
        else if(algo === "aes-256-cbc") {
            data = this.aes256CBCDecrypt(data);
        }
        else{
            let decipher = crypto.createDecipheriv(this.getAlgorithm(), this.getKey(), this.getIv()),
                decrypted = decipher.update(data, 'base64', 'utf8');
            data = (decrypted + decipher.final('utf8'));
        }
        return data;
    }
    encrypt(data) {
        if(this.getAlgorithm().toLowerCase()==="aes-128-ecb")
            return aesEcb.decrypt(this.getKey(),data);
        else if(this.getAlgorithm().toLowerCase()==="aes-256-cbc")
            return this.aes256CBCEncrypt(data);
        else {
            let cipher = crypto.createCipheriv(this.getAlgorithm(), this.getKey(), this.getIv()),
                encrypted = cipher.update(data, 'utf8', 'base64');
            encrypted += cipher.final('base64');
            return encrypted;
        }
    }

    /**
     * Get Database Encryption Key
     * @returns {string}
     */
    getKey(length=32){
        if(this.getAlgorithm().toLowerCase()==="aes-128-ecb") length = 16;
        return crypto.createHash('sha256').update(global.config.DB.ENCRYPTION_KEY).digest('hex').substring(0,length).replace(/^base64\:/,'');
    }
    getIv(){
        let length = 16;
        if(this.getAlgorithm().toLowerCase()==="aes-128-ecb") return "";
        return this.getKey(length);
    }

    getAlgorithm() {
        return this.algorithm ?? global.config.DB.ENCRYPTION_ALGORITHM;
    }

    aes256CBCDecrypt(data) {
        return this.encryptor.decrypt(data);
    }

    aes256CBCEncrypt(data) {
        return this.encryptor.encrypt(data);
    }


}

module.exports = EncryptionHandler;
