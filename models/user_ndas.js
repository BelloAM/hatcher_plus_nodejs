const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_ndas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tabs: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0,1,2,3,4,5"
    },
    nda_request_status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    nda_grant_status: {
      type: DataTypes.ENUM('-1','0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    active_page: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    view: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    echosign_document_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    privileged_documents_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'user_ndas',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
