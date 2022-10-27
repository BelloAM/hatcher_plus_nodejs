const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facilities', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    facility_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    facility_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    facility_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    facility_seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Number of people that can be squeezed in .. "
    },
    image_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'facilities',
    timestamps: false,
    paranoid: true,
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
        name: "facility_type_id",
        using: "BTREE",
        fields: [
          { name: "facility_type_id" },
        ]
      },
      {
        name: "synd_id",
        using: "BTREE",
        fields: [
          { name: "synd_id" },
        ]
      },
      {
        name: "seats",
        using: "BTREE",
        fields: [
          { name: "facility_seats" },
        ]
      },
    ]
  });
};
