const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('investment_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    probability: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    status_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    days_to_demotion: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    rule_init: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    rule_time: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'investment_status',
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
