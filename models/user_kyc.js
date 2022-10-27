const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_kyc', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    aliases: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "0=>Updated\n1=>In Progress\n2=>Failed"
    }
  }, {
    sequelize,
    tableName: 'user_kyc',
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
