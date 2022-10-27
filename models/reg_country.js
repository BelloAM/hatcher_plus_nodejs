const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reg_country', {
    iso: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    iso3: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    iso_numeric: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fips: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    capital: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    continent: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    tld: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    currency_code: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    currency_name: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    postal_code_format: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    postal_code_regex: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    languages: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    geonameid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    neighbours: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    equivalent_fips_code: {
      type: DataTypes.STRING(125),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reg_country',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iso" },
        ]
      },
      {
        name: "country",
        using: "BTREE",
        fields: [
          { name: "country" },
        ]
      },
    ]
  });
};
