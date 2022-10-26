import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class mentor_availability extends Model {
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
      allowNull: false
    },
    mentor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    start_time: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    start_time_unix: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    end_time: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    end_time_unix: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    daily: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    weekly: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    delete_event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    setup_timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'mentor_availability',
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
