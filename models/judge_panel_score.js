const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('judge_panel_score', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cohort_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    application_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    judge_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    judge_panel_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    judge_score: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    judge_comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'judge_panel_score',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cohort_id",
        using: "BTREE",
        fields: [
          { name: "cohort_id" },
        ]
      },
    ]
  });
};
