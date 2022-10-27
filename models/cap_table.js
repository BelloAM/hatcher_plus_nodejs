const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cap_table', {
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
    shareholder_org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    round_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "USD"
    },
    pps: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 0.00000000,
      comment: "price per share"
    },
    type: {
      type: DataTypes.ENUM('common','convertible','series_a','series_b','series_c','series_d','other'),
      allowNull: false,
      defaultValue: "common"
    },
    updated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2012_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2012_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2012_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2012_Q4': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2013_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2013_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2013_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2013_Q4': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2014_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2014_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2014_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2014_Q4': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2015_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2015_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2015_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2015_Q4': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2016_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2016_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2016_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2016_Q4': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2017_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2017_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2017_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2017_Q4': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2018_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2018_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2018_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2018_Q4': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2019_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2019_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2019_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2019_Q4': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2020_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2020_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2020_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2020_Q4': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'cap_table',
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
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
          { name: "org_id" },
          { name: "shareholder_org_id" },
        ]
      },
    ]
  });
};
