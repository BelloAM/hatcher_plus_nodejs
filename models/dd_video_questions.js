const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dd_video_questions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ml_topic_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mandatory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    translated_json: {
      type: DataTypes.JSON,
      allowNull: true
    },
    answer_length: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'dd_video_questions',
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
};
