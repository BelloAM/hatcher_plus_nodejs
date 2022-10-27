const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orgs', {
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
    activated: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    former_names: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    friendly_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    org_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2,
      comment: "1=startup, 2=investor, 3=service_provider"
    },
    org_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    address1: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    address2: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false,
      defaultValue: 1.352080
    },
    lon: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false,
      defaultValue: 103.819840
    },
    company_email: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    introducer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    logo: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    primary_contact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    screenshot: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    screenshot_filename: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "website.jpg"
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    website_status: {
      type: DataTypes.JSON,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_inactive: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "in UTC"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    manual_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    alumni: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    app_quality_score_threshold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    auditor: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ""
    },
    aum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "assets under management"
    },
    bank: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    bank_aba: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bank_account_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    bank_account_number: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bank_address: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    bank_intermediary: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bank_intermediary_aba: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bank_intermediary_address: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    bank_intermediary_swift: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bank_notes: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    bank_swift: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bank_iban: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bscore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    clusters: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    company_secretary: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    },
    competitors: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    connections_investor: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    currency_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "USD"
    },
    custom_datarooms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    employee_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    esg_policy: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=none,10=neg_screen,20=ESG,30=Impact,40=Philanthropy"
    },
    founder_prepared_to_move: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    fund_admin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fund_manager: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fund_ids: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "0"
    },
    fund_trustee: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    funding_status: {
      type: DataTypes.JSON,
      allowNull: false
    },
    fye: {
      type: DataTypes.ENUM('0','1','4','7','10'),
      allowNull: false,
      defaultValue: "0"
    },
    governing_body: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    },
    hq: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    immediate_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    inc_date: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    inc_jurisdiction: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    industries: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    inv_size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inv_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    is_sharia: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_round: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    law_firm: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ""
    },
    listed_platform: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nda_from_template: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    nda_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nda_required_for_data: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    nda_required_for_presentation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    org_type_set: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pageviews: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    placement_agreement: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    pred_score_access_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    programs: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    reg_number: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    regions: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    staff_only: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    stages: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ticket_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ticket_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    token_based: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    un_sdgs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    update_request: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    upload_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    wire_funds_to: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "issuer"
    },
    asana_team_id: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    asana_workplace_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    channel_name: {
      type: DataTypes.STRING(21),
      allowNull: false
    },
    crunchbase: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    demo_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    f6s_status: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    facebook: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    google_plus: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    instagram: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    linkedin: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    github: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    pinterest: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    rss: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    skype: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    slack: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    ticker_symbol: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    twitter: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    video_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    video_url_vimeo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    video_url_youtube: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    vimeo: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    youtube: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    external_data_last_checked: {
      type: DataTypes.JSON,
      allowNull: true
    },
    protected: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    helium_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orgs',
    timestamps: false,
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
        name: "company",
        using: "BTREE",
        fields: [
          { name: "company", length: 250 },
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
        name: "city",
        using: "BTREE",
        fields: [
          { name: "city" },
        ]
      },
      {
        name: "org_type_id",
        using: "BTREE",
        fields: [
          { name: "org_type_id" },
        ]
      },
      {
        name: "org_type",
        using: "BTREE",
        fields: [
          { name: "org_type" },
        ]
      },
      {
        name: "updated",
        using: "BTREE",
        fields: [
          { name: "updated" },
        ]
      },
      {
        name: "source",
        using: "BTREE",
        fields: [
          { name: "source" },
        ]
      },
      {
        name: "country",
        using: "BTREE",
        fields: [
          { name: "country", length: 250 },
        ]
      },
      {
        name: "friendly_name",
        using: "BTREE",
        fields: [
          { name: "friendly_name" },
        ]
      },
      {
        name: "activated",
        using: "BTREE",
        fields: [
          { name: "activated" },
        ]
      },
    ]
  });
};
