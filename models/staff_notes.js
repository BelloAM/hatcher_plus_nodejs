import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class staff_notes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    subject: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    action_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    active_page: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    channel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    client_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ext: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    flg_delete: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    note_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    page_title: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    restriction_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    session_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    staff_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    task_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'staff_notes',
    timestamps: false,
    paranoid: true
  });
  }
}
