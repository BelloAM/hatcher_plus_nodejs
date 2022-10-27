const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('program_startups', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "org_id_2"
    },
    contacted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    booked: {
      type: DataTypes.DATE,
      allowNull: true
    },
    booked_zoom_link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    trained: {
      type: DataTypes.DATE,
      allowNull: true
    },
    alex_reminded_1: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'program_startups',
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
        name: "org_id_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
      {
        name: "booked",
        using: "BTREE",
        fields: [
          { name: "booked" },
        ]
      },
      {
        name: "booked_zoom_link",
        using: "BTREE",
        fields: [
          { name: "booked_zoom_link" },
        ]
      },
      {
        name: "reminded",
        using: "BTREE",
        fields: [
          { name: "alex_reminded_1" },
        ]
      },
    ]
  });
};
