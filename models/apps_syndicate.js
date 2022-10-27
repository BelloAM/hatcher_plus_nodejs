const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apps_syndicate', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    app_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    share_license: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'apps_syndicate',
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
        name: "apps_syndicate_index",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "synd_id" },
          { name: "app_id" },
          { name: "deleted_at" },
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
        name: "app_id",
        using: "BTREE",
        fields: [
          { name: "app_id" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
