import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class org_financials extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "USD"
    },
    report_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cash_at_bank: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    income_dividends: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    income_interest: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    income_other: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    expense_break_fees: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    expense_management_fees: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false,
      defaultValue: 0.00
    },
    expense_interest: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    expense_org: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    expense_other: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    expense_professional_fees: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    syndication_costs: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    transfers: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'org_financials',
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
          { name: "expense_management_fees" },
        ]
      },
      {
        name: "currency",
        using: "BTREE",
        fields: [
          { name: "currency" },
        ]
      },
    ]
  });
  }
}
