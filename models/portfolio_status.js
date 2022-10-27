const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('portfolio_status', {
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
    investee_org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investee_campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partner_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    portfolio_team_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    h2_advisers_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fund_manager_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "First Degree approval"
    },
    fund_admin_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Maples user_id"
    },
    investee_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    partner_submission: {
      type: DataTypes.DATE,
      allowNull: true
    },
    portfolio_team_approval: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_ic_approval: {
      type: DataTypes.DATE,
      allowNull: true
    },
    h2_advisers_approval: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fund_manager_confirmation: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fund_admin_complete: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fund_admin_from_bank_account: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    transfer_initiated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    bank_reference: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    transfer_completed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    file_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_inactive: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    delete_notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    delete_by_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    flg_delete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'portfolio_status',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "partner_user_id" },
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
        name: "Updated",
        using: "BTREE",
        fields: [
          { name: "updated" },
        ]
      },
    ]
  });
};
