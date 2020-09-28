import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/pages/Home.vue'
import DashView from './views/Dash.vue'
import ActiveAffiliatesAccordingAfp from './views/pages/AffiliatesContributors/ActiveAffiliatesAccordingAfp.vue'
import NewAffiliatesTypeWorker from './views/pages/AffiliatesContributors/NewAffiliatesTypeWorker.vue'
import ActiveContributorsAccordingAfp from './views/pages/AffiliatesContributors/ActiveContributorsAccordingAfp.vue'
import ContributorsPea from './views/pages/AffiliatesContributors/ContributorsPea.vue'
import AffiliatesContributorsSpp from './views/pages/AffiliatesContributors/AffiliatesContributorsSpp.vue'
import PensionersSpp from './views/pages/Pensions/PensionersSpp.vue'
import PensionersPensionSystem from './views/pages/Pensions/PensionersPensionSystem.vue'
import NewRetirementPensioners from './views/pages/Pensions/NewRetirementPensioners.vue'
import AveragePensionSpp from './views/pages/Pensions/AveragePensionSpp.vue'
import AveragePensionSnp from './views/pages/Pensions/AveragePensionSnp.vue'
import AveragePensionBenefitType from './views/pages/Pensions/AveragePensionBenefitType.vue'

import ManagedPortfolio from './views/pages/Investments/ManagedPortfolio.vue'
import InvestmentLimits from './views/pages/Investments/InvestmentLimits.vue'
import PortfolioByEconomicSector from './views/pages/Investments/PortfolioByEconomicSector.vue'
import InvestmentInfrastructure from './views/pages/Investments/InvestmentInfrastructure.vue'
import FundEvolution from './views/pages/Investments/FundEvolution.vue'
import ApvWithPensionPurpose from './views/pages/Investments/ApvWithPensionPurpose.vue'
import ApvWithOutPensionEnd from './views/pages/Investments/ApvWithOutPensionEnd.vue'
import CostEffectiveness from './views/pages/Investments/CostEffectiveness.vue'

import CommissionOnFlow from './views/pages/CommissionsBonuses/CommissionOnFlow.vue'
import MixedCommission from './views/pages/CommissionsBonuses/MixedCommission.vue'
import InsurancePremiumRateNumberFirst from './views/pages/CommissionsBonuses/InsurancePremiumRateNumberFirst.vue'
import InsurancePremiumRateNumberSecond from './views/pages/CommissionsBonuses/InsurancePremiumRateNumberSecond.vue'

import middlewareAuth from '@/middleware/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ingresar',
      //component: Login
      redirect: 'dashboard'
    },
    {
      path: '/',
      component: DashView,
      beforeEnter: middlewareAuth,
      children: [
        {
          path: 'dashboard',
          // alias: '',
          // component: Home,
          component: ActiveAffiliatesAccordingAfp,
          name: 'Home',
          meta: {
            description: 'Home'
          }
        },
        // 1
        {
          path: 'activeAffiliatesAccordingAfp',
          name: 'ActiveAffiliatesAccordingAfp',
          component: ActiveAffiliatesAccordingAfp,
          meta: {
            description: 'Afiliados activos según AFP',
            permissions: [
              /* {
                role: 'headhunter',
                access: false,
                redirect: 'Home'
              } */
            ]
          }
        },
        {
          path: 'newAffiliatesTypeWorker',
          name: 'NewAffiliatesTypeWorker',
          component: NewAffiliatesTypeWorker,
          meta: {
            description: 'Nuevos afiliados por tipo de trabajador',
          }
        },
        {
          path: 'activeContributorsAccordingAfp',
          name: 'ActiveContributorsAccordingAfp',
          component: ActiveContributorsAccordingAfp,
          meta: {
            description: 'Cotizantes activos según AFP',
          }
        },
        {
          path: 'contributorsPea',
          name: 'ContributorsPea',
          component: ContributorsPea,
          meta: {
            description: 'Cotizantes / PEA',
          }
        },
        {
          path: 'affiliatesContributorsSpp',
          name: 'AffiliatesContributorsSpp',
          component: AffiliatesContributorsSpp,
          meta: {
            description: 'Afiliados y cotizantes del SPP',
          }
        },
        // 2
        {
          path: 'PensionersSpp',
          name: 'PensionersSpp',
          component: PensionersSpp,
          meta: {
            description: 'Pensionistas SPP',
          }
        },
        {
          path: 'PensionersPensionSystem',
          name: 'PensionersPensionSystem',
          component: PensionersPensionSystem,
          meta: {
            description: 'Pensionistas por sistema de pensiones',
          }
        },
        {
          path: 'NewRetirementPensioners',
          name: 'NewRetirementPensioners',
          component: NewRetirementPensioners,
          meta: {
            description: 'nuevos pensionistas de jubilación',
          }
        },
        {
          path: 'AveragePensionSpp',
          name: 'AveragePensionSpp',
          component: AveragePensionSpp,
          meta: {
            description: 'Pensión promedio del SPP',
          }
        },
        {
          path: 'AveragePensionSnp',
          name: 'AveragePensionSnp',
          component: AveragePensionSnp,
          meta: {
            description: 'Pensión promedio de jubilación del SNP',
          }
        },
        {
          path: 'AveragePensionBenefitType',
          name: 'AveragePensionBenefitType',
          component: AveragePensionBenefitType,
          meta: {
            description: 'Pensión promedio por tipo de beneficio',
          }
        },
        {
          path: 'ManagedPortfolio',
          name: 'ManagedPortfolio',
          component: ManagedPortfolio,
          meta: {
            description: '',
          }
        },
        {
          path: 'InvestmentLimits',
          name: 'InvestmentLimits',
          component: InvestmentLimits,
          meta: {
            description: '',
          }
        },
        {
          path: 'PortfolioByEconomicSector',
          name: 'PortfolioByEconomicSector',
          component: PortfolioByEconomicSector,
          meta: {
            description: '',
          }
        },
        {
          path: 'InvestmentInfrastructure',
          name: 'InvestmentInfrastructure',
          component: InvestmentInfrastructure,
          meta: {
            description: '',
          }
        },
        {
          path: 'FundEvolution',
          name: 'FundEvolution',
          component: FundEvolution,
          meta: {
            description: '',
          }
        },
        {
          path: 'ApvWithPensionPurpose',
          name: 'ApvWithPensionPurpose',
          component: ApvWithPensionPurpose,
          meta: {
            description: '',
          }
        },
        {
          path: 'ApvWithOutPensionEnd',
          name: 'ApvWithOutPensionEnd',
          component: ApvWithOutPensionEnd,
          meta: {
            description: '',
          }
        },
        {
          path: 'CostEffectiveness',
          name: 'CostEffectiveness',
          component: CostEffectiveness,
          meta: {
            description: '',
          }
        },
        // 3
        {
          path: 'CommissionOnFlow',
          name: 'CommissionOnFlow',
          component: CommissionOnFlow,
          meta: {
            description: '',
          }
        },
        {
          path: 'MixedCommission',
          name: 'MixedCommission',
          component: MixedCommission,
          meta: {
            description: '',
          }
        },
        {
          path: 'InsurancePremiumRateNumberFirst',
          name: 'InsurancePremiumRateNumberFirst',
          component: InsurancePremiumRateNumberFirst,
          meta: {
            description: '',
          }
        },
        {
          path: 'InsurancePremiumRateNumberSecond',
          name: 'InsurancePremiumRateNumberSecond',
          component: InsurancePremiumRateNumberSecond,
          meta: {
            description: '',
          }
        }
      ]
    }
  ]
})
