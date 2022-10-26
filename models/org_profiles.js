import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class org_profiles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    org_profile_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    synd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cohort_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    access: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 688969
    },
    account_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    advisor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dealflow_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    portfolio_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    follow_on_funding: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    ofac_result: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    online_flags: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    ops_flags: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "N"
    },
    activated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    dealflow_show: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ds_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ps_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'org_profiles',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "org_profile_id" },
        ]
      },
      {
        name: "synd_org_dealflow_status",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dealflow_status" },
          { name: "synd_id" },
          { name: "org_id" },
          { name: "cohort_id" },
        ]
      },
      {
        name: "synd_id_2",
        using: "BTREE",
        fields: [
          { name: "synd_id" },
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
        name: "dealflow_status",
        using: "BTREE",
        fields: [
          { name: "dealflow_status" },
          { name: "synd_id" },
          { name: "cohort_id" },
        ]
      },
    ]
  });
  }
}
