const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('survey_results', {
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
    fund_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    data_sources: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    no_cohorts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    cohorts_per_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    program_length: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    participants_per_cohort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    init_funding_provided: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mentor_network: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mentors: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    demo_day: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    investors_per_demo_day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_cohort_ended: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    applied_per_cohort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accepted_per_cohort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    graduated_per_cohort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    most_recent_cohort: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    received_funding: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cohorts_graduated: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    companies_graduated: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    living: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dead: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exited: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nps_score: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    form_of_investment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    cash_or_in_kind: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    init_shareholding: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    init_investment: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'survey_results',
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
    ]
  });
};
