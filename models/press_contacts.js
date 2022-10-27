const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('press_contacts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    domain: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    lang: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    focus: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'press_contacts',
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
