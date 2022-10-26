import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class faq extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    faq_id: {
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
    faq_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    faq_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    faq_cat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    faq_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    faq_views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    faq_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    faq_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    faq_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    faq_author: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    faq_tags: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "blog, investment, vc, venture capital"
    },
    is_article: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'faq',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "faq_id" },
        ]
      },
      {
        name: "INDEX",
        using: "BTREE",
        fields: [
          { name: "faq_user_id" },
        ]
      },
      {
        name: "blogentry_date",
        using: "BTREE",
        fields: [
          { name: "faq_date" },
        ]
      },
      {
        name: "LISTBYCAT",
        using: "BTREE",
        fields: [
          { name: "faq_user_id" },
          { name: "faq_cat_id" },
          { name: "faq_date" },
        ]
      },
      {
        name: "LISTBYDATE",
        using: "BTREE",
        fields: [
          { name: "faq_user_id" },
          { name: "faq_date" },
        ]
      },
    ]
  });
  }
}
