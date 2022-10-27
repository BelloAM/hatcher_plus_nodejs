const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index_nvca', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    population_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startups_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vc_startups_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vc_deals_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vc_exits_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vc_ipos_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    non_vc_ipos_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vc_manda_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cvc_deals_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cvc_inv_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    non_cvc_inv_us: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_nvca',
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
