import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class reg_tz extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_code: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING(125),
      allowNull: false,
      defaultValue: ""
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gmt_offset: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    dst_offset: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    raw_offset: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reg_tz',
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
        name: "location",
        using: "BTREE",
        fields: [
          { name: "location" },
        ]
      },
      {
        name: "country_code",
        using: "BTREE",
        fields: [
          { name: "country_code" },
        ]
      },
      {
        name: "timezone",
        using: "BTREE",
        fields: [
          { name: "timezone" },
        ]
      },
      {
        name: "location_2",
        using: "BTREE",
        fields: [
          { name: "location" },
        ]
      },
      {
        name: "gmt_offset",
        using: "BTREE",
        fields: [
          { name: "gmt_offset" },
        ]
      },
      {
        name: "location_3",
        using: "BTREE",
        fields: [
          { name: "location" },
          { name: "gmt_offset" },
        ]
      },
      {
        name: "country_code_2",
        using: "BTREE",
        fields: [
          { name: "country_code" },
          { name: "timezone" },
        ]
      },
      {
        name: "country_code_3",
        using: "BTREE",
        fields: [
          { name: "country_code" },
          { name: "location" },
        ]
      },
    ]
  });
  }
}
