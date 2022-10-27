const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_templates', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "name"
    },
    subject_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_html: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    allowed_shortcodes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reply_to: {
      type: DataTypes.JSON,
      allowNull: true
    },
    cc_emails: {
      type: DataTypes.JSON,
      allowNull: true
    },
    bcc_emails: {
      type: DataTypes.JSON,
      allowNull: true
    },
    notification: {
      type: DataTypes.JSON,
      allowNull: true
    },
    flg_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'email_templates',
    timestamps: false,
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
