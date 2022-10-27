const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fund_investments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fund_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    org_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "id of investor org"
    },
    accredited: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: "KYC, AML existing"
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    currency: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "USD"
    },
    date_invested: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    lead: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1",
      comment: "anchor investor"
    },
    other_conditions: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    probability: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 50
    },
    trig: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Once you have raised this amount..."
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 688969
    }
  }, {
    sequelize,
    tableName: 'fund_investments',
    timestamps: true,
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
        name: "amount",
        using: "BTREE",
        fields: [
          { name: "amount" },
        ]
      },
      {
        name: "currency",
        using: "BTREE",
        fields: [
          { name: "currency" },
        ]
      },
      {
        name: "fund_id",
        using: "BTREE",
        fields: [
          { name: "fund_id" },
        ]
      },
      {
        name: "probability",
        using: "BTREE",
        fields: [
          { name: "probability" },
        ]
      },
      {
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
    ]
  });
};
