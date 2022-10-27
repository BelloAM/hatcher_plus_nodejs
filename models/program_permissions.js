const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('program_permissions', {
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
    h2_advisers_approval: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fund_manager_approval: {
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
    wire_transfer_effective_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    wire_transfer_bank_reference: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    investee_complete: {
      type: DataTypes.DATE,
      allowNull: true
    },
    file_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
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
    Updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'program_permissions',
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
        name: "four_params",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "synd_id" },
          { name: "investee_org_id" },
          { name: "investee_campaign_id" },
          { name: "active" },
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
          { name: "Updated" },
        ]
      },
    ]
  });
};
