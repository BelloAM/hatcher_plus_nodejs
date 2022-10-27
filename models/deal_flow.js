const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deal_flow', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
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
    deal_flow_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 9,
      comment: "Passed=0, Unscreened=5, Screened=9, Active=10, Presented=15, Syndicated=17, Complete =20, Exit=30, Other = 40"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'deal_flow',
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
        name: "org_id_5",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "org_id" },
          { name: "synd_id" },
          { name: "deal_flow_status" },
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
          { name: "deal_flow_status" },
        ]
      },
      {
        name: "org_id_2",
        using: "BTREE",
        fields: [
          { name: "org_id" },
          { name: "deal_flow_status" },
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
        name: "synd_id",
        using: "BTREE",
        fields: [
          { name: "synd_id" },
        ]
      },
      {
        name: "org_id_3",
        using: "BTREE",
        fields: [
          { name: "org_id" },
          { name: "synd_id" },
        ]
      },
      {
        name: "synd_id_2",
        using: "BTREE",
        fields: [
          { name: "synd_id" },
          { name: "deal_flow_status" },
        ]
      },
      {
        name: "org_id_4",
        using: "BTREE",
        fields: [
          { name: "org_id" },
          { name: "deal_flow_status" },
        ]
      },
    ]
  });
};
