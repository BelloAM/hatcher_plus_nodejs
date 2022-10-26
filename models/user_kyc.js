import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_kyc extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    aliases: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "0=>Updated\n1=>In Progress\n2=>Failed"
    }
  }, {
    sequelize,
    tableName: 'user_kyc',
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
    ]
  });
  }
}
