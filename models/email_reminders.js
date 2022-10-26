import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class email_reminders extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    },
    complete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    last_completed: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'email_reminders',
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
