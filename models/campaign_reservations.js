const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaign_reservations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reminder_sent: {
      type: DataTypes.ENUM('y','n'),
      allowNull: false,
      defaultValue: "n"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2,
      comment: "1 - confirmed, 2 - not confirmed"
    },
    attendee_data_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    coupon: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    flg_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    mtg_units: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'campaign_reservations',
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
};
