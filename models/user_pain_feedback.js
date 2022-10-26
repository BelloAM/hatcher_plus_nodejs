import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_pain_feedback extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    other_users: {
      type: DataTypes.JSON,
      allowNull: false
    },
    module: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    process_or_workflow: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pain: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    suggestion_or_ask: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_pain_feedback',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "Notes",
        type: "FULLTEXT",
        fields: [
          { name: "pain" },
        ]
      },
      {
        name: "suggestion_or_ask",
        type: "FULLTEXT",
        fields: [
          { name: "suggestion_or_ask" },
        ]
      },
    ]
  });
  }
}
