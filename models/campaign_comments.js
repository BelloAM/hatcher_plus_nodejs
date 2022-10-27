const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaign_comments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    campaign_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    channel_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    source: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: "Hatcher.com"
    },
    subject: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    file: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    ext: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'campaign_comments',
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
