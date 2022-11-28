const Sequelize = require('sequelize');
var encryptor = new (require('../handlers/encryptionHandler'))();

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apps_org', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    app_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
      get: function(attr){
        return this.getDataValue(attr);
        //return encryptor.decrypt(this.getDataValue(attr));
      },
      set: function(value){
        return encryptor.encrypt(value);
      }
    }
  }, {
    sequelize,
    tableName: 'apps_org',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
