const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_settings', {
    synd_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SYNDICATE_ADMIN_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 688969
    },
    SYNDICATE_HAS_FUND: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    SYNDICATE_ICON: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    SYNDICATE_LEGAL_NAME: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    SYNDICATE_LIVE: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "NO"
    },
    SYNDICATE_LOGO: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    SYNDICATE_LOGO_SIZE: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "20%"
    },
    SYNDICATE_MASTER: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SYNDICATE_NAME: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "Hatcher"
    },
    SYNDICATE_ORG_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    SYNDICATE_PHONE_NUMBER: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    ACCREDITATION: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ACTIVATE_ON_SIGNUP: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    ACTIVATE_PREDICTIVE_SCORE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    ACTIVATE_VIDEO: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    ADMINDIR: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "admin\/"
    },
    APP_LANG: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "\/var\/www\/html\/lang"
    },
    APPLICATION_MOVEMENT_UPDATES: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    APPLICATION_MULTISTEP_USER_JOURNEY: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    APPLICATION_STAFF_MAX: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 40
    },
    APPLICATION_STAFF_MIN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20
    },
    APPLICATION_THRESHOLD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    BOX_FOLDER_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BOX_GROUP_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CAPTCHA: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "ON"
    },
    CAPTCHA_TYPE: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "0"
    },
    COHORT_MANAGER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    COLOR_DANGER: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "#B80C09"
    },
    COLOR_INFO: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "#5bc0de"
    },
    COLOR_PRIMARY: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "#2574ac"
    },
    COLOR_SUCCESS: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "#6ed566"
    },
    COLOR_THEME: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "WHITE_WHITE"
    },
    COMPANY_TABS_SHOW: {
      type: DataTypes.JSON,
      allowNull: false
    },
    CREATED: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    CREDIT_PRICE: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "1"
    },
    CURRENCYSYMBOL: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "$"
    },
    CURRENCY_CODE: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "USD"
    },
    CUSTOM_HTML: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CUT_PERCENTAGE: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "5"
    },
    DATABASE_SALT: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "Bk3JR4Dt7NBTdwD7ekNYnHCDS"
    },
    DATE_FORMAT: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "YYYY-MM-DD"
    },
    DATE_FORMAT_LONG: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "dddd, MMMM D, YYYY"
    },
    DEFAULT_COUNTRY: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "US"
    },
    DEFAULT_DEALFLOW_VIEW: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 40
    },
    DEFAULT_LANG: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "en"
    },
    DEFAULT_ORIENTATION: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "L"
    },
    DEFAULT_PAGE_SIZE: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "A4"
    },
    DEFAULT_STAFF_WRITE_LEVEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20
    },
    DEFAULT_TWITTER_FEED: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    DEMO: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "NO"
    },
    DOMAIN: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "hatcher.com"
    },
    EMAIL_DISCLAIMER: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: "Confidential information may be contained in this message. If you are not the intended recipient, please notify the sender and delete it immediately. Do not copy, disclose or disseminate it or its contents in any form."
    },
    ETN: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    EVENTS_EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    FAVICON: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "https:\/\/hatcher.com\/app\/themes\/hatcher\/images\/hatcher_icon.png"
    },
    FEEDBACK_FORM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    GDPR: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "YES"
    },
    HATCHER_ORG_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HEADER_TYPE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    HOMEPAGE_BG_IMG: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    HOMEPAGE_BG_IMG_OVERLAY: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    HOMEPAGE_BG_IMG_Y: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "50%"
    },
    HOMEPAGE_BG_VIDEO: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    IC_MAJORITY: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 6
    },
    IMAGESDIR: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "assets\/org\/"
    },
    INITIAL_STAFF_LEVEL: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    INITIAL_STAFF_LEVEL_CONTACT_SHARING: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    INVITE_ONLY_MODE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    KPI_OPTIONS: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    LEXICON_STAFF: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "staff"
    },
    LOGIN_ON_REGISTRATION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    MAIL_ATTACHMENT_DIR: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    MINIMAL_REGISTRATION_FORM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    NEW_PROJECT_VERIFY: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "YES"
    },
    OAUTH: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "OFF"
    },
    PAGINATION_PER_PAGE: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "20"
    },
    PANEL_JUDGING: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "NO"
    },
    PAYPAL_EMAIL: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    PAYPAL_SANDBOX: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "YES"
    },
    PHPMAILER: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "YES"
    },
    PRIVACY_POLICY_LINK: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "https:\/\/hq.hatcher.com\/terms_of_service.php"
    },
    PROJECTS_CHECKLIST_ITEMS: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "NO"
    },
    PUBLIC_CAN_VIEW_PROFILE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "YES"
    },
    RECEIVE_APP_FROM_HQ: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    RECEIVE_APP_FROM_HQ_SETTINGS: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: " "
    },
    REDIRECT_LEVEL: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    REGISTRATION_PHONE_NUMBER_REQUIRED: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "NO"
    },
    REMEMBER_LOGIN_TIMEOUT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2592000
    },
    REQUIRE_GOAL: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "YES"
    },
    REQUIRED_DOCUMENTS: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "510,590"
    },
    SEND_REMINDER_EMAIL_KPI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SHOW_DOCUMENT_TYPE_MULTISTEP_USER_JOURNEY: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SHOW_RM_LEVEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    SHOW_SHARIA: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: "YES"
    },
    SITE_CALL_TO_ACTION: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: "Submit Business Plan"
    },
    SITE_CREDIT: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "100000"
    },
    SITE_DESC: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SITE_DISCLAIMER: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SITE_EMAIL: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "Hatcher <info@hatcher.com>"
    },
    SITE_KEYW: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "crowd,funding,investment"
    },
    STAFF_ONLY: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    SUBSCRIBER_NOTIFICATIONS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    SUBSCRIPTION: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    SUBSCRIPTION_BANK: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SUBSCRIPTION_BANK_ACCOUNT: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SUBSCRIPTION_BRANCH_NUMBER: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SUBSCRIPTION_DISCLAIMER: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    SUBSCRIPTION_SWIFT_CODE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TAKE_CUT: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "NO"
    },
    TEST_SYNDICATE: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    TERMS_ACCEPTED: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "NO"
    },
    THEME_NAME: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: "core_settings_theme_name_unique"
    },
    TIMEZONE: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "Asia\/Singapore"
    },
    TOS_LINK: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "https:\/\/hq.hatcher.com\/terms_of_service.php"
    },
    USE_HATCHER_EMAIL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    USE_HATCHER_RESOURCES: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    VERIFY_EMAIL: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: "YES"
    },
    VIDEO_INTERVIEW_STAGE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    WIRE_FUNDS_TO: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "investee"
    },
    ZENDESK: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    flg_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    COMPANY_INFO_REQUEST: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    helium_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'core_settings',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "synd_id" },
        ]
      },
      {
        name: "core_settings_theme_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "THEME_NAME" },
        ]
      },
      {
        name: "core_settings_theme_name_deleted_at_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "THEME_NAME" },
          { name: "deleted_at" },
        ]
      },
      {
        name: "APPLICATION_MULTISTEP_USER_JOURNEY",
        using: "BTREE",
        fields: [
          { name: "APPLICATION_MULTISTEP_USER_JOURNEY" },
        ]
      },
      {
        name: "SHOW_DOCUMENT_TYPE_MULTISTEP_USER_JOURNEY",
        using: "BTREE",
        fields: [
          { name: "SHOW_DOCUMENT_TYPE_MULTISTEP_USER_JOURNEY" },
        ]
      },
      {
        name: "RECEIVE_APP_FROM_HQ",
        using: "BTREE",
        fields: [
          { name: "RECEIVE_APP_FROM_HQ" },
        ]
      },
      {
        name: "core_settings_idx_live_deleted_name",
        using: "BTREE",
        fields: [
          { name: "SYNDICATE_LIVE" },
          { name: "flg_deleted" },
          { name: "SYNDICATE_NAME" },
        ]
      },
      {
        name: "flg_deleted",
        using: "BTREE",
        fields: [
          { name: "flg_deleted" },
        ]
      },
    ]
  });
};
