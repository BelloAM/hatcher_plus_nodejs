const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_settings_json', {
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
    calendar: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    clusters: {
      type: DataTypes.JSON,
      allowNull: false
    },
    color_palette: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    color_theme: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    countdown: {
      type: DataTypes.JSON,
      allowNull: false
    },
    custom_app_messages: {
      type: DataTypes.JSON,
      allowNull: false
    },
    deal_flow: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    default_kpi_json: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    favorite_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    footer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    form_type_defaults: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    header: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    header_rev: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    industries: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    industry_verticals: {
      type: DataTypes.JSON,
      allowNull: false
    },
    investment_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keywords_investor: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keywords_sp: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    marketing: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    marketing_images: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    menus: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    modules: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    newsletter: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    notice_to_entrepreneurs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    org_profile_types: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    org_types: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    page_settings: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pda_schema: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    portfolio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    regions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    regulators: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    salutations: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sectors: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    shared_resources: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    subscription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tabs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    terms_of_service: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    translate: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_settings_json',
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
        name: "synd_id",
        using: "BTREE",
        fields: [
          { name: "synd_id" },
        ]
      },
    ]
  });
};
