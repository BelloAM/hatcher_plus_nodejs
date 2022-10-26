import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class mf_lex_stop extends Model {
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
      allowNull: false,
      unique: "word"
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    lang: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "en"
    }
  }, {
    sequelize,
    tableName: 'mf_lex_stop',
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
        unique: true,
        using: "BTREE",
        fields: [
          { name: "word" },
        ]
      },
    ]
  });
  }
}
