import Vue from 'vue';
import Vuex from 'vuex';
import api from '../lib/api';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    companies: [],
    company_info: [],
    companies_filter: [],
    company_event_watch: '',
    // INIT: 1
    get_active_affiliates_according_afp: [],
    export_active_affiliates_according_afp: [],
    event_watch_active_affiliates_according_afp: '',
    // 
    get_new_affiliates_type_worker: [],
    export_new_affiliates_type_worker: [],
    event_watch_new_affiliates_type_worker: '',
    // 
    get_active_contributors_according_afp: [],
    export_active_contributors_according_afp: [],
    event_watch_active_contributors_according_afp: '',
    // 
    get_contributors_pea: [],
    export_contributors_pea: [],
    event_watch_contributors_pea: '',
    // 
    get_affiliates_contributors_spp: [],
    event_watch_affiliates_contributors_spp: '',
    // 2
    get_pensioners_spp: [],
    export_pensioners_spp: [],
    event_watch_pensioners_spp: '',
    // 
    get_new_retirement_pensioners: [],
    export_new_retirement_pensioners: [],
    event_watch_new_retirement_pensioners: '',
    // 
    get_pensioners_pension_system: [],
    export_pensioners_pension_system: [],
    event_watch_pensioners_pension_system: '',
    // 
    get_average_pension_spp: [],
    event_watch_average_pension_spp: '',
    // 
    get_average_pension_snp: [],
    event_watch_average_pension_snp: '',
    // 
    get_average_pension_benefit_type: [],
    export_average_pension_benefit_type: [],
    event_watch_average_pension_benefit_type: '',
    // 3
    get_managed_portfolio: [],
    export_managed_portfolio: [],
    event_watch_managed_portfolio: '',
    // 
    get_investment_limits: [],
    export_investment_limits: [],
    event_watch_investment_limits: '',
    // 
    get_portfolio_by_economic_sector: [],
    export_portfolio_by_economic_sector: [],
    event_watch_portfolio_by_economic_sector: '',
    // 
    get_investment_infrastructure: [],
    export_investment_infrastructure: [],
    event_watch_investment_infrastructure: '',
    // 
    get_fund_evolution: [],
    export_fund_evolution: [],
    event_watch_fund_evolution: '',
    // 
    get_apv_with_pension_purpose: [],
    export_apv_with_pension_purpose: [],
    event_watch_apv_with_pension_purpose: '',
    // 
    get_apv_with_out_pension_end: [],
    export_apv_with_out_pension_end: [],
    event_watch_apv_with_out_pension_end: '',
    // 
    get_cost_effectiveness: [],
    export_cost_effectiveness: [],
    event_watch_cost_effectiveness: '',
    // !3
    // 4
    get_commission_on_flow: [],
    export_commission_on_flow: [],
    event_watch_commission_on_flow: '',
    //
    get_mixed_commission: [],
    export_mixed_commission: [],
    event_watch_mixed_commission: '',
    //
    get_insurance_premium_rate_number_first: [],
    export_insurance_premium_rate_number_first: [],
    event_watch_insurance_premium_rate_number_first: '',
    //
    get_insurance_premium_rate_number_second: [],
    export_insurance_premium_rate_number_second: [],
    event_watch_insurance_premium_rate_number_second: '',
    // !4
    // 
    event_error_watch: {}
    // !INIT
  },
  getters: {
    getCompanies: state => {
      return state.companies
    },
    getCompanyInfo: state  => {
      return state.company_info
    },
    getCompaniesFilter: state => {
      return state.companies_filter
    },
    getCompanyEventWatch: state => {
      return state.company_event_watch
    },
    // INIT: 1
    getActiveAffiliatesAccordingAfp: state => {
      return state.get_active_affiliates_according_afp
    },
    exportActiveAffiliatesAccordingAfp: state => {
      return state.export_active_affiliates_according_afp
    },
    eventWatchActiveAffiliatesAccordingAfp: state => {
      return state.event_watch_active_affiliates_according_afp
    },
    // 
    getNewAffiliatesTypeWorker: state => {
      return state.get_new_affiliates_type_worker
    }, 
    exportNewAffiliatesTypeWorker: state => {
      return state.export_new_affiliates_type_worker
    },
    eventWatchNewAffiliatesTypeWorker: state => {
      return state.event_watch_new_affiliates_type_worker
    },
    // 
    getActiveContributorsAccordingAfp: state => {
      return state.get_active_contributors_according_afp
    },
    exportActiveContributorsAccordingAfp: state => {
      return state.export_active_contributors_according_afp
    },
    eventWatchActiveContributorsAccordingAfp: state => {
      return state.event_watch_active_contributors_according_afp
    },
    // 
    getContributorsPea: state => {
      return state.get_contributors_pea
    },
    exportContributorsPea: state => {
      return state.export_contributors_pea
    },
    eventWatchContributorsPea: state => {
      return state.event_watch_contributors_pea
    },
    // 
    getAffiliatesContributorsSpp: state => {
      return state.get_affiliates_contributors_spp
    },
    eventWatchAffiliatesContributorsSpp: state => {
      return state.event_watch_affiliates_contributors_spp
    },
    // 2
    getPensionersSpp: state => {
      return state.get_pensioners_spp
    },
    exportPensionersSpp: state => {
      return state.export_pensioners_spp
    },
    eventWatchPensionersSpp: state => {
      return state.event_watch_pensioners_spp
    },
    // 
    getNewRetirementPensioners: state => {
      return state.get_new_retirement_pensioners
    },
    exportNewRetirementPensioners: state => {
      return state.export_new_retirement_pensioners
    },
    eventWatchNewRetirementPensioners: state => {
      return state.event_watch_new_retirement_pensioners
    },
    // 
    getPensionersPensionSystem: state => {
      return state.get_pensioners_pension_system
    }, 
    exportPensionersPensionSystem: state => {
      return state.export_pensioners_pension_system
    },
    eventWatchPensionersPensionSystem: state => {
      return state.event_watch_pensioners_pension_system
    },
    // 
    getAveragePensionSpp: state => {
      return state.get_average_pension_spp
    },
    eventWatchAveragePensionSpp: state => {
      return state.event_watch_average_pension_spp
    },
    // 
    getAveragePensionSnp: state => {
      return state.get_average_pension_snp
    },
    eventWatchAveragePensionSnp: state => {
      return state.event_watch_average_pension_snp
    },
    // 
    getAveragePensionBenefitType: state => {
      return state.get_average_pension_benefit_type
    },
    exportAveragePensionBenefitType: state => {
      return state.export_average_pension_benefit_type
    },
    eventWatchAveragePensionBenefitType: state => {
      return state.event_watch_average_pension_benefit_type
    },
    // 3
    getManagedPortfolio: state => {
      return state.get_managed_portfolio
    },
    exportManagedPortfolio: state => {
      return state.export_managed_portfolio
    },
    eventWatchManagedPortfolio: state => {
      return state.event_watch_managed_portfolio
    },
    // 
    getInvestmentLimits: state => {
      return state.get_investment_limits
    },
    exportInvestmentLimits: state => {
      return state.export_investment_limits
    },
    eventWatchInvestmentLimits: state => {
      return state.event_watch_investment_limits
    },
    // 
    getPortfolioByEconomicSector: state => {
      return state.get_portfolio_by_economic_sector
    },
    exportPortfolioByEconomicSector: state => {
      return state.export_portfolio_by_economic_sector
    },
    eventWatchPortfolioByEconomicSector: state => {
      return state.event_watch_portfolio_by_economic_sector
    },
    // 
    getInvestmentInfrastructure: state => {
      return state.get_investment_infrastructure
    },
    exportInvestmentInfrastructure: state => {
      return state.export_investment_infrastructure
    },
    eventWatchInvestmentInfrastructure: state => {
      return state.event_watch_investment_infrastructure
    },
    // 
    getFundEvolution: state => {
      return state.get_fund_evolution
    },
    exportFundEvolution: state => {
      return state.export_fund_evolution
    },
    eventWatchFundEvolution: state => {
      return state.event_watch_fund_evolution
    },
    // 
    getApvWithPensionPurpose: state => {
      return state.get_apv_with_pension_purpose
    },
    exportApvWithPensionPurpose: state => {
      return state.export_apv_with_pension_purpose
    },
    eventWatchApvWithPensionPurpose: state => {
      return state.event_watch_apv_with_pension_purpose
    },
    // 
    getApvWithOutPensionEnd: state => {
      return state.get_apv_with_out_pension_end
    },
    exportApvWithOutPensionEnd: state => {
      return state.export_apv_with_out_pension_end
    },
    eventWatchApvWithOutPensionEnd: state => {
      return state.event_watch_apv_with_out_pension_end
    },
    // 
    getCostEffectiveness: state => {
      return state.get_cost_effectiveness
    },
    exportCostEffectiveness: state => {
      return state.export_cost_effectiveness
    },
    eventWatchCostEffectiveness: state => {
      return state.event_watch_cost_effectiveness
    },
    // !3
    // 4
    getCommissionOnFlow: state => {
      return state.get_commission_on_flow
    },
    exportCommissionOnFlow: state => {
      return state.export_commission_on_flow
    },
    eventWatchCommissionOnFlow: state => {
      return state.event_watch_commission_on_flow
    },
    //
    getMixedCommission: state => {
      return state.get_mixed_commission
    },
    exportMixedCommission: state => {
      return state.export_mixed_commission
    },
    eventWatchMixedCommission: state => {
      return state.event_watch_mixed_commission
    },
    //
    getInsurancePremiumRateNumberFirst: state => {
      return state.get_insurance_premium_rate_number_first
    },
    exportInsurancePremiumRateNumberFirst: state => {
      return state.export_insurance_premium_rate_number_first
    },
    eventWatchInsurancePremiumRateNumberFirst: state => {
      return state.event_watch_insurance_premium_rate_number_first
    },
    //
    getInsurancePremiumRateNumberSecond: state => {
      return state.get_insurance_premium_rate_number_second
    },
    exportInsurancePremiumRateNumberSecond: state => {
      return state.export_insurance_premium_rate_number_second
    },
    eventWatchInsurancePremiumRateNumberSecond: state => {
      return state.event_watch_insurance_premium_rate_number_second
    },
    // !4
    // 
    eventErrorWatch: state => {
      return state.event_error_watch
    }
    // !INIT
  },
  mutations: {
    GET_COMPANIES_FILTER(state, payload) {
      if (payload !== undefined && payload.length > 0) {
        state.companies_filter = payload;
      }
    },
    GET_COMPANIES(state, payload) {
      if (payload !== undefined && payload.length > 0) {
        state.companies = payload;
      }
    },
    GET_COMPANY_INFO(state, payload) {
      state.company_info = payload;
    },
    ADD_COMPANY(state, payload) {
      if (!payload.send_to_history) {
        state.companies.push((Object.assign({}, payload)));
      }
    },
    EDIT_COMPANY(state, payload) {
      let company_item_id = state.companies.findIndex(item => parseInt(item.id) === parseInt(payload.id));
      if (company_item_id >= 0) {
        Object.assign(state.companies[company_item_id], payload);
      }
    },
    EDIT_COMPANY_VARIABLE(state, payload) {
      if (typeof payload.formated_date_meeting !== 'undefined') {
        let company_item_id = state.companies.findIndex(item => parseInt(item.id) === parseInt(payload.company_id));
        if (company_item_id >= 0) {
          state.companies[company_item_id].date_meeting = payload.formated_date_meeting;
        }
      }

      if (typeof payload.tentative_end_date !== 'undefined') {
        $(state.companies).filter(function (index, value) {
          if (value.id == payload.company_id) {
            $(value.directors).filter(function (index_a, value_a) {
              if (value_a.id == payload.director_id) {
                state.companies[index].directors[index_a].tentative_end_date = new Date(payload.tentative_end_date).getFullYear();
              }
            });
          }
        });
      }
    },
    DELETE_COMPANY(state, payload) {
      let companyItemId = state.companies.findIndex(item => item.id === payload.company_id)
      state.companies.splice(companyItemId, 1);
    },
    REMOVE_COMPANY(state, payload) {
      let company_item_id = state.companies_historicals.findIndex(item => parseInt(item.id) === parseInt(payload.company_id));
      if (company_item_id >= 0) {
        state.companies_historicals.splice(company_item_id, 1);
      }
    },
    COMPANY_EVENT_WATCH(state, payload) {
      state.company_event_watch = payload;
    },
    // INIT: 1
    GET_ACTIVE_AFFILIATES_ACCORDING_AFP(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_active_affiliates_according_afp = payload;
      }
    },
    EXPORT_ACTIVE_AFFILIATES_ACCORDING_AFP(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_active_affiliates_according_afp = payload;
      }
    },
    EVENT_WATCH_ACTIVE_AFFILIATES_ACCORDING_AFP(state, payload) {
      state.event_watch_active_affiliates_according_afp = payload;
    },
    // 
    GET_NEW_AFFILIATES_TYPE_WORKER(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_new_affiliates_type_worker = payload;
      }
    },
    EXPORT_NEW_AFFILIATES_TYPE_WORKER(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_new_affiliates_type_worker = payload;
      }
    },
    EVENT_WATCH_NEW_AFFILIATES_TYPE_WORKER(state, payload) {
      state.event_watch_new_affiliates_type_worker = payload;
    },
    // 
    GET_ACTIVE_CONTRIBUTORS_ACCORDING_AFP(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_active_contributors_according_afp = payload;
      }
    },
    EXPORT_ACTIVE_CONTRIBUTORS_ACCORDING_AFP(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_active_contributors_according_afp = payload;
      }
    },
    EVENT_WATCH_ACTIVE_CONTRIBUTORS_ACCORDING_AFP(state, payload) {
      state.event_watch_active_contributors_according_afp = payload;
    },
    // 
    GET_CONTRIBUTORS_PEA(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_contributors_pea = payload;
      }
    },
    EXPORT_CONTRIBUTORS_PEA(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_contributors_pea = payload;
      }
    },
    EVENT_WATCH_CONTRIBUTORS_PEA(state, payload) {
      state.event_watch_contributors_pea = payload;
    },
    // 
    GET_AFFILIATES_CONTRIBUTORS_SPP(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_affiliates_contributors_spp = payload;
      }
    },
    EVENT_WATCH_AFFILIATES_CONTRIBUTORS_SPP(state, payload) {
      state.event_watch_affiliates_contributors_spp = payload;
    },
    // 2
    GET_PENSIONERS_SPP(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_pensioners_spp = payload;
      }
    },
    EXPORT_PENSIONERS_SPP(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_pensioners_spp = payload;
      }
    },
    EVENT_WATCH_PENSIONERS_SPP(state, payload) {
      state.event_watch_pensioners_spp = payload;
    },
    // 
    GET_NEW_RETIREMENT_PENSIONERS(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_new_retirement_pensioners = payload;
      }
    },
    EXPORT_NEW_RETIREMENT_PENSIONERS(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_new_retirement_pensioners = payload;
      }
    },
    EVENT_WATCH_NEW_RETIREMENT_PENSIONERS(state, payload) {
      state.event_watch_new_retirement_pensioners = payload;
    },
    // 
    GET_PENSIONERS_PENSION_SYSTEM(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_pensioners_pension_system = payload;
      }
    },
    EXPORT_PENSIONERS_PENSION_SYSTEM(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_pensioners_pension_system = payload;
      }
    },
    EVENT_WATCH_PENSIONERS_PENSION_SYSTEM(state, payload) {
      state.event_watch_pensioners_pension_system = payload;
    },
    // 
    GET_AVERAGE_PENSION_SPP(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_average_pension_spp = payload;
      }
    },
    EVENT_WATCH_AVERAGE_PENSION_SPP(state, payload) {
      state.event_watch_average_pension_spp = payload;
    },
    // 
    GET_AVERAGE_PENSION_SNP(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_average_pension_snp = payload;
      }
    },
    EVENT_WATCH_AVERAGE_PENSION_SNP(state, payload) {
      state.event_watch_average_pension_snp = payload;
    },
    // 
    GET_AVERAGE_PENSION_BENEFIT_TYPE(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_average_pension_benefit_type = payload;
      }
    },
    EXPORT_AVERAGE_PENSION_BENEFIT_TYPE(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_average_pension_benefit_type = payload;
      }
    },
    EVENT_WATCH_AVERAGE_PENSION_BENEFIT_TYPE(state, payload) {
      state.event_watch_average_pension_benefit_type = payload;
    },
    // 3
    GET_MANAGED_PORTFOLIO(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_managed_portfolio = payload;
      }
    },
    EXPORT_MANAGED_PORTFOLIO(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_managed_portfolio = payload;
      }
    },
    EVENT_WATCH_MANAGED_PORTFOLIO(state, payload) {
      state.event_watch_managed_portfolio = payload;
    },
    // 
    GET_INVESTMENT_LIMITS(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_investment_limits = payload;
      }
    },
    EXPORT_INVESTMENT_LIMITS(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_investment_limits = payload;
      }
    },
    EVENT_WATCH_INVESTMENT_LIMITS(state, payload) {
      state.event_watch_investment_limits = payload;
    },
    // 
    GET_PORTFOLIO_BY_ECONOMIC_SECTOR(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_portfolio_by_economic_sector = payload;
      }
    },
    EXPORT_PORTFOLIO_BY_ECONOMIC_SECTOR(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_portfolio_by_economic_sector = payload;
      }
    },
    EVENT_WATCH_PORTFOLIO_BY_ECONOMIC_SECTOR(state, payload) {
      state.event_watch_portfolio_by_economic_sector = payload;
    },
    // 
    GET_INVESTMENT_INFRASTRUCTURE(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_investment_infrastructure = payload;
      }
    },
    EXPORT_INVESTMENT_INFRASTRUCTURE(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_investment_infrastructure = payload;
      }
    },
    EVENT_WATCH_INVESTMENT_INFRASTRUCTURE(state, payload) {
      state.event_watch_investment_infrastructure = payload;
    },
    // 
    GET_FUND_EVOLUTION(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_fund_evolution = payload;
      }
    },
    EXPORT_FUND_EVOLUTION(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_fund_evolution = payload;
      }
    },
    EVENT_WATCH_FUND_EVOLUTION(state, payload) {
      state.event_watch_fund_evolution = payload;
    },
    // 
    GET_APV_WITH_PENSION_PURPOSE(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_apv_with_pension_purpose = payload;
      }
    },
    EXPORT_APV_WITH_PENSION_PURPOSE(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_apv_with_pension_purpose = payload;
      }
    },
    EVENT_WATCH_APV_WITH_PENSION_PURPOSE(state, payload) {
      state.event_watch_apv_with_pension_purpose = payload;
    },
    // 
    GET_APV_WITH_OUT_PENSION_END(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_apv_with_out_pension_end = payload;
      }
    },
    EXPORT_APV_WITH_OUT_PENSION_END(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_apv_with_out_pension_end = payload;
      }
    },
    EVENT_WATCH_APV_WITH_OUT_PENSION_END(state, payload) {
      state.event_watch_apv_with_out_pension_end = payload;
    },
    // 
    GET_COST_EFFECTIVENESS(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_cost_effectiveness = payload;
      }
    },
    EXPORT_COST_EFFECTIVENESS(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_cost_effectiveness = payload;
      }
    },
    EVENT_WATCH_COST_EFFECTIVENESS(state, payload) {
      state.event_watch_cost_effectiveness = payload;
    },
    // !3
    // 4
    GET_COMMISSION_ON_FLOW(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_commission_on_flow = payload;
      }
    },
    EXPORT_COMMISSION_ON_FLOW(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_commission_on_flow = payload;
      }
    },
    EVENT_WATCH_COMMISSION_ON_FLOW(state, payload) {
      state.event_watch_commission_on_flow = payload;
    },
    //
    GET_MIXED_COMMISSION(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_mixed_commission = payload;
      }
    },
    EXPORT_MIXED_COMMISSION(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_mixed_commission = payload;
      }
    },
    EVENT_WATCH_MIXED_COMMISSION(state, payload) {
      state.event_watch_mixed_commission = payload;
    },
    //
    GET_INSURANCE_PREMIUM_RATE_NUMBER_FIRST(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_insurance_premium_rate_number_first = payload;
      }
    },
    EXPORT_INSURANCE_PREMIUM_RATE_NUMBER_FIRST(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_insurance_premium_rate_number_first = payload;
      }
    },
    EVENT_WATCH_INSURANCE_PREMIUM_RATE_NUMBER_FIRST(state, payload) {
      state.event_watch_insurance_premium_rate_number_first = payload;
    },
    //
    GET_INSURANCE_PREMIUM_RATE_NUMBER_SECOND(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.get_insurance_premium_rate_number_second = payload;
      }
    },
    EXPORT_INSURANCE_PREMIUM_RATE_NUMBER_SECOND(state, payload) {
      if (payload !== undefined/* && payload.length > 0*/) {
        state.export_insurance_premium_rate_number_second = payload;
      }
    },
    EVENT_WATCH_INSURANCE_PREMIUM_RATE_NUMBER_SECOND(state, payload) {
      state.event_watch_insurance_premium_rate_number_second = payload;
    },
    // !4
    // 
    EVENT_ERROR_WATCH(state, payload) {
      state.event_error_watch = {
        event: payload.event,
        error: (Object.assign({}, payload.error))
      };
    }
    // !INIT
  },
  actions: {
    getDataCompanies({ commit }, payload) {
      this.state.companies = [];
      this.state.company_event_watch = '';
      api.getCompanies(payload)
      .then(response => {
        commit('GET_COMPANIES', response);
        commit('GET_COMPANIES_FILTER', response);
        commit('COMPANY_EVENT_WATCH', 'get');
      });
    },
    getDataCompanyInfo({ commit }, payload) {
      api.getCompanyInfo(payload)
      .then(response => {
        commit('GET_COMPANY_INFO', response);
      });
    },
    addDataCompany({ commit }, payload) {
      api.addEditCompany(payload)
      .then(response => {
        if (response.status === 201) {
          response.data.directors = [];
          commit('ADD_COMPANY', response.data);
          commit('EVENT_WATCH', 'add');
        }

        else {
          let response_error = {
            event: 'addEditCompany',
            error: response.error.response.data
          }
          commit('EVENT_ERROR_WATCH', response_error);
        }
      });
    },
    editDataCompany({ commit }, payload) {
      api.addEditCompany(payload)
      .then(response => {
        if (response.status === 200) {
          if (response.data == '') {
            response.data = [];
            response.data = payload.company;
          }
          commit('EDIT_COMPANY', response.data);
          commit('EVENT_WATCH', 'edit');
        }

        else {
          let response_error = {
            event: 'addEditCompany',
            error: response.error.response.data
          }
          commit('EVENT_ERROR_WATCH', response_error);
        }
      });
    },
    deleteDataCompany({ commit }, payload) {
      this.state.company_event_watch = '';
      api.deleteCompany(payload)
      .then(response => {
        response = (response != '' && response != undefined) ? response : {};
        response.company_id = payload.company_id;
        commit('DELETE_COMPANY', payload);
        commit('COMPANY_EVENT_WATCH', 'delete');
      })
    },
    removeDataCompany({ commit }, payload) {
      this.state.company_event_watch = '';
      api.removeCompany(payload)
      .then(response => {
        response = (response != '' && response != undefined) ? response : {};
        response.company_id = payload.company_id;
        commit('REMOVE_COMPANY', payload);
        commit('COMPANY_EVENT_WATCH', 'remove_company');
      })
    },
    // INIT: 1
    getDataActiveAffiliatesAccordingAfp({ commit }, payload) {
      this.state.get_active_affiliates_according_afp = [];
      this.state.event_watch_active_affiliates_according_afp = '';
      api.getActiveAffiliatesAccordingAfp(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getActiveAffiliatesAccordingAfp';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_ACTIVE_AFFILIATES_ACCORDING_AFP', response.data);
        commit('EVENT_WATCH_ACTIVE_AFFILIATES_ACCORDING_AFP', 'get');
      });
    },
    // 
    exportDataActiveAffiliatesAccordingAfp({ commit }, payload) {
      this.state.export_active_affiliates_according_afp = [];
      this.state.event_watch_active_affiliates_according_afp = '';
      let response = api.exportActiveAffiliatesAccordingAfp(payload);
      commit('EXPORT_ACTIVE_AFFILIATES_ACCORDING_AFP', response);
      commit('EVENT_WATCH_ACTIVE_AFFILIATES_ACCORDING_AFP', 'export_'+payload.period);
      /*.then(response => {
        alert(response.data);
        commit('EXPORT_ACTIVE_AFFILIATES_ACCORDING_AFP', response.data);
        commit('EVENT_WATCH_ACTIVE_AFFILIATES_ACCORDING_AFP', 'export_'+payload.period);
      });*/
    },
    // 
    getDataNewAffiliatesTypeWorker({ commit }, payload) {
      this.state.get_new_affiliates_type_worker = [];
      this.state.event_watch_new_affiliates_type_worker = '';
      api.getNewAffiliatesTypeWorker(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getNewAffiliatesTypeWorker';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_NEW_AFFILIATES_TYPE_WORKER', response.data);
        commit('EVENT_WATCH_NEW_AFFILIATES_TYPE_WORKER', 'get');
      });
    },
    exportDataNewAffiliatesTypeWorker({ commit }, payload) {
      this.state.export_new_affiliates_type_worker = [];
      this.state.event_watch_new_affiliates_type_worker = '';
      let response = api.exportNewAffiliatesTypeWorker(payload);
      commit('EXPORT_NEW_AFFILIATES_TYPE_WORKER', response);
      commit('EVENT_WATCH_NEW_AFFILIATES_TYPE_WORKER', 'export_'+payload.period);
    },
    // 
    getDataActiveContributorsAccordingAfp({ commit }, payload) {
      this.state.get_active_contributors_according_afp = [];
      this.state.event_watch_active_contributors_according_afp = '';
      api.getActiveContributorsAccordingAfp(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getActiveContributorsAccordingAfp';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_ACTIVE_CONTRIBUTORS_ACCORDING_AFP', response.data);
        commit('EVENT_WATCH_ACTIVE_CONTRIBUTORS_ACCORDING_AFP', 'get');
      });
    },
    exportDataActiveContributorsAccordingAfp({ commit }, payload) {
      this.state.export_active_contributors_according_afp = [];
      this.state.event_watch_active_contributors_according_afp = '';
      let response = api.exportActiveContributorsAccordingAfp(payload);
      commit('EXPORT_ACTIVE_CONTRIBUTORS_ACCORDING_AFP', response);
      commit('EVENT_WATCH_ACTIVE_CONTRIBUTORS_ACCORDING_AFP', 'export_'+payload.period);
    },
    // 
    getDataContributorsPea({ commit }, payload) {
      this.state.get_contributors_pea = [];
      this.state.event_watch_contributors_pea = '';
      api.getContributorsPea(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getContributorsPea';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_CONTRIBUTORS_PEA', response.data);
        commit('EVENT_WATCH_CONTRIBUTORS_PEA', 'get');
      });
    },
    exportDataContributorsPea({ commit }, payload) {
      this.state.export_contributors_pea = [];
      this.state.event_watch_contributors_pea = '';
      let response = api.exportContributorsPea(payload);
      commit('EXPORT_CONTRIBUTORS_PEA', response);
      commit('EVENT_WATCH_CONTRIBUTORS_PEA', 'export_'+payload.period);
    },
    // 
    getDataAffiliatesContributorsSpp({ commit }, payload) {
      this.state.get_affiliates_contributors_spp = [];
      this.state.event_watch_affiliates_contributors_spp = '';
      api.getAffiliatesContributorsSpp(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getAffiliatesContributorsSpp';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_AFFILIATES_CONTRIBUTORS_SPP', response.data);
        commit('EVENT_WATCH_AFFILIATES_CONTRIBUTORS_SPP', 'get');
      });
    },
    // 2
    getDataPensionersSpp({ commit }, payload) {
      this.state.get_pensioners_spp = [];
      this.state.event_watch_pensioners_spp = '';
      api.getPensionersSpp(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getPensionersSpp';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_PENSIONERS_SPP', response.data);
        commit('EVENT_WATCH_PENSIONERS_SPP', 'get');
      });
    },
    exportDataPensionersSpp({ commit }, payload) {
      this.state.export_pensioners_spp = [];
      this.state.event_watch_pensioners_spp = '';
      let response = api.exportPensionersSpp(payload);
      commit('EXPORT_PENSIONERS_SPP', response);
      commit('EVENT_WATCH_PENSIONERS_SPP', 'export_'+payload.period);
    },
    //
    getDataNewRetirementPensioners({ commit }, payload) {
      this.state.get_new_retirement_pensioners = [];
      this.state.event_watch_new_retirement_pensioners = '';
      api.getNewRetirementPensioners(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getNewRetirementPensioners';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_NEW_RETIREMENT_PENSIONERS', response.data);
        commit('EVENT_WATCH_NEW_RETIREMENT_PENSIONERS', 'get');
      });
    },
    exportDataNewRetirementPensioners({ commit }, payload) {
      this.state.export_new_retirement_pensioners = [];
      this.state.event_watch_new_retirement_pensioners = '';
      let response = api.exportNewRetirementPensioners(payload);
      commit('EXPORT_NEW_RETIREMENT_PENSIONERS', response);
      commit('EVENT_WATCH_NEW_RETIREMENT_PENSIONERS', 'export_'+payload.period);
    },
    //
    getDataPensionersPensionSystem({ commit }, payload) {
      this.state.get_pensioners_pension_system = [];
      this.state.event_watch_pensioners_pension_system = '';
      api.getPensionersPensionSystem(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getPensionersPensionSystem';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_PENSIONERS_PENSION_SYSTEM', response.data);
        commit('EVENT_WATCH_PENSIONERS_PENSION_SYSTEM', 'get');
      });
    },
    exportDataPensionersPensionSystem({ commit }, payload) {
      this.state.export_pensioners_pension_system = [];
      this.state.event_watch_pensioners_pension_system = '';
      let response = api.exportPensionersPensionSystem(payload);
      commit('EXPORT_PENSIONERS_PENSION_SYSTEM', response);
      commit('EVENT_WATCH_PENSIONERS_PENSION_SYSTEM', 'export_'+payload.period);
    },
    //  
    getDataAveragePensionSpp({ commit }, payload) {
      this.state.get_average_pension_spp = [];
      this.state.event_watch_average_pension_spp = '';
      api.getAveragePensionSpp(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getAveragePensionSpp';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_AVERAGE_PENSION_SPP', response.data);
        commit('EVENT_WATCH_AVERAGE_PENSION_SPP', 'get');
      });
    },
    // 
    getDataAveragePensionSnp({ commit }, payload) {
      this.state.get_average_pension_snp = [];
      this.state.event_watch_average_pension_snp = '';
      api.getAveragePensionSnp(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getAveragePensionSnp';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_AVERAGE_PENSION_SNP', response.data);
        commit('EVENT_WATCH_AVERAGE_PENSION_SNP', 'get');
      });
    },
    // 
    getDataAveragePensionBenefitType({ commit }, payload) {
      this.state.get_average_pension_benefit_type = [];
      this.state.event_watch_average_pension_benefit_type = '';
      this.state.get_average_pension_spp = [];
      this.state.get_average_pension_snp = [];
      api.getAveragePensionBenefitType(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getAveragePensionBenefitType';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_AVERAGE_PENSION_BENEFIT_TYPE', response.data);
        commit('EVENT_WATCH_AVERAGE_PENSION_BENEFIT_TYPE', 'get');
        commit('GET_AVERAGE_PENSION_SPP', response.data);
        commit('GET_AVERAGE_PENSION_SNP', response.data);
      });
    },
    exportDataAveragePensionBenefitType({ commit }, payload) {
      this.state.export_average_pension_benefit_type = [];
      this.state.event_watch_average_pension_benefit_type = '';
      let response = api.exportAveragePensionBenefitType(payload);
      commit('EXPORT_AVERAGE_PENSION_BENEFIT_TYPE', response);
      commit('EVENT_WATCH_AVERAGE_PENSION_BENEFIT_TYPE', 'export_'+payload.period);
    },
    // 3
    getDataManagedPortfolio({ commit }, payload) {
      this.state.get_managed_portfolio = [];
      this.state.event_watch_managed_portfolio = '';
      api.getManagedPortfolio(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getManagedPortfolio';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_MANAGED_PORTFOLIO', response.data);
        commit('EVENT_WATCH_MANAGED_PORTFOLIO', 'get');
      });
    },
    exportDataManagedPortfolio({ commit }, payload) {
      this.state.export_managed_portfolio = [];
      this.state.event_watch_managed_portfolio = '';
      let response = api.exportManagedPortfolio(payload);
      commit('EXPORT_MANAGED_PORTFOLIO', response);
      commit('EVENT_WATCH_MANAGED_PORTFOLIO', 'export_'+payload.period);
    },
    getDataInvestmentLimits({ commit }, payload) {
      this.state.get_investment_limits = [];
      this.state.event_watch_investment_limits = '';
      api.getInvestmentLimits(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getInvestmentLimits';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_INVESTMENT_LIMITS', response.data);
        commit('EVENT_WATCH_INVESTMENT_LIMITS', 'get');
      });
    },
    exportDataInvestmentLimits({ commit }, payload) {
      this.state.export_investment_limits = [];
      this.state.event_watch_investment_limits = '';
      let response = api.exportInvestmentLimits(payload);
      commit('EXPORT_INVESTMENT_LIMITS', response);
      commit('EVENT_WATCH_INVESTMENT_LIMITS', 'export_'+payload.period);
    },
    getDataPortfolioByEconomicSector({ commit }, payload) {
      this.state.get_portfolio_by_economic_sector = [];
      this.state.event_watch_portfolio_by_economic_sector = '';
      api.getPortfolioByEconomicSector(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getPortfolioByEconomicSector';
            response_error.error = response.error.response.data;
          }
        }

        if (response.data.table_economic_sector_month.length <= 0) {
          response_error.event = 'emptyData';
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_PORTFOLIO_BY_ECONOMIC_SECTOR', response.data);
        commit('EVENT_WATCH_PORTFOLIO_BY_ECONOMIC_SECTOR', 'get');
      });
    },
    exportDataPortfolioByEconomicSector({ commit }, payload) {
      this.state.export_portfolio_by_economic_sector = [];
      this.state.event_watch_portfolio_by_economic_sector = '';
      let response = api.exportPortfolioByEconomicSector(payload);
      commit('EXPORT_PORTFOLIO_BY_ECONOMIC_SECTOR', response);
      commit('EVENT_WATCH_PORTFOLIO_BY_ECONOMIC_SECTOR', 'export_'+payload.period);
    },
    getDataInvestmentInfrastructure({ commit }, payload) {
      this.state.get_investment_infrastructure = [];
      this.state.event_watch_investment_infrastructure = '';
      api.getInvestmentInfrastructure(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getInvestmentInfrastructure';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_INVESTMENT_INFRASTRUCTURE', response.data);
        commit('EVENT_WATCH_INVESTMENT_INFRASTRUCTURE', 'get');
      });
    },
    exportDataInvestmentInfrastructure({ commit }, payload) {
      this.state.export_investment_infrastructure = [];
      this.state.event_watch_investment_infrastructure = '';
      let response = api.exportInvestmentInfrastructure(payload);
      commit('EXPORT_INVESTMENT_INFRASTRUCTURE', response);
      commit('EVENT_WATCH_INVESTMENT_INFRASTRUCTURE', 'export_'+payload.period);
    },
    getDataFundEvolution({ commit }, payload) {
      this.state.get_fund_evolution = [];
      this.state.event_watch_fund_evolution = '';
      api.getFundEvolution(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getFundEvolution';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_FUND_EVOLUTION', response.data);
        commit('EVENT_WATCH_FUND_EVOLUTION', 'get');
      });
    },
    exportDataFundEvolution({ commit }, payload) {
      this.state.export_fund_evolution = [];
      this.state.event_watch_fund_evolution = '';
      let response = api.exportFundEvolution(payload);
      commit('EXPORT_FUND_EVOLUTION', response);
      commit('EVENT_WATCH_FUND_EVOLUTION', 'export_'+payload.period);
    },
    getDataApvWithPensionPurpose({ commit }, payload) {
      this.state.get_apv_with_pension_purpose = [];
      this.state.event_watch_apv_with_pension_purpose = '';
      api.getApvWithPensionPurpose(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getApvWithPensionPurpose';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_APV_WITH_PENSION_PURPOSE', response.data);
        commit('EVENT_WATCH_APV_WITH_PENSION_PURPOSE', 'get');
      });
    },
    exportDataApvWithPensionPurpose({ commit }, payload) {
      this.state.export_apv_with_pension_purpose = [];
      this.state.event_watch_apv_with_pension_purpose = '';
      let response = api.exportApvWithPensionPurpose(payload);
      commit('EXPORT_APV_WITH_PENSION_PURPOSE', response);
      commit('EVENT_WATCH_APV_WITH_PENSION_PURPOSE', 'export_'+payload.period);
    },
    getDataApvWithOutPensionEnd({ commit }, payload) {
      this.state.get_apv_with_out_pension_end = [];
      this.state.event_watch_apv_with_out_pension_end = '';
      api.getApvWithOutPensionEnd(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getApvWithOutPensionEnd';
            response_error.error = response.error.response.data;
          }
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_APV_WITH_OUT_PENSION_END', response.data);
        commit('EVENT_WATCH_APV_WITH_OUT_PENSION_END', 'get');
      });
    },
    exportDataApvWithOutPensionEnd({ commit }, payload) {
      this.state.export_apv_with_out_pension_end = [];
      this.state.event_watch_apv_with_out_pension_end = '';
      let response = api.exportApvWithOutPensionEnd(payload);
      commit('EXPORT_APV_WITH_OUT_PENSION_END', response);
      commit('EVENT_WATCH_APV_WITH_OUT_PENSION_END', 'export_'+payload.period);
    },
    getDataCostEffectiveness({ commit }, payload) {
      this.state.get_cost_effectiveness = [];
      this.state.event_watch_cost_effectiveness = '';
      api.getCostEffectiveness(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getCostEffectiveness';
            response_error.error = response.error.response.data;
          }
        }

        if (response.data.table_rentability_month.length <= 0) {
          response_error.event = 'emptyData';
        }

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_COST_EFFECTIVENESS', response.data);
        commit('EVENT_WATCH_COST_EFFECTIVENESS', 'get');
      });
    },
    exportDataCostEffectiveness({ commit }, payload) {
      this.state.export_cost_effectiveness = [];
      this.state.event_watch_cost_effectiveness = '';
      let response = api.exportCostEffectiveness(payload);
      commit('EXPORT_COST_EFFECTIVENESS', response);
      commit('EVENT_WATCH_COST_EFFECTIVENESS', 'export_'+payload.period);
    },
    // 4
    getDataCommissionOnFlow({ commit }, payload) {
      this.state.get_commission_on_flow = [];
      this.state.event_watch_commission_on_flow = '';
      api.getCommissionOnFlow(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getCommissionOnFlow';
            response_error.error = response.error.response.data;
          }
        }

        /* if (response.data.table_rentability_month.length <= 0) {
          response_error.event = 'emptyData';
        } */

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_COMMISSION_ON_FLOW', response.data);
        commit('EVENT_WATCH_COMMISSION_ON_FLOW', 'get');
      });
    },
    exportDataCommissionOnFlow({ commit }, payload) {
      this.state.export_commission_on_flow = [];
      this.state.event_watch_commission_on_flow = '';
      let response = api.exportCommissionOnFlow(payload);
      commit('EXPORT_COMMISSION_ON_FLOW', response);
      commit('EVENT_WATCH_COMMISSION_ON_FLOW', 'export_'+payload.period);
    },
    getDataMixedCommission({ commit }, payload) {
      this.state.get_mixed_commission = [];
      this.state.event_watch_mixed_commission = '';
      api.getMixedCommission(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getMixedCommission';
            response_error.error = response.error.response.data;
          }
        }

        /* if (response.data.table_rentability_month.length <= 0) {
          response_error.event = 'emptyData';
        } */

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_MIXED_COMMISSION', response.data);
        commit('EVENT_WATCH_MIXED_COMMISSION', 'get');
      });
    },
    exportDataMixedCommission({ commit }, payload) {
      this.state.export_mixed_commission = [];
      this.state.event_watch_mixed_commission = '';
      let response = api.exportMixedCommission(payload);
      commit('EXPORT_MIXED_COMMISSION', response);
      commit('EVENT_WATCH_MIXED_COMMISSION', 'export_'+payload.period);
    },
    getDataInsurancePremiumRateNumberFirst({ commit }, payload) {
      this.state.get_insurance_premium_rate_number_first = [];
      this.state.event_watch_insurance_premium_rate_number_first = '';
      api.getInsurancePremiumRateNumberFirst(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getInsurancePremiumRateNumberFirst';
            response_error.error = response.error.response.data;
          }
        }

        /* if (response.data.table_rentability_month.length <= 0) {
          response_error.event = 'emptyData';
        } */

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_INSURANCE_PREMIUM_RATE_NUMBER_FIRST', response.data);
        commit('EVENT_WATCH_INSURANCE_PREMIUM_RATE_NUMBER_FIRST', 'get');
      });
    },
    exportDataInsurancePremiumRateNumberFirst({ commit }, payload) {
      this.state.export_insurance_premium_rate_number_first = [];
      this.state.event_watch_insurance_premium_rate_number_first = '';
      let response = api.exportInsurancePremiumRateNumberFirst(payload);
      commit('EXPORT_INSURANCE_PREMIUM_RATE_NUMBER_FIRST', response);
      commit('EVENT_WATCH_INSURANCE_PREMIUM_RATE_NUMBER_FIRST', 'export_'+payload.period);
    },
    getDataInsurancePremiumRateNumberSecond({ commit }, payload) {
      this.state.get_insurance_premium_rate_number_second = [];
      this.state.event_watch_insurance_premium_rate_number_second = '';
      api.getInsurancePremiumRateNumberSecond(payload)
      .then(response => {
        let response_error = {
          event: '',
          error: ''
        };

        if (response.error != undefined) {
          if (response.error.response.status == 500) {
            response_error.event = 'getInsurancePremiumRateNumberSecond';
            response_error.error = response.error.response.data;
          }
        }

        /* if (response.data.table_rentability_month.length <= 0) {
          response_error.event = 'emptyData';
        } */

        commit('EVENT_ERROR_WATCH', response_error);
        commit('GET_INSURANCE_PREMIUM_RATE_NUMBER_SECOND', response.data);
        commit('EVENT_WATCH_INSURANCE_PREMIUM_RATE_NUMBER_SECOND', 'get');
      });
    },
    exportDataInsurancePremiumRateNumberSecond({ commit }, payload) {
      this.state.export_insurance_premium_rate_number_second = [];
      this.state.event_watch_insurance_premium_rate_number_second = '';
      let response = api.exportInsurancePremiumRateNumberSecond(payload);
      commit('EXPORT_INSURANCE_PREMIUM_RATE_NUMBER_SECOND', response);
      commit('EVENT_WATCH_INSURANCE_PREMIUM_RATE_NUMBER_SECOND', 'export_'+payload.period);
    },
    // !4
    // !INIT
  }
});

export default store;