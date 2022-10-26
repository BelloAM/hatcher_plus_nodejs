import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class investments extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    campaign_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    fund_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    investee_org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "investee"
    },
    investor_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "investor (if not org)"
    },
    org_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "investor"
    },
    status: {
      type: DataTypes.ENUM('-5','-4','-3','-2','-1','0','1','2','3','4','5','10','20'),
      allowNull: false,
      defaultValue: "0",
      comment: "5=investment complete, 10=converted to different project, 20=capital returned"
    },
    currency: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "USD"
    },
    amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    invested_currency: {
      type: DataTypes.STRING(4),
      allowNull: false,
      comment: "To be used when investment is in different currency"
    },
    invested_amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      comment: "To be used when investment is in different currency"
    },
    pps: {
      type: DataTypes.DECIMAL(15,8),
      allowNull: false,
      defaultValue: 0.00000000
    },
    shares: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false,
      defaultValue: 0.00
    },
    share_type: {
      type: DataTypes.ENUM('common','convertible','series_a','series_b','series_c','series_d','other'),
      allowNull: false,
      defaultValue: "common",
      comment: "Inherited from cap_table table. Use type for investment type and not this"
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    bank: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    bank_reference: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    cap: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false,
      defaultValue: 0.00
    },
    cap_table_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    cn_conversion_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cn_maturity_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cn_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>optional, 1=>compulsory"
    },
    discount: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    fund_manager_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    interest_accrued: {
      type: DataTypes.DECIMAL(14,8),
      allowNull: false
    },
    interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      comment: "For 5%, enter 5 etc."
    },
    investment_notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    issuance_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    lead: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: "lead investor"
    },
    option_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    options_allocated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    options_vested: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    prev_investment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "e.g. KISS converts to shares, put previous investment id here so the conversion chain is tracked"
    },
    share_entry_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0=>Shares and Price per Share, 1=>Shares and Investment Amount, 2=>Investment Amount and Price per Share"
    },
    source: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    term: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transfer_initiated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    transfer_completed: {
      type: DataTypes.DATE,
      allowNull: false
    },
    trig: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "EQU"
    },
    undisclosed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "Undisclosed investments on a cap table"
    },
    unissued_options_pool: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    Updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    helium_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'investments',
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
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
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
        name: "campaign_id",
        using: "BTREE",
        fields: [
          { name: "campaign_id" },
        ]
      },
      {
        name: "Updated",
        using: "BTREE",
        fields: [
          { name: "Updated" },
        ]
      },
      {
        name: "cn_issuance_date",
        using: "BTREE",
        fields: [
          { name: "issuance_date" },
        ]
      },
      {
        name: "undisclosed",
        using: "BTREE",
        fields: [
          { name: "undisclosed" },
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
        name: "investee_org_id",
        using: "BTREE",
        fields: [
          { name: "investee_org_id" },
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
  }
}
