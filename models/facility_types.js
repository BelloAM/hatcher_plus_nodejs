const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facility_types', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    type_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "'facility', 'staff', 'investor', 'location', 'organisation' etc"
    },
    item: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "e.g staff -> \"Director\", \"Finance\", \"Logistics\" etc"
    }
  }, {
    sequelize,
    tableName: 'facility_types',
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
      {
        name: "type_name",
        using: "BTREE",
        fields: [
          { name: "type_name", length: 191 },
        ]
      },
      {
        name: "item",
        using: "BTREE",
        fields: [
          { name: "item", length: 191 },
        ]
      },
    ]
  });
};
