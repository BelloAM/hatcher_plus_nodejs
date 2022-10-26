import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class index_funds_data extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datasource: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    founded: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    aum: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dry_powder: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fund_size: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g1_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g2_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g3_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g_other: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g_other_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g1_deals: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g2_deals: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g3_deals: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    g_other_deals: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i1_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i2_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i3_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i_other: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i_other_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i1_deals: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i2_deals: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i3_deals: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    i_other_deals: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    num_inv: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fund_size_orgs_approx: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fund_size_orgs: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inv_last_10_yrs: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    seed: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_a: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_b: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_c: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_d: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_e_plus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    early: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    growth: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mature: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    seed_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_a_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_b_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_c_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_d_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    series_e_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    total_considered_dead_exit: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    num_orgs_to_breach: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    perc_orgs_to_breach: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    return_mult: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    total_considered: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    early_stage_index: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'index_funds_data',
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
    ]
  });
  }
}
