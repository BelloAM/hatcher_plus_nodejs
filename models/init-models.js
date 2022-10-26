import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _access_links from  "./access_links.js";
import _activation_links from  "./activation_links.js";
import _api_authentication_keys from  "./api_authentication_keys.js";
import _api_services from  "./api_services.js";
import _apps from  "./apps.js";
import _apps_org from  "./apps_org.js";
import _apps_syndicate from  "./apps_syndicate.js";
import _asset_types from  "./asset_types.js";
import _assets from  "./assets.js";
import _bank_account_balances from  "./bank_account_balances.js";
import _bank_accounts from  "./bank_accounts.js";
import _bcorp_ref_data from  "./bcorp_ref_data.js";
import _blogentries from  "./blogentries.js";
import _blogs from  "./blogs.js";
import _budgets from  "./budgets.js";
import _bugs from  "./bugs.js";
import _campaign_comments from  "./campaign_comments.js";
import _campaign_events from  "./campaign_events.js";
import _campaign_id_mapping from  "./campaign_id_mapping.js";
import _campaign_profiles from  "./campaign_profiles.js";
import _campaign_reservations from  "./campaign_reservations.js";
import _campaign_reservations_items from  "./campaign_reservations_items.js";
import _campaign_reserved_time from  "./campaign_reserved_time.js";
import _campaign_reserved_time_items from  "./campaign_reserved_time_items.js";
import _campaign_roadshows from  "./campaign_roadshows.js";
import _campaign_schedule from  "./campaign_schedule.js";
import _campaign_schedule_days from  "./campaign_schedule_days.js";
import _campaign_service_days_settings from  "./campaign_service_days_settings.js";
import _campaign_service_settings from  "./campaign_service_settings.js";
import _campaign_services from  "./campaign_services.js";
import _campaign_settings from  "./campaign_settings.js";
import _campaign_training_reservations from  "./campaign_training_reservations.js";
import _campaign_training_reservations_items from  "./campaign_training_reservations_items.js";
import _campaign_training_schedule from  "./campaign_training_schedule.js";
import _campaign_trainings from  "./campaign_trainings.js";
import _campaign_transactions from  "./campaign_transactions.js";
import _campaign_votes from  "./campaign_votes.js";
import _campaigns from  "./campaigns.js";
import _cap_table from  "./cap_table.js";
import _categories from  "./categories.js";
import _change_logs from  "./change_logs.js";
import _channels from  "./channels.js";
import _chart_of_accounts from  "./chart_of_accounts.js";
import _chart_of_accounts_custom from  "./chart_of_accounts_custom.js";
import _chart_of_accounts_types from  "./chart_of_accounts_types.js";
import _cohort_judging_questions from  "./cohort_judging_questions.js";
import _cohorts from  "./cohorts.js";
import _common_notes from  "./common_notes.js";
import _company_info_requests from  "./company_info_requests.js";
import _contentables from  "./contentables.js";
import _contents from  "./contents.js";
import _contract_types from  "./contract_types.js";
import _contracts from  "./contracts.js";
import _core_queue from  "./core_queue.js";
import _core_setting_options from  "./core_setting_options.js";
import _core_settings from  "./core_settings.js";
import _core_settings_forex from  "./core_settings_forex.js";
import _core_settings_html from  "./core_settings_html.js";
import _core_settings_json from  "./core_settings_json.js";
import _core_settings_lang from  "./core_settings_lang.js";
import _countries from  "./countries.js";
import _credit_bank_logs from  "./credit_bank_logs.js";
import _credit_history from  "./credit_history.js";
import _credit_packages from  "./credit_packages.js";
import _datarobot_fields_question_mapping from  "./datarobot_fields_question_mapping.js";
import _dataroom_types from  "./dataroom_types.js";
import _datarooms from  "./datarooms.js";
import _datarooms_bkp from  "./datarooms_bkp.js";
import _datasources from  "./datasources.js";
import _dd_application_data from  "./dd_application_data.js";
import _dd_content from  "./dd_content.js";
import _dd_dataroom_types from  "./dd_dataroom_types.js";
import _dd_datarooms from  "./dd_datarooms.js";
import _dd_form from  "./dd_form.js";
import _dd_interview_text_answers from  "./dd_interview_text_answers.js";
import _dd_interview_text_questions from  "./dd_interview_text_questions.js";
import _dd_investor_performance from  "./dd_investor_performance.js";
import _dd_questions from  "./dd_questions.js";
import _dd_templates from  "./dd_templates.js";
import _dd_video_questions from  "./dd_video_questions.js";
import _deal_flow from  "./deal_flow.js";
import _deal_stage_checklists from  "./deal_stage_checklists.js";
import _deal_stage_checklists_orgs from  "./deal_stage_checklists_orgs.js";
import _default_values from  "./default_values.js";
import _document_mappings from  "./document_mappings.js";
import _document_metadata from  "./document_metadata.js";
import _document_templates from  "./document_templates.js";
import _dynamic_document_metadata from  "./dynamic_document_metadata.js";
import _email_campaigns from  "./email_campaigns.js";
import _email_inbound from  "./email_inbound.js";
import _email_reminders from  "./email_reminders.js";
import _email_stats from  "./email_stats.js";
import _email_templates from  "./email_templates.js";
import _email_updates from  "./email_updates.js";
import _f6s_pipeline_mapping from  "./f6s_pipeline_mapping.js";
import _f6s_question_id_mapping from  "./f6s_question_id_mapping.js";
import _facilities from  "./facilities.js";
import _facility_bookings from  "./facility_bookings.js";
import _facility_locations from  "./facility_locations.js";
import _facility_types from  "./facility_types.js";
import _failed_jobs from  "./failed_jobs.js";
import _faq from  "./faq.js";
import _fc_fund_entity from  "./fc_fund_entity.js";
import _fc_reports from  "./fc_reports.js";
import _fc_users_partner from  "./fc_users_partner.js";
import _feedback_form from  "./feedback_form.js";
import _fees from  "./fees.js";
import _financials from  "./financials.js";
import _folders from  "./folders.js";
import _fund_accounts from  "./fund_accounts.js";
import _fund_annual_fees from  "./fund_annual_fees.js";
import _fund_distributions from  "./fund_distributions.js";
import _fund_fees from  "./fund_fees.js";
import _fund_future_val from  "./fund_future_val.js";
import _fund_gp_functions from  "./fund_gp_functions.js";
import _fund_investments from  "./fund_investments.js";
import _fund_investments_nav from  "./fund_investments_nav.js";
import _fund_kyc_requirements from  "./fund_kyc_requirements.js";
import _fund_lps from  "./fund_lps.js";
import _fund_proceeds from  "./fund_proceeds.js";
import _funds from  "./funds.js";
import _governance_events from  "./governance_events.js";
import _governance_issues from  "./governance_issues.js";
import _ind_clusters from  "./ind_clusters.js";
import _index_accelerators from  "./index_accelerators.js";
import _index_accelerators_init from  "./index_accelerators_init.js";
import _index_campaigns from  "./index_campaigns.js";
import _index_cooley_vc_value_by_series from  "./index_cooley_vc_value_by_series.js";
import _index_cvr_angel_investors from  "./index_cvr_angel_investors.js";
import _index_early_stage from  "./index_early_stage.js";
import _index_funds from  "./index_funds.js";
import _index_funds_data from  "./index_funds_data.js";
import _index_funds_hypo_2 from  "./index_funds_hypo_2.js";
import _index_ml_study_2 from  "./index_ml_study_2.js";
import _index_nvca from  "./index_nvca.js";
import _index_unicorns from  "./index_unicorns.js";
import _index_unicorns_raw from  "./index_unicorns_raw.js";
import _industry_3 from  "./industry_3.js";
import _investment_round_old from  "./investment_round_old.js";
import _investment_rounds from  "./investment_rounds.js";
import _investment_status from  "./investment_status.js";
import _investment_types from  "./investment_types.js";
import _investments from  "./investments.js";
import _investments_faq from  "./investments_faq.js";
import _investments_materials from  "./investments_materials.js";
import _investments_messages from  "./investments_messages.js";
import _investments_packages from  "./investments_packages.js";
import _investments_updates from  "./investments_updates.js";
import _invites from  "./invites.js";
import _jobs from  "./jobs.js";
import _judge_panel from  "./judge_panel.js";
import _judge_panel_score from  "./judge_panel_score.js";
import _log_investor_interest from  "./log_investor_interest.js";
import _mailing_lists from  "./mailing_lists.js";
import _mentor_availability from  "./mentor_availability.js";
import _mentor_availability_settings from  "./mentor_availability_settings.js";
import _mentor_bookings from  "./mentor_bookings.js";
import _mentor_review_answers from  "./mentor_review_answers.js";
import _mentor_review_questions from  "./mentor_review_questions.js";
import _mf_dates from  "./mf_dates.js";
import _mf_lex_mods from  "./mf_lex_mods.js";
import _mf_lex_stop from  "./mf_lex_stop.js";
import _migrations from  "./migrations.js";
import _ml_names from  "./ml_names.js";
import _newsletters from  "./newsletters.js";
import _notifications_updates from  "./notifications_updates.js";
import _org_competitors from  "./org_competitors.js";
import _org_connections from  "./org_connections.js";
import _org_datarooms from  "./org_datarooms.js";
import _org_dd from  "./org_dd.js";
import _org_digital_metrics from  "./org_digital_metrics.js";
import _org_financials from  "./org_financials.js";
import _org_former_names from  "./org_former_names.js";
import _org_id_mapping from  "./org_id_mapping.js";
import _org_info_request_batches from  "./org_info_request_batches.js";
import _org_info_request_responses from  "./org_info_request_responses.js";
import _org_info_requests from  "./org_info_requests.js";
import _org_kpis from  "./org_kpis.js";
import _org_kyc from  "./org_kyc.js";
import _org_mailing_lists from  "./org_mailing_lists.js";
import _org_metrics from  "./org_metrics.js";
import _org_profiles from  "./org_profiles.js";
import _org_types from  "./org_types.js";
import _org_updates from  "./org_updates.js";
import _orgs from  "./orgs.js";
import _orgs_data from  "./orgs_data.js";
import _orgs_json from  "./orgs_json.js";
import _page_configurations from  "./page_configurations.js";
import _pages from  "./pages.js";
import _partner_documentation from  "./partner_documentation.js";
import _partners from  "./partners.js";
import _password_links from  "./password_links.js";
import _password_resets from  "./password_resets.js";
import _payout_requests from  "./payout_requests.js";
import _permissions from  "./permissions.js";
import _permissions_new from  "./permissions_new.js";
import _personal_messages from  "./personal_messages.js";
import _pm_data from  "./pm_data.js";
import _portfolio_status from  "./portfolio_status.js";
import _predictive_api_external_data from  "./predictive_api_external_data.js";
import _press from  "./press.js";
import _press_contacts from  "./press_contacts.js";
import _products from  "./products.js";
import _profile from  "./profile.js";
import _profile_claim from  "./profile_claim.js";
import _profile_data from  "./profile_data.js";
import _program_partners from  "./program_partners.js";
import _program_permissions from  "./program_permissions.js";
import _program_startups from  "./program_startups.js";
import _programs from  "./programs.js";
import _question_id_mappings from  "./question_id_mappings.js";
import _queue_completed_jobs from  "./queue_completed_jobs.js";
import _queue_failed_jobs from  "./queue_failed_jobs.js";
import _queue_jobs from  "./queue_jobs.js";
import _reg_cc from  "./reg_cc.js";
import _reg_country from  "./reg_country.js";
import _reg_tz from  "./reg_tz.js";
import _reg_us_states from  "./reg_us_states.js";
import _regions from  "./regions.js";
import _regulators from  "./regulators.js";
import _remember_login_tokens from  "./remember_login_tokens.js";
import _resources from  "./resources.js";
import _sectors from  "./sectors.js";
import _shared_resources from  "./shared_resources.js";
import _shares from  "./shares.js";
import _signatures from  "./signatures.js";
import _signed_documents from  "./signed_documents.js";
import _signed_links from  "./signed_links.js";
import _signups from  "./signups.js";
import _snapshot from  "./snapshot.js";
import _staff_notes from  "./staff_notes.js";
import _states_list from  "./states_list.js";
import _subregions from  "./subregions.js";
import _survey_results from  "./survey_results.js";
import _sys_maintenance from  "./sys_maintenance.js";
import _tasks from  "./tasks.js";
import _timezones from  "./timezones.js";
import _tmp_pwc_orgs from  "./tmp_pwc_orgs.js";
import _tokens from  "./tokens.js";
import _triggered_emails from  "./triggered_emails.js";
import _unicorns from  "./unicorns.js";
import _upload_configurations from  "./upload_configurations.js";
import _user_apps from  "./user_apps.js";
import _user_availabilities from  "./user_availabilities.js";
import _user_connections from  "./user_connections.js";
import _user_former_infos from  "./user_former_infos.js";
import _user_id_mapping from  "./user_id_mapping.js";
import _user_kyc from  "./user_kyc.js";
import _user_ndas from  "./user_ndas.js";
import _user_pain_feedback from  "./user_pain_feedback.js";
import _users from  "./users.js";
import _users_archive from  "./users_archive.js";
import _users_bello from  "./users_bello.js";
import _users_data from  "./users_data.js";
import _users_encrypted from  "./users_encrypted.js";
import _users_temp from  "./users_temp.js";
import _video_answers from  "./video_answers.js";
import _workflow_users from  "./workflow_users.js";
import _workflows from  "./workflows.js";

export default function initModels(sequelize) {
  const access_links = _access_links.init(sequelize, DataTypes);
  const activation_links = _activation_links.init(sequelize, DataTypes);
  const api_authentication_keys = _api_authentication_keys.init(sequelize, DataTypes);
  const api_services = _api_services.init(sequelize, DataTypes);
  const apps = _apps.init(sequelize, DataTypes);
  const apps_org = _apps_org.init(sequelize, DataTypes);
  const apps_syndicate = _apps_syndicate.init(sequelize, DataTypes);
  const asset_types = _asset_types.init(sequelize, DataTypes);
  const assets = _assets.init(sequelize, DataTypes);
  const bank_account_balances = _bank_account_balances.init(sequelize, DataTypes);
  const bank_accounts = _bank_accounts.init(sequelize, DataTypes);
  const bcorp_ref_data = _bcorp_ref_data.init(sequelize, DataTypes);
  const blogentries = _blogentries.init(sequelize, DataTypes);
  const blogs = _blogs.init(sequelize, DataTypes);
  const budgets = _budgets.init(sequelize, DataTypes);
  const bugs = _bugs.init(sequelize, DataTypes);
  const campaign_comments = _campaign_comments.init(sequelize, DataTypes);
  const campaign_events = _campaign_events.init(sequelize, DataTypes);
  const campaign_id_mapping = _campaign_id_mapping.init(sequelize, DataTypes);
  const campaign_profiles = _campaign_profiles.init(sequelize, DataTypes);
  const campaign_reservations = _campaign_reservations.init(sequelize, DataTypes);
  const campaign_reservations_items = _campaign_reservations_items.init(sequelize, DataTypes);
  const campaign_reserved_time = _campaign_reserved_time.init(sequelize, DataTypes);
  const campaign_reserved_time_items = _campaign_reserved_time_items.init(sequelize, DataTypes);
  const campaign_roadshows = _campaign_roadshows.init(sequelize, DataTypes);
  const campaign_schedule = _campaign_schedule.init(sequelize, DataTypes);
  const campaign_schedule_days = _campaign_schedule_days.init(sequelize, DataTypes);
  const campaign_service_days_settings = _campaign_service_days_settings.init(sequelize, DataTypes);
  const campaign_service_settings = _campaign_service_settings.init(sequelize, DataTypes);
  const campaign_services = _campaign_services.init(sequelize, DataTypes);
  const campaign_settings = _campaign_settings.init(sequelize, DataTypes);
  const campaign_training_reservations = _campaign_training_reservations.init(sequelize, DataTypes);
  const campaign_training_reservations_items = _campaign_training_reservations_items.init(sequelize, DataTypes);
  const campaign_training_schedule = _campaign_training_schedule.init(sequelize, DataTypes);
  const campaign_trainings = _campaign_trainings.init(sequelize, DataTypes);
  const campaign_transactions = _campaign_transactions.init(sequelize, DataTypes);
  const campaign_votes = _campaign_votes.init(sequelize, DataTypes);
  const campaigns = _campaigns.init(sequelize, DataTypes);
  const cap_table = _cap_table.init(sequelize, DataTypes);
  const categories = _categories.init(sequelize, DataTypes);
  const change_logs = _change_logs.init(sequelize, DataTypes);
  const channels = _channels.init(sequelize, DataTypes);
  const chart_of_accounts = _chart_of_accounts.init(sequelize, DataTypes);
  const chart_of_accounts_custom = _chart_of_accounts_custom.init(sequelize, DataTypes);
  const chart_of_accounts_types = _chart_of_accounts_types.init(sequelize, DataTypes);
  const cohort_judging_questions = _cohort_judging_questions.init(sequelize, DataTypes);
  const cohorts = _cohorts.init(sequelize, DataTypes);
  const common_notes = _common_notes.init(sequelize, DataTypes);
  const company_info_requests = _company_info_requests.init(sequelize, DataTypes);
  const contentables = _contentables.init(sequelize, DataTypes);
  const contents = _contents.init(sequelize, DataTypes);
  const contract_types = _contract_types.init(sequelize, DataTypes);
  const contracts = _contracts.init(sequelize, DataTypes);
  const core_queue = _core_queue.init(sequelize, DataTypes);
  const core_setting_options = _core_setting_options.init(sequelize, DataTypes);
  const core_settings = _core_settings.init(sequelize, DataTypes);
  const core_settings_forex = _core_settings_forex.init(sequelize, DataTypes);
  const core_settings_html = _core_settings_html.init(sequelize, DataTypes);
  const core_settings_json = _core_settings_json.init(sequelize, DataTypes);
  const core_settings_lang = _core_settings_lang.init(sequelize, DataTypes);
  const countries = _countries.init(sequelize, DataTypes);
  const credit_bank_logs = _credit_bank_logs.init(sequelize, DataTypes);
  const credit_history = _credit_history.init(sequelize, DataTypes);
  const credit_packages = _credit_packages.init(sequelize, DataTypes);
  const datarobot_fields_question_mapping = _datarobot_fields_question_mapping.init(sequelize, DataTypes);
  const dataroom_types = _dataroom_types.init(sequelize, DataTypes);
  const datarooms = _datarooms.init(sequelize, DataTypes);
  const datarooms_bkp = _datarooms_bkp.init(sequelize, DataTypes);
  const datasources = _datasources.init(sequelize, DataTypes);
  const dd_application_data = _dd_application_data.init(sequelize, DataTypes);
  const dd_content = _dd_content.init(sequelize, DataTypes);
  const dd_dataroom_types = _dd_dataroom_types.init(sequelize, DataTypes);
  const dd_datarooms = _dd_datarooms.init(sequelize, DataTypes);
  const dd_form = _dd_form.init(sequelize, DataTypes);
  const dd_interview_text_answers = _dd_interview_text_answers.init(sequelize, DataTypes);
  const dd_interview_text_questions = _dd_interview_text_questions.init(sequelize, DataTypes);
  const dd_investor_performance = _dd_investor_performance.init(sequelize, DataTypes);
  const dd_questions = _dd_questions.init(sequelize, DataTypes);
  const dd_templates = _dd_templates.init(sequelize, DataTypes);
  const dd_video_questions = _dd_video_questions.init(sequelize, DataTypes);
  const deal_flow = _deal_flow.init(sequelize, DataTypes);
  const deal_stage_checklists = _deal_stage_checklists.init(sequelize, DataTypes);
  const deal_stage_checklists_orgs = _deal_stage_checklists_orgs.init(sequelize, DataTypes);
  const default_values = _default_values.init(sequelize, DataTypes);
  const document_mappings = _document_mappings.init(sequelize, DataTypes);
  const document_metadata = _document_metadata.init(sequelize, DataTypes);
  const document_templates = _document_templates.init(sequelize, DataTypes);
  const dynamic_document_metadata = _dynamic_document_metadata.init(sequelize, DataTypes);
  const email_campaigns = _email_campaigns.init(sequelize, DataTypes);
  const email_inbound = _email_inbound.init(sequelize, DataTypes);
  const email_reminders = _email_reminders.init(sequelize, DataTypes);
  const email_stats = _email_stats.init(sequelize, DataTypes);
  const email_templates = _email_templates.init(sequelize, DataTypes);
  const email_updates = _email_updates.init(sequelize, DataTypes);
  const f6s_pipeline_mapping = _f6s_pipeline_mapping.init(sequelize, DataTypes);
  const f6s_question_id_mapping = _f6s_question_id_mapping.init(sequelize, DataTypes);
  const facilities = _facilities.init(sequelize, DataTypes);
  const facility_bookings = _facility_bookings.init(sequelize, DataTypes);
  const facility_locations = _facility_locations.init(sequelize, DataTypes);
  const facility_types = _facility_types.init(sequelize, DataTypes);
  const failed_jobs = _failed_jobs.init(sequelize, DataTypes);
  const faq = _faq.init(sequelize, DataTypes);
  const fc_fund_entity = _fc_fund_entity.init(sequelize, DataTypes);
  const fc_reports = _fc_reports.init(sequelize, DataTypes);
  const fc_users_partner = _fc_users_partner.init(sequelize, DataTypes);
  const feedback_form = _feedback_form.init(sequelize, DataTypes);
  const fees = _fees.init(sequelize, DataTypes);
  const financials = _financials.init(sequelize, DataTypes);
  const folders = _folders.init(sequelize, DataTypes);
  const fund_accounts = _fund_accounts.init(sequelize, DataTypes);
  const fund_annual_fees = _fund_annual_fees.init(sequelize, DataTypes);
  const fund_distributions = _fund_distributions.init(sequelize, DataTypes);
  const fund_fees = _fund_fees.init(sequelize, DataTypes);
  const fund_future_val = _fund_future_val.init(sequelize, DataTypes);
  const fund_gp_functions = _fund_gp_functions.init(sequelize, DataTypes);
  const fund_investments = _fund_investments.init(sequelize, DataTypes);
  const fund_investments_nav = _fund_investments_nav.init(sequelize, DataTypes);
  const fund_kyc_requirements = _fund_kyc_requirements.init(sequelize, DataTypes);
  const fund_lps = _fund_lps.init(sequelize, DataTypes);
  const fund_proceeds = _fund_proceeds.init(sequelize, DataTypes);
  const funds = _funds.init(sequelize, DataTypes);
  const governance_events = _governance_events.init(sequelize, DataTypes);
  const governance_issues = _governance_issues.init(sequelize, DataTypes);
  const ind_clusters = _ind_clusters.init(sequelize, DataTypes);
  const index_accelerators = _index_accelerators.init(sequelize, DataTypes);
  const index_accelerators_init = _index_accelerators_init.init(sequelize, DataTypes);
  const index_campaigns = _index_campaigns.init(sequelize, DataTypes);
  const index_cooley_vc_value_by_series = _index_cooley_vc_value_by_series.init(sequelize, DataTypes);
  const index_cvr_angel_investors = _index_cvr_angel_investors.init(sequelize, DataTypes);
  const index_early_stage = _index_early_stage.init(sequelize, DataTypes);
  const index_funds = _index_funds.init(sequelize, DataTypes);
  const index_funds_data = _index_funds_data.init(sequelize, DataTypes);
  const index_funds_hypo_2 = _index_funds_hypo_2.init(sequelize, DataTypes);
  const index_ml_study_2 = _index_ml_study_2.init(sequelize, DataTypes);
  const index_nvca = _index_nvca.init(sequelize, DataTypes);
  const index_unicorns = _index_unicorns.init(sequelize, DataTypes);
  const index_unicorns_raw = _index_unicorns_raw.init(sequelize, DataTypes);
  const industry_3 = _industry_3.init(sequelize, DataTypes);
  const investment_round_old = _investment_round_old.init(sequelize, DataTypes);
  const investment_rounds = _investment_rounds.init(sequelize, DataTypes);
  const investment_status = _investment_status.init(sequelize, DataTypes);
  const investment_types = _investment_types.init(sequelize, DataTypes);
  const investments = _investments.init(sequelize, DataTypes);
  const investments_faq = _investments_faq.init(sequelize, DataTypes);
  const investments_materials = _investments_materials.init(sequelize, DataTypes);
  const investments_messages = _investments_messages.init(sequelize, DataTypes);
  const investments_packages = _investments_packages.init(sequelize, DataTypes);
  const investments_updates = _investments_updates.init(sequelize, DataTypes);
  const invites = _invites.init(sequelize, DataTypes);
  const jobs = _jobs.init(sequelize, DataTypes);
  const judge_panel = _judge_panel.init(sequelize, DataTypes);
  const judge_panel_score = _judge_panel_score.init(sequelize, DataTypes);
  const log_investor_interest = _log_investor_interest.init(sequelize, DataTypes);
  const mailing_lists = _mailing_lists.init(sequelize, DataTypes);
  const mentor_availability = _mentor_availability.init(sequelize, DataTypes);
  const mentor_availability_settings = _mentor_availability_settings.init(sequelize, DataTypes);
  const mentor_bookings = _mentor_bookings.init(sequelize, DataTypes);
  const mentor_review_answers = _mentor_review_answers.init(sequelize, DataTypes);
  const mentor_review_questions = _mentor_review_questions.init(sequelize, DataTypes);
  const mf_dates = _mf_dates.init(sequelize, DataTypes);
  const mf_lex_mods = _mf_lex_mods.init(sequelize, DataTypes);
  const mf_lex_stop = _mf_lex_stop.init(sequelize, DataTypes);
  const migrations = _migrations.init(sequelize, DataTypes);
  const ml_names = _ml_names.init(sequelize, DataTypes);
  const newsletters = _newsletters.init(sequelize, DataTypes);
  const notifications_updates = _notifications_updates.init(sequelize, DataTypes);
  const org_competitors = _org_competitors.init(sequelize, DataTypes);
  const org_connections = _org_connections.init(sequelize, DataTypes);
  const org_datarooms = _org_datarooms.init(sequelize, DataTypes);
  const org_dd = _org_dd.init(sequelize, DataTypes);
  const org_digital_metrics = _org_digital_metrics.init(sequelize, DataTypes);
  const org_financials = _org_financials.init(sequelize, DataTypes);
  const org_former_names = _org_former_names.init(sequelize, DataTypes);
  const org_id_mapping = _org_id_mapping.init(sequelize, DataTypes);
  const org_info_request_batches = _org_info_request_batches.init(sequelize, DataTypes);
  const org_info_request_responses = _org_info_request_responses.init(sequelize, DataTypes);
  const org_info_requests = _org_info_requests.init(sequelize, DataTypes);
  const org_kpis = _org_kpis.init(sequelize, DataTypes);
  const org_kyc = _org_kyc.init(sequelize, DataTypes);
  const org_mailing_lists = _org_mailing_lists.init(sequelize, DataTypes);
  const org_metrics = _org_metrics.init(sequelize, DataTypes);
  const org_profiles = _org_profiles.init(sequelize, DataTypes);
  const org_types = _org_types.init(sequelize, DataTypes);
  const org_updates = _org_updates.init(sequelize, DataTypes);
  const orgs = _orgs.init(sequelize, DataTypes);
  const orgs_data = _orgs_data.init(sequelize, DataTypes);
  const orgs_json = _orgs_json.init(sequelize, DataTypes);
  const page_configurations = _page_configurations.init(sequelize, DataTypes);
  const pages = _pages.init(sequelize, DataTypes);
  const partner_documentation = _partner_documentation.init(sequelize, DataTypes);
  const partners = _partners.init(sequelize, DataTypes);
  const password_links = _password_links.init(sequelize, DataTypes);
  const password_resets = _password_resets.init(sequelize, DataTypes);
  const payout_requests = _payout_requests.init(sequelize, DataTypes);
  const permissions = _permissions.init(sequelize, DataTypes);
  const permissions_new = _permissions_new.init(sequelize, DataTypes);
  const personal_messages = _personal_messages.init(sequelize, DataTypes);
  const pm_data = _pm_data.init(sequelize, DataTypes);
  const portfolio_status = _portfolio_status.init(sequelize, DataTypes);
  const predictive_api_external_data = _predictive_api_external_data.init(sequelize, DataTypes);
  const press = _press.init(sequelize, DataTypes);
  const press_contacts = _press_contacts.init(sequelize, DataTypes);
  const products = _products.init(sequelize, DataTypes);
  const profile = _profile.init(sequelize, DataTypes);
  const profile_claim = _profile_claim.init(sequelize, DataTypes);
  const profile_data = _profile_data.init(sequelize, DataTypes);
  const program_partners = _program_partners.init(sequelize, DataTypes);
  const program_permissions = _program_permissions.init(sequelize, DataTypes);
  const program_startups = _program_startups.init(sequelize, DataTypes);
  const programs = _programs.init(sequelize, DataTypes);
  const question_id_mappings = _question_id_mappings.init(sequelize, DataTypes);
  const queue_completed_jobs = _queue_completed_jobs.init(sequelize, DataTypes);
  const queue_failed_jobs = _queue_failed_jobs.init(sequelize, DataTypes);
  const queue_jobs = _queue_jobs.init(sequelize, DataTypes);
  const reg_cc = _reg_cc.init(sequelize, DataTypes);
  const reg_country = _reg_country.init(sequelize, DataTypes);
  const reg_tz = _reg_tz.init(sequelize, DataTypes);
  const reg_us_states = _reg_us_states.init(sequelize, DataTypes);
  const regions = _regions.init(sequelize, DataTypes);
  const regulators = _regulators.init(sequelize, DataTypes);
  const remember_login_tokens = _remember_login_tokens.init(sequelize, DataTypes);
  const resources = _resources.init(sequelize, DataTypes);
  const sectors = _sectors.init(sequelize, DataTypes);
  const shared_resources = _shared_resources.init(sequelize, DataTypes);
  const shares = _shares.init(sequelize, DataTypes);
  const signatures = _signatures.init(sequelize, DataTypes);
  const signed_documents = _signed_documents.init(sequelize, DataTypes);
  const signed_links = _signed_links.init(sequelize, DataTypes);
  const signups = _signups.init(sequelize, DataTypes);
  const snapshot = _snapshot.init(sequelize, DataTypes);
  const staff_notes = _staff_notes.init(sequelize, DataTypes);
  const states_list = _states_list.init(sequelize, DataTypes);
  const subregions = _subregions.init(sequelize, DataTypes);
  const survey_results = _survey_results.init(sequelize, DataTypes);
  const sys_maintenance = _sys_maintenance.init(sequelize, DataTypes);
  const tasks = _tasks.init(sequelize, DataTypes);
  const timezones = _timezones.init(sequelize, DataTypes);
  const tmp_pwc_orgs = _tmp_pwc_orgs.init(sequelize, DataTypes);
  const tokens = _tokens.init(sequelize, DataTypes);
  const triggered_emails = _triggered_emails.init(sequelize, DataTypes);
  const unicorns = _unicorns.init(sequelize, DataTypes);
  const upload_configurations = _upload_configurations.init(sequelize, DataTypes);
  const user_apps = _user_apps.init(sequelize, DataTypes);
  const user_availabilities = _user_availabilities.init(sequelize, DataTypes);
  const user_connections = _user_connections.init(sequelize, DataTypes);
  const user_former_infos = _user_former_infos.init(sequelize, DataTypes);
  const user_id_mapping = _user_id_mapping.init(sequelize, DataTypes);
  const user_kyc = _user_kyc.init(sequelize, DataTypes);
  const user_ndas = _user_ndas.init(sequelize, DataTypes);
  const user_pain_feedback = _user_pain_feedback.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
  const users_archive = _users_archive.init(sequelize, DataTypes);
  const users_bello = _users_bello.init(sequelize, DataTypes);
  const users_data = _users_data.init(sequelize, DataTypes);
  const users_encrypted = _users_encrypted.init(sequelize, DataTypes);
  const users_temp = _users_temp.init(sequelize, DataTypes);
  const video_answers = _video_answers.init(sequelize, DataTypes);
  const workflow_users = _workflow_users.init(sequelize, DataTypes);
  const workflows = _workflows.init(sequelize, DataTypes);


  return {
    access_links,
    activation_links,
    api_authentication_keys,
    api_services,
    apps,
    apps_org,
    apps_syndicate,
    asset_types,
    assets,
    bank_account_balances,
    bank_accounts,
    bcorp_ref_data,
    blogentries,
    blogs,
    budgets,
    bugs,
    campaign_comments,
    campaign_events,
    campaign_id_mapping,
    campaign_profiles,
    campaign_reservations,
    campaign_reservations_items,
    campaign_reserved_time,
    campaign_reserved_time_items,
    campaign_roadshows,
    campaign_schedule,
    campaign_schedule_days,
    campaign_service_days_settings,
    campaign_service_settings,
    campaign_services,
    campaign_settings,
    campaign_training_reservations,
    campaign_training_reservations_items,
    campaign_training_schedule,
    campaign_trainings,
    campaign_transactions,
    campaign_votes,
    campaigns,
    cap_table,
    categories,
    change_logs,
    channels,
    chart_of_accounts,
    chart_of_accounts_custom,
    chart_of_accounts_types,
    cohort_judging_questions,
    cohorts,
    common_notes,
    company_info_requests,
    contentables,
    contents,
    contract_types,
    contracts,
    core_queue,
    core_setting_options,
    core_settings,
    core_settings_forex,
    core_settings_html,
    core_settings_json,
    core_settings_lang,
    countries,
    credit_bank_logs,
    credit_history,
    credit_packages,
    datarobot_fields_question_mapping,
    dataroom_types,
    datarooms,
    datarooms_bkp,
    datasources,
    dd_application_data,
    dd_content,
    dd_dataroom_types,
    dd_datarooms,
    dd_form,
    dd_interview_text_answers,
    dd_interview_text_questions,
    dd_investor_performance,
    dd_questions,
    dd_templates,
    dd_video_questions,
    deal_flow,
    deal_stage_checklists,
    deal_stage_checklists_orgs,
    default_values,
    document_mappings,
    document_metadata,
    document_templates,
    dynamic_document_metadata,
    email_campaigns,
    email_inbound,
    email_reminders,
    email_stats,
    email_templates,
    email_updates,
    f6s_pipeline_mapping,
    f6s_question_id_mapping,
    facilities,
    facility_bookings,
    facility_locations,
    facility_types,
    failed_jobs,
    faq,
    fc_fund_entity,
    fc_reports,
    fc_users_partner,
    feedback_form,
    fees,
    financials,
    folders,
    fund_accounts,
    fund_annual_fees,
    fund_distributions,
    fund_fees,
    fund_future_val,
    fund_gp_functions,
    fund_investments,
    fund_investments_nav,
    fund_kyc_requirements,
    fund_lps,
    fund_proceeds,
    funds,
    governance_events,
    governance_issues,
    ind_clusters,
    index_accelerators,
    index_accelerators_init,
    index_campaigns,
    index_cooley_vc_value_by_series,
    index_cvr_angel_investors,
    index_early_stage,
    index_funds,
    index_funds_data,
    index_funds_hypo_2,
    index_ml_study_2,
    index_nvca,
    index_unicorns,
    index_unicorns_raw,
    industry_3,
    investment_round_old,
    investment_rounds,
    investment_status,
    investment_types,
    investments,
    investments_faq,
    investments_materials,
    investments_messages,
    investments_packages,
    investments_updates,
    invites,
    jobs,
    judge_panel,
    judge_panel_score,
    log_investor_interest,
    mailing_lists,
    mentor_availability,
    mentor_availability_settings,
    mentor_bookings,
    mentor_review_answers,
    mentor_review_questions,
    mf_dates,
    mf_lex_mods,
    mf_lex_stop,
    migrations,
    ml_names,
    newsletters,
    notifications_updates,
    org_competitors,
    org_connections,
    org_datarooms,
    org_dd,
    org_digital_metrics,
    org_financials,
    org_former_names,
    org_id_mapping,
    org_info_request_batches,
    org_info_request_responses,
    org_info_requests,
    org_kpis,
    org_kyc,
    org_mailing_lists,
    org_metrics,
    org_profiles,
    org_types,
    org_updates,
    orgs,
    orgs_data,
    orgs_json,
    page_configurations,
    pages,
    partner_documentation,
    partners,
    password_links,
    password_resets,
    payout_requests,
    permissions,
    permissions_new,
    personal_messages,
    pm_data,
    portfolio_status,
    predictive_api_external_data,
    press,
    press_contacts,
    products,
    profile,
    profile_claim,
    profile_data,
    program_partners,
    program_permissions,
    program_startups,
    programs,
    question_id_mappings,
    queue_completed_jobs,
    queue_failed_jobs,
    queue_jobs,
    reg_cc,
    reg_country,
    reg_tz,
    reg_us_states,
    regions,
    regulators,
    remember_login_tokens,
    resources,
    sectors,
    shared_resources,
    shares,
    signatures,
    signed_documents,
    signed_links,
    signups,
    snapshot,
    staff_notes,
    states_list,
    subregions,
    survey_results,
    sys_maintenance,
    tasks,
    timezones,
    tmp_pwc_orgs,
    tokens,
    triggered_emails,
    unicorns,
    upload_configurations,
    user_apps,
    user_availabilities,
    user_connections,
    user_former_infos,
    user_id_mapping,
    user_kyc,
    user_ndas,
    user_pain_feedback,
    users,
    users_archive,
    users_bello,
    users_data,
    users_encrypted,
    users_temp,
    video_answers,
    workflow_users,
    workflows,
  };
}
