import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class dd_questions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "content_id"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 668969
    },
    score: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 10
    },
    req: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    field: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    question: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    placeholder: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    defaults: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lang_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rules_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_entry_method: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "none"
    },
    format: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    flg_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'dd_questions',
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
        name: "content_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "content_id" },
        ]
      },
    ]
  });
  }
}
