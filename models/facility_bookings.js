const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facility_bookings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    booked_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    restriction_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 10
    },
    invitation: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    from_date: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    from_time: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    from_unix: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    to_date: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    to_time: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    to_unix: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'facility_bookings',
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
        name: "fid",
        using: "BTREE",
        fields: [
          { name: "fid" },
        ]
      },
      {
        name: "booked_by",
        using: "BTREE",
        fields: [
          { name: "booked_by", length: 191 },
        ]
      },
      {
        name: "purpose",
        using: "BTREE",
        fields: [
          { name: "purpose", length: 191 },
        ]
      },
      {
        name: "from_date",
        using: "BTREE",
        fields: [
          { name: "from_date" },
        ]
      },
      {
        name: "from_time",
        using: "BTREE",
        fields: [
          { name: "from_time" },
        ]
      },
      {
        name: "to_date",
        using: "BTREE",
        fields: [
          { name: "to_date" },
        ]
      },
      {
        name: "to_time",
        using: "BTREE",
        fields: [
          { name: "to_time" },
        ]
      },
      {
        name: "from_unix",
        using: "BTREE",
        fields: [
          { name: "from_unix" },
        ]
      },
      {
        name: "to_unix",
        using: "BTREE",
        fields: [
          { name: "to_unix" },
        ]
      },
    ]
  });
};
