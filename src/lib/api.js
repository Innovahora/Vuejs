import axios from 'axios';
import config from '../config';
import {getToken} from '@/utils/auth'

const API_MODE = config.base_mode,
  API_URL = config.base_url,
  API_URL_END_POINT = {
    development: {
      getCompanies: '/listCompanies.php',
      getCompanyInfo: '/infoCompany.php',
      addCompany: '/saveCompany.php',
      deleteCompany: '/deleteCompany.php',
      removeCompany: '/removeCompany.php',
      editDateMeeting: '',
      editDateRenew: '',
      // INIT
      getActiveAffiliatesAccordingAfp: 'AffiliatesContributors/ActiveAffiliatesAccordingAfp/index',
      exportActiveAffiliatesAccordingAfp: 'AffiliatesContributors/ActiveAffiliatesAccordingAfp/export',
      getNewAffiliatesTypeWorker: 'AffiliatesContributors/NewAffiliatesTypeWorker/index',
      exportNewAffiliatesTypeWorker: 'AffiliatesContributors/NewAffiliatesTypeWorker/export',
      getActiveContributorsAccordingAfp: 'AffiliatesContributors/ActiveContributorsAccordingAfp/index',
      exportActiveContributorsAccordingAfp: 'AffiliatesContributors/ActiveContributorsAccordingAfp/export',
      getContributorsPea: 'AffiliatesContributors/ContributorsPea/index',
      exportContributorsPea: 'AffiliatesContributors/ContributorsPea/export',
      getAffiliatesContributorsSpp: 'AffiliatesContributors/AffiliatesContributorsSpp/index',
      // 
      getPensionersSpp: 'Pensions/PensionersSpp/index',
      exportPensionersSpp: 'Pensions/PensionersSpp/export',
      getNewRetirementPensioners: 'Pensions/NewRetirementPensioners/index',
      exportNewRetirementPensioners: 'Pensions/NewRetirementPensioners/export',
      getPensionersPensionSystem: 'Pensions/PensionersPensionSystem/index',
      exportPensionersPensionSystem: 'Pensions/PensionersPensionSystem/export',
      getAveragePensionSpp: 'Pensions/AveragePensionSpp/index',
      getAveragePensionSnp: 'Pensions/AveragePensionSnp/index',
      getAveragePensionBenefitType: 'Pensions/AveragePensionBenefitType/index',
      exportAveragePensionBenefitType: 'Pensions/AveragePensionBenefitType/export',
      // 3
      getManagedPortfolio: 'Investments/ManagedPortfolio/index',
      exportManagedPortfolio: 'Investments/ManagedPortfolio/export',
      getInvestmentLimits: 'Investments/InvestmentLimits/index',
      exportInvestmentLimits: 'Investments/InvestmentLimits/export',
      getPortfolioByEconomicSector: 'Investments/PortfolioByEconomicSector/index',
      exportPortfolioByEconomicSector: 'Investments/PortfolioByEconomicSector/export',
      getInvestmentInfrastructure: 'Investments/InvestmentInfrastructure/index',
      exportInvestmentInfrastructure: 'Investments/InvestmentInfrastructure/export',
      getFundEvolution: 'Investments/FundEvolution/index',
      exportFundEvolution: 'Investments/FundEvolution/export',
      getApvWithPensionPurpose: 'Investments/APVPensionWithPurpose/index',
      exportApvWithPensionPurpose: 'Investments/APVPensionWithPurpose/export',
      getApvWithOutPensionEnd: 'Investments/APVPensionWithOutPurpose/index',
      exportApvWithOutPensionEnd: 'Investments/APVPensionWithOutPurpose/export',
      getCostEffectiveness: 'Investments/Rentability/index',
      exportCostEffectiveness: 'Investments/Rentability/export',
      // !3
      // 4
      getCommissionOnFlow: 'CommissionsPrimas/CommissionOnFlow/index',
      exportCommissionOnFlow: 'CommissionsPrimas/CommissionOnFlow/export',

      getMixedCommission: 'CommissionsPrimas/CommissionMixta/index',
      exportMixedCommission: 'CommissionsPrimas/CommissionMixta/export',

      getInsurancePremiumRateNumberFirst: 'CommissionsPrimas/InsurancePrimaRateNumber/index',
      exportInsurancePremiumRateNumberFirst: 'CommissionsPrimas/InsurancePrimaRateNumber/export',

      getInsurancePremiumRateNumberSecond: 'CommissionsPrimas/CommissionsForVoluntaryContributions/index',
      exportInsurancePremiumRateNumberSecond: 'CommissionsPrimas/CommissionsForVoluntaryContributions/export',
      // !4
      // !INIT
    },
    production: {
      // INIT
      getActiveAffiliatesAccordingAfp: 'AffiliatesContributors/ActiveAffiliatesAccordingAfp/index',
      exportActiveAffiliatesAccordingAfp: 'AffiliatesContributors/ActiveAffiliatesAccordingAfp/export',
      getNewAffiliatesTypeWorker: 'AffiliatesContributors/NewAffiliatesTypeWorker/index',
      exportNewAffiliatesTypeWorker: 'AffiliatesContributors/NewAffiliatesTypeWorker/export',
      getActiveContributorsAccordingAfp: 'AffiliatesContributors/ActiveContributorsAccordingAfp/index',
      exportActiveContributorsAccordingAfp: 'AffiliatesContributors/ActiveContributorsAccordingAfp/export',
      getContributorsPea: 'AffiliatesContributors/ContributorsPea/index',
      exportContributorsPea: 'AffiliatesContributors/ContributorsPea/export',
      getAffiliatesContributorsSpp: 'AffiliatesContributors/AffiliatesContributorsSpp/index',
      // 
      getPensionersSpp: 'Pensions/PensionersSpp/index',
      exportPensionersSpp: 'Pensions/PensionersSpp/export',
      getNewRetirementPensioners: 'Pensions/NewRetirementPensioners/index',
      exportNewRetirementPensioners: 'Pensions/NewRetirementPensioners/export',
      getPensionersPensionSystem: 'Pensions/PensionersPensionSystem/index',
      exportPensionersPensionSystem: 'Pensions/PensionersPensionSystem/export',
      getAveragePensionSpp: 'Pensions/AveragePensionSpp/index',
      getAveragePensionSnp: 'Pensions/AveragePensionSnp/index',
      getAveragePensionBenefitType: 'Pensions/AveragePensionBenefitType/index',
      exportAveragePensionBenefitType: 'Pensions/AveragePensionBenefitType/export',
      // 3
      getManagedPortfolio: 'Investments/ManagedPortfolio/index',
      exportManagedPortfolio: 'Investments/ManagedPortfolio/export',
      getInvestmentLimits: 'Investments/InvestmentLimits/index',
      exportInvestmentLimits: 'Investments/InvestmentLimits/export',
      getPortfolioByEconomicSector: 'Investments/PortfolioByEconomicSector/index',
      exportPortfolioByEconomicSector: 'Investments/PortfolioByEconomicSector/export',
      getInvestmentInfrastructure: 'Investments/InvestmentInfrastructure/index',
      exportInvestmentInfrastructure: 'Investments/InvestmentInfrastructure/export',
      getFundEvolution: 'Investments/FundEvolution/index',
      exportFundEvolution: 'Investments/FundEvolution/export',
      getApvWithPensionPurpose: 'Investments/APVPensionWithPurpose/index',
      exportApvWithPensionPurpose: 'Investments/APVPensionWithPurpose/export',
      getApvWithOutPensionEnd: 'Investments/APVPensionWithOutPurpose/index',
      exportApvWithOutPensionEnd: 'Investments/APVPensionWithOutPurpose/export',
      getCostEffectiveness: 'Investments/Rentability/index',
      exportCostEffectiveness: 'Investments/Rentability/export',
      // !3
      // 4
      getCommissionOnFlow: 'CommissionsPrimas/CommissionOnFlow/index',
      exportCommissionOnFlow: 'CommissionsPrimas/CommissionOnFlow/export',

      getMixedCommission: 'CommissionsPrimas/CommissionMixta/index',
      exportMixedCommission: 'CommissionsPrimas/CommissionMixta/export',

      getInsurancePremiumRateNumberFirst: 'CommissionsPrimas/InsurancePrimaRateNumber/index',
      exportInsurancePremiumRateNumberFirst: 'CommissionsPrimas/InsurancePrimaRateNumber/export',

      getInsurancePremiumRateNumberSecond: 'CommissionsPrimas/CommissionsForVoluntaryContributions/index',
      exportInsurancePremiumRateNumberSecond: 'CommissionsPrimas/CommissionsForVoluntaryContributions/export',
      // !4
      // !INIT
    }
  };

class Api {
  constructor() {}

  getBaseUrl () {
    return API_URL;
  }

  /* Companies */
  getCompanies(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getCompanies, {
      params: {
        company_name: query.company_name
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  getCompanyInfo(id) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getCompanyInfo+id, {
      /* params: {
        id: id
      }, */
      headers: { 
        Authorization: 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  addEditCompany(data) {
    let api_url = '',
      method = (data.company.id != undefined) ? 'put' : 'post',
      id = (data.company.id != undefined) ? data.company.id : '',
      formData = new FormData();

    switch(data.type_action) {
      case 'add':
        api_url = API_URL_END_POINT[API_MODE].addCompany;
        formData.append('send_to_history', data.company.send_to_history);
      break;

      case 'edit':
        api_url = API_URL_END_POINT[API_MODE].addCompany+id+'/';
      break;
    }
    
    formData.append('name', data.company.name);
    // formData.append('directory_period', data.company.directory_period);
    formData.append('director_permanence', data.company.director_permanence);
    formData.append('participation_prima', data.company.participation_prima);
    formData.append('participation_habitat', data.company.participation_habitat);
    formData.append('participation_integra', data.company.participation_integra);
    formData.append('participation_pro_futuro', data.company.participation_pro_futuro);
    formData.append('shares_afp', data.company.shares_afp);
    formData.append('directors_number', data.company.directors_number);
    formData.append('directors_afp', data.company.directors_afp);
    if (typeof data.company.file === 'object') {
      formData.append('file', data.company.file);
    }
    formData.append('statute_description', data.company.statute_description);
    formData.append('number_shares', data.company.number_shares);
    formData.append('director_shares_select', data.company.director_shares_select);
    // formData.append('directors_name_shares', data.company.directors_name_shares);
    formData.append('directory_url', data.company.directory_url);
    // formData.append('date_meeting', data.company.date_meeting+' 00:00:00');
    formData.append('date_meeting', data.company.date_meeting);
    return axios[method](`${this.getBaseUrl()}`+api_url, 
      formData,
      {
      headers: {
        'Authorization': 'Token '+getToken(),
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function (response) {
      return response;
    })
    .catch(e => ({ error: e }))
  }

  deleteCompany(query) {
    return axios.delete(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].deleteCompany+query.company_id+'/', {
      params: {},
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  removeCompany(query) {
    return axios.delete(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].removeCompany+query.company_id+'/', {
      params: {},
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  editDateMeeting(data) {
    return axios.post(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].editDateMeeting+data.company_id+'/', 
        {
          date_meeting: data.date_meeting
        },
        { 
        headers: { 
          'Authorization': 'Token '+getToken()
        }
      })
      .then(function (response) {
        return response.data;
      })
      .catch(e => ({ error: e }))
  }

  editDateRenew(data) {
    return axios.post(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].editDateRenew+data.director_id+'/', 
        {
          renew_date: data.date_renew
        },
        { 
        headers: { 
          'Authorization': 'Token '+getToken()
        }
      })
      .then(function (response) {
        return response.data;
      })
      .catch(e => ({ error: e }))
  }
  /* !Companies */

  // INIT
  getActiveAffiliatesAccordingAfp(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getActiveAffiliatesAccordingAfp, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportActiveAffiliatesAccordingAfp(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportActiveAffiliatesAccordingAfp+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
    /* return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportActiveAffiliatesAccordingAfp, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e })) */
  }

  getNewAffiliatesTypeWorker(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getNewAffiliatesTypeWorker, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportNewAffiliatesTypeWorker(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportNewAffiliatesTypeWorker+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getActiveContributorsAccordingAfp(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getActiveContributorsAccordingAfp, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportActiveContributorsAccordingAfp(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportActiveContributorsAccordingAfp+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getContributorsPea(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getContributorsPea, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportContributorsPea(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportContributorsPea+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getAffiliatesContributorsSpp(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getAffiliatesContributorsSpp, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  // 
  
  getPensionersSpp(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getPensionersSpp, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportPensionersSpp(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportPensionersSpp+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getNewRetirementPensioners(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getNewRetirementPensioners, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportNewRetirementPensioners(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportNewRetirementPensioners+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getPensionersPensionSystem(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getPensionersPensionSystem, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportPensionersPensionSystem(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportPensionersPensionSystem+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getAveragePensionSpp(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getAveragePensionSpp, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  getAveragePensionSnp(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getAveragePensionSnp, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  getAveragePensionBenefitType(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getAveragePensionBenefitType, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportAveragePensionBenefitType(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportAveragePensionBenefitType+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  // 3
  getManagedPortfolio(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getManagedPortfolio, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportManagedPortfolio(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportManagedPortfolio+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getInvestmentLimits(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getInvestmentLimits, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportInvestmentLimits(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportInvestmentLimits+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getPortfolioByEconomicSector(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getPortfolioByEconomicSector, {
      params: {
        start_date: query.start_date.substring(0, 7)
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportPortfolioByEconomicSector(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportPortfolioByEconomicSector+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10).substring(0, 7);
  }

  getInvestmentInfrastructure(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getInvestmentInfrastructure, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportInvestmentInfrastructure(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportInvestmentInfrastructure+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getFundEvolution(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getFundEvolution, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportFundEvolution(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportFundEvolution+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getApvWithPensionPurpose(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getApvWithPensionPurpose, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportApvWithPensionPurpose(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportApvWithPensionPurpose+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getApvWithOutPensionEnd(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getApvWithOutPensionEnd, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportApvWithOutPensionEnd(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportApvWithOutPensionEnd+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getCostEffectiveness(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getCostEffectiveness, {
      params: {
        start_date: query.start_date.substring(0, 7)
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportCostEffectiveness(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportCostEffectiveness+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10).substring(0, 7);
  }

  getCommissionOnFlow(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getCommissionOnFlow, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportCommissionOnFlow(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportCommissionOnFlow+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getMixedCommission(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getMixedCommission, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportMixedCommission(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportMixedCommission+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getInsurancePremiumRateNumberFirst(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getInsurancePremiumRateNumberFirst, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportInsurancePremiumRateNumberFirst(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportInsurancePremiumRateNumberFirst+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  getInsurancePremiumRateNumberSecond(query) {
    return axios.get(`${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].getInsurancePremiumRateNumberSecond, {
      params: {
        start_date: query.start_date,
        end_date: query.end_date
      },
      headers: { 
        'Authorization': 'Token '+getToken()
      }
    })
    .then(function (response) {
      return response.data;
    })
    .catch(e => ({ error: e }))
  }

  exportInsurancePremiumRateNumberSecond(query) {
    return `${this.getBaseUrl()}`+API_URL_END_POINT[API_MODE].exportInsurancePremiumRateNumberSecond+'/'+query.period+'?start_date='+new Date(query.start_date).toISOString().slice(0,10)+'&end_date='+new Date(query.end_date).toISOString().slice(0,10);
  }

  // !3
  // !INIT
}

const api = new Api();

export default api;