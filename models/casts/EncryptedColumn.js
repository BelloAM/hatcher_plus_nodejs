class EncryptedColumn{
    constructor(algorithm){
        this.algorithm = algorithm ?? global.config.DB.ENCRYPTION_ALGORITHM;
    }

}

module.exports = EncrtpyedColumn;
