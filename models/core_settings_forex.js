const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_settings_forex', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    currency_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "currency_name"
    },
    currency_symbol: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "$"
    },
    rate: {
      type: DataTypes.DECIMAL(15,7),
      allowNull: false,
      defaultValue: 1.0000000
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    translated_json: {
      type: DataTypes.JSON,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'core_settings_forex',
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
        name: "currency_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "currency_name" },
        ]
      },
    ]
  });
};
