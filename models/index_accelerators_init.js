const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index_accelerators_init', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "United States of America"
    },
    sector: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sector_str: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Internet"
    },
    startups: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exits: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    funding: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_accelerators_init',
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
    ]
  });
};
