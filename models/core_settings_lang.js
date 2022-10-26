import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class core_settings_lang extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    lang_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lang: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    lang_trans: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    hreflang: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "en_US"
    },
    lang_olark: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    name_en: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name_local: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    markov_threshold: {
      type: DataTypes.DECIMAL(20,18),
      allowNull: false,
      defaultValue: 0.400000000000000000
    },
    substr_length: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 120
    },
    translated_json: {
      type: DataTypes.JSON,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    spoken_only: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'core_settings_lang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lang_id" },
        ]
      },
    ]
  });
  }
}
