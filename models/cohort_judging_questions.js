import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cohort_judging_questions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    question_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cohort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cohort_judging_questions',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "question_id" },
        ]
      },
      {
        name: "cohort",
        using: "BTREE",
        fields: [
          { name: "cohort" },
        ]
      },
    ]
  });
  }
}
