const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaign_transactions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reservationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transactionID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    payment_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payer_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'campaign_transactions',
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
};
