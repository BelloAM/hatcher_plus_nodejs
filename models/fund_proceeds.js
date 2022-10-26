import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class fund_proceeds extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    fund_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "id of investor org"
    },
    org_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    proceeds_amount: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: false,
      defaultValue: 0.00
    },
    currency: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "USD"
    },
    proceed_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sale_pending: {
      type: DataTypes.BOOLEAN,
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
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'fund_proceeds',
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
          { name: "proceeds_amount" },
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
