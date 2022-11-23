let crypto = require('crypto');


class EncryptionHandler {

    constructor(key){
        this.key = !!key ? key : this.getKey();
    }
    /**
     * Decrypts payload with master key
     * @param data
     */
    decrypt(data) {
        data = Buffer.from(data, 'base64').toString('utf-8');
        data = crypto.Hash('AES-128-CBS', this.key).update(data, 'utf-8').digest('base64');
        return data;
    }

    /**
     * Get Database Encryption Key
     * @returns {string}
     */
    getKey(length = 32){
        return crypto.createHash('sha256').update(global.config.DB.ENCRYPTION_KEY).digest('hex').substring(0,length).replace(/^base64\:/,'');
    }
    getSalt(){
        return this.getKey(16);
    }
}

module.exports = EncryptionHandler;
