const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_temp', {
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
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "user_id"
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Guest"
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    introducer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activated: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    suspended: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false
    },
    signup_ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_ip: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    timezone: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Asia\/Singapore"
    },
    phone: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    home: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    accredited: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    staff: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0=not staff, 5=tester, 10=support staff, 20=analysts\/execs, 30=partners, 40=mg partners, 50=super admin"
    },
    ic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "investment committee"
    },
    mentor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    dev: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    whitelist: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    ip_whitelist: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    credit: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    banked_credit: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    investments_made: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    amount_invested: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    oauth_provider: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    oauth_uid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    oauth_complete: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    login_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    facebook: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    linkedin: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    twitter: {
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
    skype: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users_temp',
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
        name: "user_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
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
    ]
  });
};
