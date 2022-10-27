const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaign_schedule_days', {
    idItem: {
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
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dateFrom: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dateTo: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'campaign_schedule_days',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idItem" },
        ]
      },
    ]
  });
};
