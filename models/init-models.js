var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;
var _access_links = require("./access_links");
var _activation_links = require("./activation_links");
var _api_authentication_keys = require("./api_authentication_keys");
var _api_services = require("./api_services");
var _apps = require("./apps");
var _apps_org = require("./apps_org");
var _apps_syndicate = require("./apps_syndicate");
var _asset_types = require("./asset_types");
var _assets = require("./assets");
var _bank_account_balances = require("./bank_account_balances");
var _bank_accounts = require("./bank_accounts");
var _bcorp_ref_data = require("./bcorp_ref_data");
var _blogentries = require("./blogentries");
var _blogs = require("./blogs");
var _budgets = require("./budgets");
var _bugs = require("./bugs");
var _campaign_comments = require("./campaign_comments");
var _campaign_events = require("./campaign_events");
var _campaign_id_mapping = require("./campaign_id_mapping");
var _campaign_profiles = require("./campaign_profiles");
var _campaign_reservations = require("./campaign_reservations");
var _campaign_reservations_items = require("./campaign_reservations_items");
var _campaign_reserved_time = require("./campaign_reserved_time");
var _campaign_reserved_time_items = require("./campaign_reserved_time_items");
var _campaign_roadshows = require("./campaign_roadshows");
var _campaign_schedule = require("./campaign_schedule");
var _campaign_schedule_days = require("./campaign_schedule_days");
var _campaign_service_days_settings = require("./campaign_service_days_settings");
var _campaign_service_settings = require("./campaign_service_settings");
var _campaign_services = require("./campaign_services");
var _campaign_settings = require("./campaign_settings");
var _campaign_training_reservations = require("./campaign_training_reservations");
var _campaign_training_reservations_items = require("./campaign_training_reservations_items");
var _campaign_training_schedule = require("./campaign_training_schedule");
var _campaign_trainings = require("./campaign_trainings");
var _campaign_transactions = require("./campaign_transactions");
var _campaign_votes = require("./campaign_votes");
var _campaigns = require("./campaigns");
var _cap_table = require("./cap_table");
var _categories = require("./categories");
var _change_logs = require("./change_logs");
var _channels = require("./channels");
var _chart_of_accounts = require("./chart_of_accounts");
var _chart_of_accounts_custom = require("./chart_of_accounts_custom");
var _chart_of_accounts_types = require("./chart_of_accounts_types");
var _cohort_judging_questions = require("./cohort_judging_questions");
var _cohorts = require("./cohorts");
var _common_notes = require("./common_notes");
var _company_info_requests = require("./company_info_requests");
var _contentables = require("./contentables");
var _contents = require("./contents");
var _contract_types = require("./contract_types");
var _contracts = require("./contracts");
var _core_queue = require("./core_queue");
var _core_setting_options = require("./core_setting_options");
var _core_settings = require("./core_settings");
var _core_settings_forex = require("./core_settings_forex");
var _core_settings_html = require("./core_settings_html");
var _core_settings_json = require("./core_settings_json");
var _core_settings_lang = require("./core_settings_lang");
var _countries = require("./countries");
var _credit_bank_logs = require("./credit_bank_logs");
var _credit_history = require("./credit_history");
var _credit_packages = require("./credit_packages");
var _datarobot_fields_question_mapping = require("./datarobot_fields_question_mapping");
var _dataroom_types = require("./dataroom_types");
var _datarooms = require("./datarooms");
var _datarooms_bkp = require("./datarooms_bkp");
var _datasources = require("./datasources");
var _dd_application_data = require("./dd_application_data");
var _dd_content = require("./dd_content");
var _dd_dataroom_types = require("./dd_dataroom_types");
var _dd_datarooms = require("./dd_datarooms");
var _dd_form = require("./dd_form");
var _dd_interview_text_answers = require("./dd_interview_text_answers");
var _dd_interview_text_questions = require("./dd_interview_text_questions");
var _dd_investor_performance = require("./dd_investor_performance");
var _dd_questions = require("./dd_questions");
var _dd_templates = require("./dd_templates");
var _dd_video_questions = require("./dd_video_questions");
var _deal_flow = require("./deal_flow");
var _deal_stage_checklists = require("./deal_stage_checklists");
var _deal_stage_checklists_orgs = require("./deal_stage_checklists_orgs");
var _default_values = require("./default_values");
var _document_mappings = require("./document_mappings");
var _document_metadata = require("./document_metadata");
var _document_templates = require("./document_templates");
var _dynamic_document_metadata = require("./dynamic_document_metadata");
var _email_campaigns = require("./email_campaigns");
var _email_inbound = require("./email_inbound");
var _email_reminders = require("./email_reminders");
var _email_stats = require("./email_stats");
var _email_templates = require("./email_templates");
var _email_updates = require("./email_updates");
var _f6s_pipeline_mapping = require("./f6s_pipeline_mapping");
var _f6s_question_id_mapping = require("./f6s_question_id_mapping");
var _facilities = require("./facilities");
var _facility_bookings = require("./facility_bookings");
var _facility_locations = require("./facility_locations");
var _facility_types = require("./facility_types");
var _failed_jobs = require("./failed_jobs");
var _faq = require("./faq");
var _fc_fund_entity = require("./fc_fund_entity");
var _fc_reports = require("./fc_reports");
var _fc_users_partner = require("./fc_users_partner");
var _feedback_form = require("./feedback_form");
var _fees = require("./fees");
var _financials = require("./financials");
var _folders = require("./folders");
var _fund_accounts = require("./fund_accounts");
var _fund_annual_fees = require("./fund_annual_fees");
var _fund_distributions = require("./fund_distributions");
var _fund_fees = require("./fund_fees");
var _fund_future_val = require("./fund_future_val");
var _fund_gp_functions = require("./fund_gp_functions");
var _fund_investments = require("./fund_investments");
var _fund_investments_nav = require("./fund_investments_nav");
var _fund_kyc_requirements = require("./fund_kyc_requirements");
var _fund_lps = require("./fund_lps");
var _fund_proceeds = require("./fund_proceeds");
var _funds = require("./funds");
var _governance_events = require("./governance_events");
var _governance_issues = require("./governance_issues");
var _ind_clusters = require("./ind_clusters");
var _index_accelerators = require("./index_accelerators");
var _index_accelerators_init = require("./index_accelerators_init");
var _index_campaigns = require("./index_campaigns");
var _index_cooley_vc_value_by_series = require("./index_cooley_vc_value_by_series");
var _index_cvr_angel_investors = require("./index_cvr_angel_investors");
var _index_early_stage = require("./index_early_stage");
var _index_funds = require("./index_funds");
var _index_funds_data = require("./index_funds_data");
var _index_funds_hypo_2 = require("./index_funds_hypo_2");
var _index_ml_study_2 = require("./index_ml_study_2");
var _index_nvca = require("./index_nvca");
var _index_unicorns = require("./index_unicorns");
var _index_unicorns_raw = require("./index_unicorns_raw");
var _industry_3 = require("./industry_3");
var _investment_round_old = require("./investment_round_old");
var _investment_rounds = require("./investment_rounds");
var _investment_status = require("./investment_status");
var _investment_types = require("./investment_types");
var _investments = require("./investments");
var _investments_faq = require("./investments_faq");
var _investments_materials = require("./investments_materials");
var _investments_messages = require("./investments_messages");
var _investments_packages = require("./investments_packages");
var _investments_updates = require("./investments_updates");
var _invites = require("./invites");
var _jobs = require("./jobs");
var _judge_panel = require("./judge_panel");
var _judge_panel_score = require("./judge_panel_score");
var _log_investor_interest = require("./log_investor_interest");
var _mailing_lists = require("./mailing_lists");
var _mentor_availability = require("./mentor_availability");
var _mentor_availability_settings = require("./mentor_availability_settings");
var _mentor_bookings = require("./mentor_bookings");
var _mentor_review_answers = require("./mentor_review_answers");
var _mentor_review_questions = require("./mentor_review_questions");
var _mf_dates = require("./mf_dates");
var _mf_lex_mods = require("./mf_lex_mods");
var _mf_lex_stop = require("./mf_lex_stop");
var _migrations = require("./migrations");
var _ml_names = require("./ml_names");
var _newsletters = require("./newsletters");
var _notifications_updates = require("./notifications_updates");
var _org_competitors = require("./org_competitors");
var _org_connections = require("./org_connections");
var _org_datarooms = require("./org_datarooms");
var _org_dd = require("./org_dd");
var _org_digital_metrics = require("./org_digital_metrics");
var _org_financials = require("./org_financials");
var _org_former_names = require("./org_former_names");
var _org_id_mapping = require("./org_id_mapping");
var _org_info_request_batches = require("./org_info_request_batches");
var _org_info_request_responses = require("./org_info_request_responses");
var _org_info_requests = require("./org_info_requests");
var _org_kpis = require("./org_kpis");
var _org_kyc = require("./org_kyc");
var _org_mailing_lists = require("./org_mailing_lists");
var _org_metrics = require("./org_metrics");
var _org_profiles = require("./org_profiles");
var _org_types = require("./org_types");
var _org_updates = require("./org_updates");
var _orgs = require("./orgs");
var _orgs_data = require("./orgs_data");
var _orgs_json = require("./orgs_json");
var _page_configurations = require("./page_configurations");
var _pages = require("./pages");
var _partner_documentation = require("./partner_documentation");
var _partners = require("./partners");
var _password_links = require("./password_links");
var _password_resets = require("./password_resets");
var _payout_requests = require("./payout_requests");
var _permissions = require("./permissions");
var _permissions_new = require("./permissions_new");
var _personal_messages = require("./personal_messages");
var _pm_data = require("./pm_data");
var _portfolio_status = require("./portfolio_status");
var _predictive_api_external_data = require("./predictive_api_external_data");
var _press = require("./press");
var _press_contacts = require("./press_contacts");
var _products = require("./products");
var _profile = require("./profile");
var _profile_claim = require("./profile_claim");
var _profile_data = require("./profile_data");
var _program_partners = require("./program_partners");
var _program_permissions = require("./program_permissions");
var _program_startups = require("./program_startups");
var _programs = require("./programs");
var _question_id_mappings = require("./question_id_mappings");
var _queue_completed_jobs = require("./queue_completed_jobs");
var _queue_failed_jobs = require("./queue_failed_jobs");
var _queue_jobs = require("./queue_jobs");
var _reg_cc = require("./reg_cc");
var _reg_country = require("./reg_country");
var _reg_tz = require("./reg_tz");
var _reg_us_states = require("./reg_us_states");
var _regions = require("./regions");
var _regulators = require("./regulators");
var _remember_login_tokens = require("./remember_login_tokens");
var _resources = require("./resources");
var _sectors = require("./sectors");
var _shared_resources = require("./shared_resources");
var _shares = require("./shares");
var _signatures = require("./signatures");
var _signed_documents = require("./signed_documents");
var _signed_links = require("./signed_links");
var _signups = require("./signups");
var _snapshot = require("./snapshot");
var _staff_notes = require("./staff_notes");
var _states_list = require("./states_list");
var _subregions = require("./subregions");
var _survey_results = require("./survey_results");
var _sys_maintenance = require("./sys_maintenance");
var _tasks = require("./tasks");
var _timezones = require("./timezones");
var _tmp_pwc_orgs = require("./tmp_pwc_orgs");
var _tokens = require("./tokens");
var _triggered_emails = require("./triggered_emails");
var _unicorns = require("./unicorns");
var _upload_configurations = require("./upload_configurations");
var _user_apps = require("./user_apps");
var _user_availabilities = require("./user_availabilities");
var _user_connections = require("./user_connections");
var _user_former_infos = require("./user_former_infos");
var _user_id_mapping = require("./user_id_mapping");
var _user_kyc = require("./user_kyc");
var _user_ndas = require("./user_ndas");
var _user_pain_feedback = require("./user_pain_feedback");
var _users = require("./users");
var _users_archive = require("./users_archive");
var _users_bello = require("./users_bello");
var _users_data = require("./users_data");
var _users_encrypted = require("./users_encrypted");
var _users_temp = require("./users_temp");
var _video_answers = require("./video_answers");
var _workflow_users = require("./workflow_users");
var _workflows = require("./workflows");

function initModels(sequelize) {
  let { database, host, dialect, user,password} = global.config.DB.default;
  if(!sequelize) sequelize = new Sequelize(database, user, password, { host, dialect, pool:true});
  var access_links = _access_links(sequelize, DataTypes);
  var activation_links = _activation_links(sequelize, DataTypes);
  var api_authentication_keys = _api_authentication_keys(sequelize, DataTypes);
  var api_services = _api_services(sequelize, DataTypes);
  var apps = _apps(sequelize, DataTypes);
  var apps_org = _apps_org(sequelize, DataTypes);
  var apps_syndicate = _apps_syndicate(sequelize, DataTypes);
  var asset_types = _asset_types(sequelize, DataTypes);
  var assets = _assets(sequelize, DataTypes);
  var bank_account_balances = _bank_account_balances(sequelize, DataTypes);
  var bank_accounts = _bank_accounts(sequelize, DataTypes);
  var bcorp_ref_data = _bcorp_ref_data(sequelize, DataTypes);
  var blogentries = _blogentries(sequelize, DataTypes);
  var blogs = _blogs(sequelize, DataTypes);
  var budgets = _budgets(sequelize, DataTypes);
  var bugs = _bugs(sequelize, DataTypes);
  var campaign_comments = _campaign_comments(sequelize, DataTypes);
  var campaign_events = _campaign_events(sequelize, DataTypes);
  var campaign_id_mapping = _campaign_id_mapping(sequelize, DataTypes);
  var campaign_profiles = _campaign_profiles(sequelize, DataTypes);
  var campaign_reservations = _campaign_reservations(sequelize, DataTypes);
  var campaign_reservations_items = _campaign_reservations_items(sequelize, DataTypes);
  var campaign_reserved_time = _campaign_reserved_time(sequelize, DataTypes);
  var campaign_reserved_time_items = _campaign_reserved_time_items(sequelize, DataTypes);
  var campaign_roadshows = _campaign_roadshows(sequelize, DataTypes);
  var campaign_schedule = _campaign_schedule(sequelize, DataTypes);
  var campaign_schedule_days = _campaign_schedule_days(sequelize, DataTypes);
  var campaign_service_days_settings = _campaign_service_days_settings(sequelize, DataTypes);
  var campaign_service_settings = _campaign_service_settings(sequelize, DataTypes);
  var campaign_services = _campaign_services(sequelize, DataTypes);
  var campaign_settings = _campaign_settings(sequelize, DataTypes);
  var campaign_training_reservations = _campaign_training_reservations(sequelize, DataTypes);
  var campaign_training_reservations_items = _campaign_training_reservations_items(sequelize, DataTypes);
  var campaign_training_schedule = _campaign_training_schedule(sequelize, DataTypes);
  var campaign_trainings = _campaign_trainings(sequelize, DataTypes);
  var campaign_transactions = _campaign_transactions(sequelize, DataTypes);
  var campaign_votes = _campaign_votes(sequelize, DataTypes);
  var campaigns = _campaigns(sequelize, DataTypes);
  var cap_table = _cap_table(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var change_logs = _change_logs(sequelize, DataTypes);
  var channels = _channels(sequelize, DataTypes);
  var chart_of_accounts = _chart_of_accounts(sequelize, DataTypes);
  var chart_of_accounts_custom = _chart_of_accounts_custom(sequelize, DataTypes);
  var chart_of_accounts_types = _chart_of_accounts_types(sequelize, DataTypes);
  var cohort_judging_questions = _cohort_judging_questions(sequelize, DataTypes);
  var cohorts = _cohorts(sequelize, DataTypes);
  var common_notes = _common_notes(sequelize, DataTypes);
  var company_info_requests = _company_info_requests(sequelize, DataTypes);
  var contentables = _contentables(sequelize, DataTypes);
  var contents = _contents(sequelize, DataTypes);
  var contract_types = _contract_types(sequelize, DataTypes);
  var contracts = _contracts(sequelize, DataTypes);
  var core_queue = _core_queue(sequelize, DataTypes);
  var core_setting_options = _core_setting_options(sequelize, DataTypes);
  var core_settings = _core_settings(sequelize, DataTypes);
  var core_settings_forex = _core_settings_forex(sequelize, DataTypes);
  var core_settings_html = _core_settings_html(sequelize, DataTypes);
  var core_settings_json = _core_settings_json(sequelize, DataTypes);
  var core_settings_lang = _core_settings_lang(sequelize, DataTypes);
  var countries = _countries(sequelize, DataTypes);
  var credit_bank_logs = _credit_bank_logs(sequelize, DataTypes);
  var credit_history = _credit_history(sequelize, DataTypes);
  var credit_packages = _credit_packages(sequelize, DataTypes);
  var datarobot_fields_question_mapping = _datarobot_fields_question_mapping(sequelize, DataTypes);
  var dataroom_types = _dataroom_types(sequelize, DataTypes);
  var datarooms = _datarooms(sequelize, DataTypes);
  var datarooms_bkp = _datarooms_bkp(sequelize, DataTypes);
  var datasources = _datasources(sequelize, DataTypes);
  var dd_application_data = _dd_application_data(sequelize, DataTypes);
  var dd_content = _dd_content(sequelize, DataTypes);
  var dd_dataroom_types = _dd_dataroom_types(sequelize, DataTypes);
  var dd_datarooms = _dd_datarooms(sequelize, DataTypes);
  var dd_form = _dd_form(sequelize, DataTypes);
  var dd_interview_text_answers = _dd_interview_text_answers(sequelize, DataTypes);
  var dd_interview_text_questions = _dd_interview_text_questions(sequelize, DataTypes);
  var dd_investor_performance = _dd_investor_performance(sequelize, DataTypes);
  var dd_questions = _dd_questions(sequelize, DataTypes);
  var dd_templates = _dd_templates(sequelize, DataTypes);
  var dd_video_questions = _dd_video_questions(sequelize, DataTypes);
  var deal_flow = _deal_flow(sequelize, DataTypes);
  var deal_stage_checklists = _deal_stage_checklists(sequelize, DataTypes);
  var deal_stage_checklists_orgs = _deal_stage_checklists_orgs(sequelize, DataTypes);
  var default_values = _default_values(sequelize, DataTypes);
  var document_mappings = _document_mappings(sequelize, DataTypes);
  var document_metadata = _document_metadata(sequelize, DataTypes);
  var document_templates = _document_templates(sequelize, DataTypes);
  var dynamic_document_metadata = _dynamic_document_metadata(sequelize, DataTypes);
  var email_campaigns = _email_campaigns(sequelize, DataTypes);
  var email_inbound = _email_inbound(sequelize, DataTypes);
  var email_reminders = _email_reminders(sequelize, DataTypes);
  var email_stats = _email_stats(sequelize, DataTypes);
  var email_templates = _email_templates(sequelize, DataTypes);
  var email_updates = _email_updates(sequelize, DataTypes);
  var f6s_pipeline_mapping = _f6s_pipeline_mapping(sequelize, DataTypes);
  var f6s_question_id_mapping = _f6s_question_id_mapping(sequelize, DataTypes);
  var facilities = _facilities(sequelize, DataTypes);
  var facility_bookings = _facility_bookings(sequelize, DataTypes);
  var facility_locations = _facility_locations(sequelize, DataTypes);
  var facility_types = _facility_types(sequelize, DataTypes);
  var failed_jobs = _failed_jobs(sequelize, DataTypes);
  var faq = _faq(sequelize, DataTypes);
  var fc_fund_entity = _fc_fund_entity(sequelize, DataTypes);
  var fc_reports = _fc_reports(sequelize, DataTypes);
  var fc_users_partner = _fc_users_partner(sequelize, DataTypes);
  var feedback_form = _feedback_form(sequelize, DataTypes);
  var fees = _fees(sequelize, DataTypes);
  var financials = _financials(sequelize, DataTypes);
  var folders = _folders(sequelize, DataTypes);
  var fund_accounts = _fund_accounts(sequelize, DataTypes);
  var fund_annual_fees = _fund_annual_fees(sequelize, DataTypes);
  var fund_distributions = _fund_distributions(sequelize, DataTypes);
  var fund_fees = _fund_fees(sequelize, DataTypes);
  var fund_future_val = _fund_future_val(sequelize, DataTypes);
  var fund_gp_functions = _fund_gp_functions(sequelize, DataTypes);
  var fund_investments = _fund_investments(sequelize, DataTypes);
  var fund_investments_nav = _fund_investments_nav(sequelize, DataTypes);
  var fund_kyc_requirements = _fund_kyc_requirements(sequelize, DataTypes);
  var fund_lps = _fund_lps(sequelize, DataTypes);
  var fund_proceeds = _fund_proceeds(sequelize, DataTypes);
  var funds = _funds(sequelize, DataTypes);
  var governance_events = _governance_events(sequelize, DataTypes);
  var governance_issues = _governance_issues(sequelize, DataTypes);
  var ind_clusters = _ind_clusters(sequelize, DataTypes);
  var index_accelerators = _index_accelerators(sequelize, DataTypes);
  var index_accelerators_init = _index_accelerators_init(sequelize, DataTypes);
  var index_campaigns = _index_campaigns(sequelize, DataTypes);
  var index_cooley_vc_value_by_series = _index_cooley_vc_value_by_series(sequelize, DataTypes);
  var index_cvr_angel_investors = _index_cvr_angel_investors(sequelize, DataTypes);
  var index_early_stage = _index_early_stage(sequelize, DataTypes);
  var index_funds = _index_funds(sequelize, DataTypes);
  var index_funds_data = _index_funds_data(sequelize, DataTypes);
  var index_funds_hypo_2 = _index_funds_hypo_2(sequelize, DataTypes);
  var index_ml_study_2 = _index_ml_study_2(sequelize, DataTypes);
  var index_nvca = _index_nvca(sequelize, DataTypes);
  var index_unicorns = _index_unicorns(sequelize, DataTypes);
  var index_unicorns_raw = _index_unicorns_raw(sequelize, DataTypes);
  var industry_3 = _industry_3(sequelize, DataTypes);
  var investment_round_old = _investment_round_old(sequelize, DataTypes);
  var investment_rounds = _investment_rounds(sequelize, DataTypes);
  var investment_status = _investment_status(sequelize, DataTypes);
  var investment_types = _investment_types(sequelize, DataTypes);
  var investments = _investments(sequelize, DataTypes);
  var investments_faq = _investments_faq(sequelize, DataTypes);
  var investments_materials = _investments_materials(sequelize, DataTypes);
  var investments_messages = _investments_messages(sequelize, DataTypes);
  var investments_packages = _investments_packages(sequelize, DataTypes);
  var investments_updates = _investments_updates(sequelize, DataTypes);
  var invites = _invites(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var judge_panel = _judge_panel(sequelize, DataTypes);
  var judge_panel_score = _judge_panel_score(sequelize, DataTypes);
  var log_investor_interest = _log_investor_interest(sequelize, DataTypes);
  var mailing_lists = _mailing_lists(sequelize, DataTypes);
  var mentor_availability = _mentor_availability(sequelize, DataTypes);
  var mentor_availability_settings = _mentor_availability_settings(sequelize, DataTypes);
  var mentor_bookings = _mentor_bookings(sequelize, DataTypes);
  var mentor_review_answers = _mentor_review_answers(sequelize, DataTypes);
  var mentor_review_questions = _mentor_review_questions(sequelize, DataTypes);
  var mf_dates = _mf_dates(sequelize, DataTypes);
  var mf_lex_mods = _mf_lex_mods(sequelize, DataTypes);
  var mf_lex_stop = _mf_lex_stop(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var ml_names = _ml_names(sequelize, DataTypes);
  var newsletters = _newsletters(sequelize, DataTypes);
  var notifications_updates = _notifications_updates(sequelize, DataTypes);
  var org_competitors = _org_competitors(sequelize, DataTypes);
  var org_connections = _org_connections(sequelize, DataTypes);
  var org_datarooms = _org_datarooms(sequelize, DataTypes);
  var org_dd = _org_dd(sequelize, DataTypes);
  var org_digital_metrics = _org_digital_metrics(sequelize, DataTypes);
  var org_financials = _org_financials(sequelize, DataTypes);
  var org_former_names = _org_former_names(sequelize, DataTypes);
  var org_id_mapping = _org_id_mapping(sequelize, DataTypes);
  var org_info_request_batches = _org_info_request_batches(sequelize, DataTypes);
  var org_info_request_responses = _org_info_request_responses(sequelize, DataTypes);
  var org_info_requests = _org_info_requests(sequelize, DataTypes);
  var org_kpis = _org_kpis(sequelize, DataTypes);
  var org_kyc = _org_kyc(sequelize, DataTypes);
  var org_mailing_lists = _org_mailing_lists(sequelize, DataTypes);
  var org_metrics = _org_metrics(sequelize, DataTypes);
  var org_profiles = _org_profiles(sequelize, DataTypes);
  var org_types = _org_types(sequelize, DataTypes);
  var org_updates = _org_updates(sequelize, DataTypes);
  var orgs = _orgs(sequelize, DataTypes);
  var orgs_data = _orgs_data(sequelize, DataTypes);
  var orgs_json = _orgs_json(sequelize, DataTypes);
  var page_configurations = _page_configurations(sequelize, DataTypes);
  var pages = _pages(sequelize, DataTypes);
  var partner_documentation = _partner_documentation(sequelize, DataTypes);
  var partners = _partners(sequelize, DataTypes);
  var password_links = _password_links(sequelize, DataTypes);
  var password_resets = _password_resets(sequelize, DataTypes);
  var payout_requests = _payout_requests(sequelize, DataTypes);
  var permissions = _permissions(sequelize, DataTypes);
  var permissions_new = _permissions_new(sequelize, DataTypes);
  var personal_messages = _personal_messages(sequelize, DataTypes);
  var pm_data = _pm_data(sequelize, DataTypes);
  var portfolio_status = _portfolio_status(sequelize, DataTypes);
  var predictive_api_external_data = _predictive_api_external_data(sequelize, DataTypes);
  var press = _press(sequelize, DataTypes);
  var press_contacts = _press_contacts(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var profile = _profile(sequelize, DataTypes);
  var profile_claim = _profile_claim(sequelize, DataTypes);
  var profile_data = _profile_data(sequelize, DataTypes);
  var program_partners = _program_partners(sequelize, DataTypes);
  var program_permissions = _program_permissions(sequelize, DataTypes);
  var program_startups = _program_startups(sequelize, DataTypes);
  var programs = _programs(sequelize, DataTypes);
  var question_id_mappings = _question_id_mappings(sequelize, DataTypes);
  var queue_completed_jobs = _queue_completed_jobs(sequelize, DataTypes);
  var queue_failed_jobs = _queue_failed_jobs(sequelize, DataTypes);
  var queue_jobs = _queue_jobs(sequelize, DataTypes);
  var reg_cc = _reg_cc(sequelize, DataTypes);
  var reg_country = _reg_country(sequelize, DataTypes);
  var reg_tz = _reg_tz(sequelize, DataTypes);
  var reg_us_states = _reg_us_states(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var regulators = _regulators(sequelize, DataTypes);
  var remember_login_tokens = _remember_login_tokens(sequelize, DataTypes);
  var resources = _resources(sequelize, DataTypes);
  var sectors = _sectors(sequelize, DataTypes);
  var shared_resources = _shared_resources(sequelize, DataTypes);
  var shares = _shares(sequelize, DataTypes);
  var signatures = _signatures(sequelize, DataTypes);
  var signed_documents = _signed_documents(sequelize, DataTypes);
  var signed_links = _signed_links(sequelize, DataTypes);
  var signups = _signups(sequelize, DataTypes);
  var snapshot = _snapshot(sequelize, DataTypes);
  var staff_notes = _staff_notes(sequelize, DataTypes);
  var states_list = _states_list(sequelize, DataTypes);
  var subregions = _subregions(sequelize, DataTypes);
  var survey_results = _survey_results(sequelize, DataTypes);
  var sys_maintenance = _sys_maintenance(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var timezones = _timezones(sequelize, DataTypes);
  var tmp_pwc_orgs = _tmp_pwc_orgs(sequelize, DataTypes);
  var tokens = _tokens(sequelize, DataTypes);
  var triggered_emails = _triggered_emails(sequelize, DataTypes);
  var unicorns = _unicorns(sequelize, DataTypes);
  var upload_configurations = _upload_configurations(sequelize, DataTypes);
  var user_apps = _user_apps(sequelize, DataTypes);
  var user_availabilities = _user_availabilities(sequelize, DataTypes);
  var user_connections = _user_connections(sequelize, DataTypes);
  var user_former_infos = _user_former_infos(sequelize, DataTypes);
  var user_id_mapping = _user_id_mapping(sequelize, DataTypes);
  var user_kyc = _user_kyc(sequelize, DataTypes);
  var user_ndas = _user_ndas(sequelize, DataTypes);
  var user_pain_feedback = _user_pain_feedback(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_archive = _users_archive(sequelize, DataTypes);
  var users_bello = _users_bello(sequelize, DataTypes);
  var users_data = _users_data(sequelize, DataTypes);
  var users_encrypted = _users_encrypted(sequelize, DataTypes);
  var users_temp = _users_temp(sequelize, DataTypes);
  var video_answers = _video_answers(sequelize, DataTypes);
  var workflow_users = _workflow_users(sequelize, DataTypes);
  var workflows = _workflows(sequelize, DataTypes);


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
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
