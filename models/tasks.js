const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tasks', {
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
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    edited_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    next_action_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    priority: {
      type: DataTypes.ENUM('0','10','20','30','40','50'),
      allowNull: true,
      defaultValue: "50"
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    date_completed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reported_issue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    asana_task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    parent_task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    technical_details: {
      type: DataTypes.JSON,
      allowNull: true
    },
    flg_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tasks',
    timestamps: false,
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
        name: "next_action_by",
        using: "BTREE",
        fields: [
          { name: "next_action_by" },
        ]
      },
    ]
  });
};
