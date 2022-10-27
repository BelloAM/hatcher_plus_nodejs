const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mentor_bookings', {
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
    mid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "mentor id"
    },
    mentee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mentor_confirmed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mentee_confirmed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    booked_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    delete_booking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mentor_bookings',
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
        name: "mentor_id",
        using: "BTREE",
        fields: [
          { name: "mid" },
        ]
      },
      {
        name: "mentee_id",
        using: "BTREE",
        fields: [
          { name: "mentee_id" },
        ]
      },
      {
        name: "mentor_confirmed",
        using: "BTREE",
        fields: [
          { name: "mentor_confirmed" },
        ]
      },
      {
        name: "mentee_confirmed",
        using: "BTREE",
        fields: [
          { name: "mentee_confirmed" },
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
        name: "from_unix",
        using: "BTREE",
        fields: [
          { name: "from_unix" },
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
        name: "to_unix",
        using: "BTREE",
        fields: [
          { name: "to_unix" },
        ]
      },
      {
        name: "booked_by",
        using: "BTREE",
        fields: [
          { name: "booked_by" },
        ]
      },
      {
        name: "purpose",
        using: "BTREE",
        fields: [
          { name: "purpose" },
        ]
      },
    ]
  });
};
