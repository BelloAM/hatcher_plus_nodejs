const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_connections', {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    connection_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pending: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'user_connections',
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
        name: "user_connections_synd_id_user_id_connection_user_id_index",
        using: "BTREE",
        fields: [
          { name: "synd_id" },
          { name: "user_id" },
          { name: "connection_user_id" },
        ]
      },
    ]
  });
};
