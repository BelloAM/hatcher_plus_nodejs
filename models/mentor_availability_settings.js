import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class mentor_availability_settings extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    send_notice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    send_reminder_email: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    slot_size_limit: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    view_limit: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'mentor_availability_settings',
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
