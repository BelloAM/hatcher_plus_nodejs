import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class campaign_services extends Model {
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
      defaultValue: 1
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    format: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      defaultValue: "2",
      comment: "0=web,1=in-person,2=both"
    },
    type: {
      type: DataTypes.ENUM('t','d'),
      allowNull: false,
      defaultValue: "t"
    },
    autoconfirm: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0- off, 1 - on"
    },
    fromName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "Name"
    },
    fromEmail: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "noreply@email.com"
    },
    show_event_titles: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1-show,0-not show"
    },
    show_event_image: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1-show,0-not show"
    },
    show_available_seats: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1-show,0-not show"
    },
    default: {
      type: DataTypes.ENUM('y','n'),
      allowNull: false,
      defaultValue: "n"
    },
    deposit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 1.00
    },
    delBookings: {
      type: DataTypes.ENUM('y','n'),
      allowNull: false,
      defaultValue: "n"
    }
  }, {
    sequelize,
    tableName: 'campaign_services',
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
