import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class funds extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    fund_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fund_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    advisor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auditor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bank_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cosponsor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    custodian_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sponsor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subfund_of: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subfund_approved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    agreement_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    agreement_constitution: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    agreement_formation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    agreement_manager: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    agreement_resolutions: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    cash_reserve: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fc_fund: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "0"
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_admin: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_bank: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_closing_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "2021-12-31"
    },
    fund_constitution: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_currency: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "USD"
    },
    fund_ddq_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fund_description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    fund_documentation_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fund_formation: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_inc_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fund_incorporation_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fund_jurisdiction: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fund_link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fund_manager: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fund_ppm: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_ppm_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fund_progress: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_reg_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fund_regulator: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fund_resolutions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fund_staff: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fund_status: {
      type: DataTypes.ENUM('-1','0','1','2'),
      allowNull: false,
      defaultValue: "1"
    },
    fund_structure: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fund_subscription: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_supplement: {
      type: DataTypes.JSON,
      allowNull: true
    },
    fund_supplement_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fund_type: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    fund_vintage: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fund_vintage_month: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    ic_voting_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    invested_to_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "only used on signup"
    },
    investments_to_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    invested_to_date_all: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "only used on signup"
    },
    target_return: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ticket_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ticket_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    test_fund: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'funds',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fund_id" },
        ]
      },
      {
        name: "synd_id",
        using: "BTREE",
        fields: [
          { name: "synd_id" },
        ]
      },
    ]
  });
  }
}
