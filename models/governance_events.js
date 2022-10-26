import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class governance_events extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    last_agm: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    next_agm: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_board: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    next_board: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_egm: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    next_egm: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_audit: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    next_audit: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_mgmt_call: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    next_mgmt_call: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    added: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'governance_events',
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
