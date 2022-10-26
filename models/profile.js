import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class profile extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    profile_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 205
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    exec: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mentor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    acc_mgrs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    approval_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    default_language: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "en"
    },
    default_profile: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    director: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1=director,2=chair,3=observer"
    },
    exclude_from_results: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fuzzy_logic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    investments: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    list_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    manual_update: {
      type: DataTypes.DATE(1),
      allowNull: false,
      defaultValue: "CURRENT_TIMESTAMP(1)",
      comment: "To record timestamp for profiles that were manually updated "
    },
    newsletter: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: -1
    },
    outreach: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    synd_org_access: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    permissions_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preferences_json: {
      type: DataTypes.JSON,
      allowNull: false
    },
    signatory: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    smart_search: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    subscriptions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    ticket_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25000
    },
    ticket_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 250000
    },
    watchlist: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    video_submitted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    zoom_user_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    flg_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'profile',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "user_id_2",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
      {
        name: "exec",
        using: "BTREE",
        fields: [
          { name: "exec" },
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
        name: "user_id_3",
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "org_id" },
          { name: "synd_id" },
          { name: "exec" },
          { name: "deleted_at" },
        ]
      },
      {
        name: "profile_user_type_index",
        using: "BTREE",
        fields: [
          { name: "user_type" },
        ]
      },
    ]
  });
  }
}
