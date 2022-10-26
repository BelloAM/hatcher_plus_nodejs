import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sectors extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    category_name_ar: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    category_name_en: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    category_name_fr: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    category_name_ja: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    category_name_pt_BR: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    category_name_ru: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category_name_zh: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    category_status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'sectors',
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
    ]
  });
  }
}
