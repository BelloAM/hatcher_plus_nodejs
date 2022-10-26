import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class investments_materials extends Model {
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
    investor_deck: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    business_plan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    executive_summary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    financial_projections: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    incorporation_documents: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    sha: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    term_sheet: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    management_accounts_audited: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    management_accounts_unaudited: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    management_team: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    market_research_private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    market_research_public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    shareholder_register: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    valuation_analysis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'investments_materials',
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
  }
}
