import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class log_investor_interest extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investor_synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investee_synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investor_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investee_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investor_org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investee_org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interest_currency: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    interest_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interest_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    accredited: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    active_page: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'log_investor_interest',
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
