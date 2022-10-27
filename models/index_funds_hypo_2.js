const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index_funds_hypo_2', {
    return_mult: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    size_10: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_25: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_50: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_100: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_200: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_400: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_600: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    },
    size_800: {
      type: DataTypes.DECIMAL(9,8),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_funds_hypo_2',
    timestamps: false
  });
};
