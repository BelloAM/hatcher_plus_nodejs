import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class financials extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    type: {
      type: DataTypes.ENUM('cash','cogs','shares','nav','opex','revenue','staff','users'),
      allowNull: false,
      defaultValue: "nav"
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
    tableName: 'financials',
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
        ]
      },
    ]
  });
  }
}
