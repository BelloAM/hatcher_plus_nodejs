const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index_accelerators', {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partner_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
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
    deals_per_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    funding: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "United States of America"
    },
    sector: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sector_str: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Internet"
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
    aum: {
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
    tableName: 'index_accelerators',
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
        name: "funding",
        using: "BTREE",
        fields: [
          { name: "funding" },
        ]
      },
    ]
  });
};
