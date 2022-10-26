import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class campaign_events extends Model {
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
      allowNull: false,
      defaultValue: 1
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    agenda: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    allow_multiple: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
      comment: "1- yes 2 - no"
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    coupon: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    demo_day: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    deposit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    disableMeetings: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    entryFee: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    eventDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    unix_start: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    eventDateEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    unix_end: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    eventTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    flg_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ical_path: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    map_link: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    max_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    meeting_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_method: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    payment_required: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2
    },
    poll_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    public: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    recurring: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    recurringEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    repeate: {
      type: DataTypes.ENUM('year','month','week','day',''),
      allowNull: false
    },
    repeate_interval: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restriction_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 10
    },
    spaces: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    timezone: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Asia\/Singapore"
    },
    invitation: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    cronofy_event_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cronofy_calendar_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'campaign_events',
    timestamps: false,
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
