import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class countries extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    name_caps: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    altnames: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    region: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    subregion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    translated_json: {
      type: DataTypes.JSON,
      allowNull: true
    },
    iso3_code: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    num_code: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'countries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
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
        name: "region",
        using: "BTREE",
        fields: [
          { name: "region" },
        ]
      },
    ]
  });
  }
}
