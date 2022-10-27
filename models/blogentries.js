const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blogentries', {
    blogentry_id: {
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
    blogentry_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    blogentry_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    blogentry_cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    blogentry_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    blogentry_views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    blogentry_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    blogentry_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    blogentry_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    blogentry_author: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    blogentry_tags: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "blog, investment, vc, venture capital"
    },
    blogentry_img: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    blogentry_slug: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "blog"
    },
    restriction_level: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    is_article: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'blogentries',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "blogentry_id" },
        ]
      },
      {
        name: "INDEX",
        using: "BTREE",
        fields: [
          { name: "blogentry_user_id" },
        ]
      },
      {
        name: "blogentry_date",
        using: "BTREE",
        fields: [
          { name: "blogentry_date" },
        ]
      },
      {
        name: "LISTBYCAT",
        using: "BTREE",
        fields: [
          { name: "blogentry_user_id" },
          { name: "blogentry_cat_id" },
          { name: "blogentry_date" },
        ]
      },
      {
        name: "LISTBYDATE",
        using: "BTREE",
        fields: [
          { name: "blogentry_user_id" },
          { name: "blogentry_date" },
        ]
      },
      {
        name: "blogentry_title",
        type: "FULLTEXT",
        fields: [
          { name: "blogentry_title" },
        ]
      },
    ]
  });
};
