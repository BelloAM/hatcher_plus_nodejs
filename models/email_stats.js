const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_stats', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    },
    last_delivered: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_opened: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_clicked: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_complained: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_permanent_fail: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_temporary_fail: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_unsubscribed: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'email_stats',
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
    ]
  });
};
