import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class org_updates extends Model {
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
    update_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'org_updates',
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
