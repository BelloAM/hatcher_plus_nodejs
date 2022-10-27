const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaign_settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    option_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "option_name"
    },
    option_value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'campaign_settings',
    timestamps: false,
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
        name: "option_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_name" },
        ]
      },
    ]
  });
};
