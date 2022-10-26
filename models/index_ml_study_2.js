import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class index_ml_study_2 extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    company_key: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    round_key: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    hqGlobalSubRegion: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    companyStateProvince: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_locale: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    hqLocation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    companyWebsite: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    have_profile_info: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    year_founded: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    currentBusinessStatus: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    industry_1: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    industry_2: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    industry_3: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    allIndustries: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    verticals: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    investors: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    individual_investors: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    invList: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    deal_seq: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dealDate: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dealSynopsis: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dealType: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dealType2: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dealType_Universe: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dealType_Series: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dealSizeStatus: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    valuationStatus: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    preMoneyValuation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    selectedForAnalysis: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    excluded: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    companyStatus: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    zombie_rule_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    invDate: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    liqDate: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    seqRound: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_round_type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    baseRound: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dealSize: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    roundFunding: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    est_funding_value_info: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    investment_funding: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    valuation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    est_valuation_value_info: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    resurrected_exit_rule_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_post_valuation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    percentAcquired: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_acquired_equity: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_reserved_equity: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_retained_equity: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_liqpref_discount: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_dilution_factor: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_final_equity: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_prior_round_valuation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_penultimate_valuation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_resurrected_exit_factor: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_final_valuation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_final_return: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    active_residual_factor: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    active_residual_rule_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    roundReturn: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    returnMultiple: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_round_to_round_val_ratio: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eff_exit_to_penultimate_ratio: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    round_details_list: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    largest_funding: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    largest_valuation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    positiveExit: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    return_bucket: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    indIrr: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    delta_mth_prev_rnd: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    delta_mth_next_rnd: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    delta_mth_exit: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    adjRound: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    funding_range_round: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    stage_h: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    baseRound_list: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    adjRound_list: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    stage_h_list: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    baseRound_min: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    adjRound_min: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    funding_range_round_min: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    stage_h_min: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    inv_year: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    inv_year_min: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    inv_year_max: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    invDate_min: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    invDate_max: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    months_elapsed_span: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    months_elapsed_max_gap: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    months_elapsed_pre_exit: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    months_elapsed_post_activity: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    latestEventDate: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    id_list: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    instance_count: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    round_count: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    source_group: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    source_file: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    row_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dealClass: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    debtType: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    debtType2: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    debtType3: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    debtAmount: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    currentFinancingStatus: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    CeoBiography: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    CeoEducation: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    TotalVcFunding: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    businessStatus: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    EmployeeCount: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    investorCount: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    LeadInvestor: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FirstTimeInvestorCount: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FollowOnInvestors: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FollowOnInvestorCount: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'index_ml_study_2',
    timestamps: false
  });
  }
}
