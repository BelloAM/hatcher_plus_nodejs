import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class core_settings_html extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
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
    custom_body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_js: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_css: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_footer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_header: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_navbar: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    custom_navbar_public: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    home_page: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    page: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "index.html"
    },
    shortcodes: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: "{{{syndicates}}},{{{deals}}},{{{investors}}},{{{invested}}},{{{countries}}},{{{WWW}}},{{{WWW_HOME}}},{{{SITE_EMAIL}}},{{{SYNDICATE_ID}}},{{{SYNDICATE_NAME}}},{{{MEDIA_URL}}}"
    },
    replace_footer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    replace_header: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    target: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'core_settings_html',
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
  }
}
