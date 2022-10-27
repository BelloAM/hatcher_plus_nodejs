const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dd_application_data', {
    application_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cohort_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "entrepreneur=1, investor=2, syndicate=3"
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datatype: {
      type: DataTypes.ENUM('10','30','50','70'),
      allowNull: false,
      defaultValue: "10"
    },
    lang: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "en"
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    score_predictive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mandate_matching_score_reason: {
      type: DataTypes.JSON,
      allowNull: true
    },
    score_mandate_matching: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    score_dd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    application_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    application_data_export: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    predictive_score_reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    flagged_application_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dd_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sectors: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dd_application_data',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "org_id AND synd_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
          { name: "synd_id" },
        ]
      },
      {
        name: "synd_id",
        using: "BTREE",
        fields: [
          { name: "synd_id" },
        ]
      },
      {
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
      {
        name: "updated",
        using: "BTREE",
        fields: [
          { name: "updated" },
        ]
      },
    ]
  });
};
