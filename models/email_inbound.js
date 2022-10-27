const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_inbound', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    msg_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    headers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    sender: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    recipients_to: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    recipients_cc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    plain: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'email_inbound',
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
    ]
  });
};
