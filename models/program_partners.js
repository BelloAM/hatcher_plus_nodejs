const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('program_partners', {
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
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partner_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    investment_currency: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "USD"
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount_company: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount_insto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    avg_valuation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1000000
    },
    investment_equity: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
      defaultValue: 5.00
    },
    investment_agreement_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fund_first_closing_deadline: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    investment_period_start: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    investment_period_end: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    investments_conditional_on_closing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    investment_terms: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    background_to_partnership: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    rationale_for_fia: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    rationale_for_cia: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    rationale_for_iia: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    deals_per_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    investments: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    invested: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    companies: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exits: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    proceeds: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    realized: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nav: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'program_partners',
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
        name: "partner_status",
        using: "BTREE",
        fields: [
          { name: "partner_status" },
        ]
      },
    ]
  });
};
