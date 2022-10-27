const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index_campaigns', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fund: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    org: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lookupkey: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    round: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    company_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    amount_all_rounds: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    valuation: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    valuation_latest: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    ownership: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    roi_most_recent_val: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    roi_all_rounds: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    roi_this_round: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_campaigns',
    timestamps: false,
    indexes: [
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
