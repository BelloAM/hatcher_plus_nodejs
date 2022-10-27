const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ind_clusters', {
    orig: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    new: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ind_clusters',
    timestamps: false
  });
};
