const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "Api Service ID | User ID | Org ID | Syndicate ID"
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>Api Service\r\n1=>User\r\n2=>Org\r\n3=>Syndicate\r\n4=>User Type"
    },
    resource: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "permission",
      comment: "Resource Name || \"permission\""
    },
    permission: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: "{\t[Endpoint]:[method list]} | { \t[facet (page|module|action|object|route)] : { \t\t[ID|Name] :{ \t\t\t[action]:[permission (boolean)] \t\t} \t} }"
    },
    version: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "01"
    },
    flg_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    flg_delete: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Api Service id | User ID |"
    }
  }, {
    sequelize,
    tableName: 'permissions',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "owner_id_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "owner_id" },
          { name: "type" },
          { name: "resource" },
        ]
      },
    ]
  });
};
