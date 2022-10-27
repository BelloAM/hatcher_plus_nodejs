const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fund_lps', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fund_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    round_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 100
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "fund_unit"
    },
    amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    updated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 688969
    },
    shares: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    '2021_Q1': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2021_Q2': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2021_Q3': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    '2021_Q4': {
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
    tableName: 'fund_lps',
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
        name: "type",
        using: "BTREE",
        fields: [
          { name: "type" },
          { name: "fund_id" },
          { name: "org_id" },
        ]
      },
    ]
  });
};
