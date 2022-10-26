import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class mf_lex_mods extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    word: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    example_text: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    lang: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "EN"
    },
    multiplier: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    modifier: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    orientation: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    weight: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    freq: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    meta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    naics_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    phrase: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    wordcount: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    testword: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mf_lex_mods',
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
        name: "word",
        using: "BTREE",
        fields: [
          { name: "word" },
        ]
      },
    ]
  });
  }
}
