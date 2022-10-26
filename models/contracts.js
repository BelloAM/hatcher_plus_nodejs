import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class contracts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    contract_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    contract_terms_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contract_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contract_timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'contracts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
    ]
  });
  }
}
