const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index_cooley_vc_value_by_series', {
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
    series_a: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: false
    },
    series_b: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: false
    },
    series_c: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: false
    },
    series_d_and_higher: {
      type: DataTypes.DECIMAL(6,1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_cooley_vc_value_by_series',
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
