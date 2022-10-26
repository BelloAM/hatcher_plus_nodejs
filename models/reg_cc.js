import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class reg_cc extends Model {
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
      allowNull: true
    },
    '2d_country_code': {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    '3d_country_code': {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    phone_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sub_region: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    int_region: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    region_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sub_region_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    int_region_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reg_cc',
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
        name: "2d_country_code",
        using: "BTREE",
        fields: [
          { name: "2d_country_code" },
        ]
      },
      {
        name: "3d_country_code",
        using: "BTREE",
        fields: [
          { name: "3d_country_code" },
        ]
      },
      {
        name: "region",
        using: "BTREE",
        fields: [
          { name: "region" },
        ]
      },
      {
        name: "sub_region",
        using: "BTREE",
        fields: [
          { name: "sub_region" },
        ]
      },
      {
        name: "int_region",
        using: "BTREE",
        fields: [
          { name: "int_region" },
        ]
      },
      {
        name: "2d_country_code_2",
        using: "BTREE",
        fields: [
          { name: "2d_country_code" },
          { name: "sub_region" },
          { name: "int_region" },
          { name: "region_code" },
        ]
      },
    ]
  });
  }
}
