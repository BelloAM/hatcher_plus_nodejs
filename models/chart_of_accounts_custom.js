const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chart_of_accounts_custom', {
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
    custom: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
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
    }
  }, {
    sequelize,
    tableName: 'chart_of_accounts_custom',
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
