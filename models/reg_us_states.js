import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class reg_us_states extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    abbreviation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    most_populous_city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reg_us_states',
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
        name: "name",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "abbreviation",
        using: "BTREE",
        fields: [
          { name: "abbreviation" },
        ]
      },
      {
        name: "capital",
        using: "BTREE",
        fields: [
          { name: "capital" },
        ]
      },
      {
        name: "most_populous_city",
        using: "BTREE",
        fields: [
          { name: "most_populous_city" },
        ]
      },
      {
        name: "timezone",
        using: "BTREE",
        fields: [
          { name: "timezone" },
        ]
      },
    ]
  });
  }
}
