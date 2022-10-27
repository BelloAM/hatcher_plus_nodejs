const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "id"
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    salutation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Guest"
    },
    middle_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    maiden_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(512),
      allowNull: false,
      unique: "email"
    },
    email_pending: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    province: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false
    },
    lon: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    accredited: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    activated: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    amount_invested: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    banked_credit: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    bill_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "0=none,1=auto-invoice,2=manual invoice,3=tbd"
    },
    clusters: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    connections_inbound: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    connections_outbound: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    credit: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    default_theme: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "light"
    },
    dev: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    education: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_activated: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    api_token: {
      type: DataTypes.STRING(80),
      allowNull: true,
      unique: "unique_api_token"
    },
    facebook: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    flg_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0=none,1=male,2=female"
    },
    google_plus: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    industries: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    info_request: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    instagram: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    introducer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    investments_made: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    ip_whitelist: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    languages: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: "en"
    },
    last_ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lighthouse_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Lighthouse user_id"
    },
    linkedin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    login_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    menu_format: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "mobile"
    },
    newsletter: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: -1
    },
    nationality: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notify_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    oauth_complete: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    oauth_provider: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    oauth_uid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password_bcrypt: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    password_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 600
    },
    place_of_birth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profile_picture: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    regions: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    signup_ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    skype: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    social_login: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    source: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    stages: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "subscription package id"
    },
    suspended: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    subscriptions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Asia\/Singapore"
    },
    twitter: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    wechat: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    whitelist: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    telegram: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    encrypted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "unique_api_token",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "api_token" },
        ]
      },
      {
        name: "last_name",
        using: "BTREE",
        fields: [
          { name: "last_name" },
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
        name: "province",
        using: "BTREE",
        fields: [
          { name: "province" },
        ]
      },
      {
        name: "first_name",
        using: "BTREE",
        fields: [
          { name: "first_name" },
        ]
      },
      {
        name: "updated",
        using: "BTREE",
        fields: [
          { name: "updated" },
        ]
      },
    ]
  });
};
