const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    creator_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    fund_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    round: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 9,
      comment: "Passed=0, Unscreened=5, Screened=9, Active=10, Presented=15, Syndicated=17, Complete =20, Exit=30, Other = 40"
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "USD"
    },
    investment_wanted: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    premoney: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    cap: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    expires: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    amount_invested: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    channel: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    deal_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "EQU"
    },
    dealflow_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    disable_dealroom_for_synd_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    disclose_raise: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    feature_on_homepage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    flg_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    minimum_bitesize: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    minimum_drawdown: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    total_shares: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    protected: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pull_from_cap_table: {
      type: DataTypes.JSON,
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    helium_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'campaigns',
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
        name: "org_id",
        using: "BTREE",
        fields: [
          { name: "org_id" },
        ]
      },
      {
        name: "status",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "org_id_2",
        using: "BTREE",
        fields: [
          { name: "org_id" },
          { name: "status" },
        ]
      },
      {
        name: "round",
        using: "BTREE",
        fields: [
          { name: "round" },
        ]
      },
      {
        name: "fund_id",
        using: "BTREE",
        fields: [
          { name: "fund_id" },
        ]
      },
      {
        name: "created",
        using: "BTREE",
        fields: [
          { name: "created" },
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
        name: "total_shares",
        using: "BTREE",
        fields: [
          { name: "total_shares" },
        ]
      },
    ]
  });
};
