import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class core_queue extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    api_endpoint: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "hatcher api to call"
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "json parameter"
    },
    callback: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "optional api to call"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>Created 1=>Processing 2=>Complete 3=>External Process (e.g TheQ)"
    },
    type: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "get"
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    flg_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'core_queue',
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
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
  }
}
