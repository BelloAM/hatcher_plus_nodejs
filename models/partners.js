import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class partners extends Model {
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
      allowNull: false,
      defaultValue: 1
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    description_ar: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    description_en: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    description_fr: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    description_ja: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    description_pt_BR: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    description_zh: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "EN"
    },
    url: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "marketing"
    },
    status: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      defaultValue: "1"
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "golden_egg.jpg"
    }
  }, {
    sequelize,
    tableName: 'partners',
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
