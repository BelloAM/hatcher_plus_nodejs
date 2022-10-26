import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class regulators extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    jurisdiction_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    reg_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "reg_id"
    },
    reg_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    reg_region: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "SG"
    }
  }, {
    sequelize,
    tableName: 'regulators',
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
        name: "reg_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reg_id" },
        ]
      },
    ]
  });
  }
}
