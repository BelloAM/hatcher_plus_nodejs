const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('f6s_pipeline_mapping', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pipeline_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cohort_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pull_draft: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    pipeline_links: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'f6s_pipeline_mapping',
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
        name: "synd_id_pipeline_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "synd_id" },
          { name: "pipeline_name" },
        ]
      },
      {
        name: "pipeline_name",
        using: "BTREE",
        fields: [
          { name: "pipeline_name" },
        ]
      },
    ]
  });
};
