const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chart_of_accounts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "For syndicate level kpis"
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    custom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    vendor: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: "hatcher"
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    report_code: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    account_name: {
      type: DataTypes.STRING(57),
      allowNull: true
    },
    account_type: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    account_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    accuracy_check: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    tax_code: {
      type: DataTypes.STRING(17),
      allowNull: true
    },
    account_desc: {
      type: DataTypes.STRING(389),
      allowNull: true
    },
    dashboard: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    expense_claims: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    enable_payments: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    balance: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    trial_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 200
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chart_of_accounts',
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
