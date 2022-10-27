const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index_cvr_angel_investors', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    investment_usd_b: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investees: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investors: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_cvr_angel_investors',
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
