const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('default_values', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    value: {
      type: DataTypes.JSON,
      allowNull: false
    },
    translate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sort: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    system: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'default_values',
    timestamps: true,
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
        name: "syndicate_settings",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
          { name: "synd_id" },
          { name: "deleted_at" },
        ]
      },
    ]
  });
};
