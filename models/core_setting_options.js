import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class core_setting_options extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_setting_options',
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
        name: "core_setting_options_synd_id_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "synd_id" },
          { name: "name" },
        ]
      },
    ]
  });
  }
}
