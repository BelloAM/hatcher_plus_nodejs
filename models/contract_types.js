import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class contract_types extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    form_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    form_type_title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    form_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'contract_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "form_type_id" },
        ]
      },
    ]
  });
  }
}
