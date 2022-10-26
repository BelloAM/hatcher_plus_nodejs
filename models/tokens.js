import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tokens extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    api_service_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Api Service ID | User ID"
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>Service Token\n1=>User Token"
    },
    issued: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    expires: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    flg_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    flg_delete: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tokens',
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
