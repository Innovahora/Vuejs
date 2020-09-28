<template>
  <nav class="navbar navbar-expand-lg navbar-light d-lg-none">
    <a class="sidebar-brand" href="/dashboard">
      <img alt="Asociacion de afp" :src="logo_afp" height="70" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" data-toggle="dropdown"> <span>Afiliados y cotizantes </span>
          </a>
          <div class="dropdown-menu">
            <router-link to="/ActiveAffiliatesAccordingAfp" tag="link" class="dropdown-item">Afiliados activos</router-link>
            <router-link to="/NewAffiliatesTypeWorker" tag="link" class="dropdown-item">Nuevos afiliados por tipo de trabajador</router-link>
            <router-link to="/ActiveContributorsAccordingAfp" tag="link" class="dropdown-item">Cotizantes activos</router-link>
            <!-- <router-link to="/ContributorsPea" tag="link" class="dropdown-item">Cotizantes / PEA</router-link> -->
            <!-- <router-link to="/ContributorsPea" tag="link" class="dropdown-item">Afiliados y cotizantes con respecto a PEA</router-link> -->
            <router-link to="/ContributorsPea" tag="link" class="dropdown-item">Afiliados, cotizantes y PEA</router-link>
            <!-- <router-link to="/AffiliatesContributorsSpp" tag="link" class="dropdown-item">Afiliados y cotizantes del SPP</router-link> -->
            <!-- <router-link to="/AffiliatesContributorsSpp" tag="link" class="dropdown-item">Evolución de afiliados y cotizantes del SPP</router-link> -->
          </div>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" data-toggle="dropdown"> <span>Pensiones </span>
          </a>
          <div class="dropdown-menu">
            <!-- a class="dropdown-item" href="#">Pensionistas SPP</a>
            <a class="dropdown-item" href="#">Pensionistas por sistema de pensiones</a>
            <a class="dropdown-item" href="#">Nuevos pensionistas de jubilación</a>
            <a class="dropdown-item" href="#">Pensión promedio del SPP</a>
            <a class="dropdown-item" href="#">Pensión promedio de jubilación del SNP</a>
            <a class="dropdown-item" href="#">Pensión promedio por tipo de beneficio</a -->
              <router-link to="/PensionersSpp" tag="link" class="dropdown-item">Pensionistas del SPP</router-link>
              <router-link to="/PensionersPensionSystem" tag="link" class="dropdown-item">Pensionistas por sistema de pensiones</router-link>
              <!-- <router-link to="/NewRetirementPensioners" tag="link" class="dropdown-item">Nuevos pensionistas de jubilación</router-link> -->
              <!-- <router-link to="/NewRetirementPensioners" tag="link" class="dropdown-item">Pensionistas por sistema de jubilación</router-link> -->
              <!-- <router-link to="/AveragePensionSpp" tag="link" class="dropdown-item">Pensión promedio del SPP</router-link> -->
              <!-- <router-link to="/AveragePensionSnp" tag="link" class="dropdown-item">Pensión promedio del SNP</router-link> -->
              <!-- <router-link to="/AveragePensionSnp" tag="link" class="dropdown-item">Pensión promedio de jubilación del SNP</router-link> -->
              <router-link to="/AveragePensionBenefitType" tag="link" class="dropdown-item">Pensión promedio por tipo de beneficio</router-link>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" data-toggle="dropdown"> <span>Inversiones</span>
          </a>
          <div class="dropdown-menu">
            <router-link to="/ManagedPortfolio" tag="link" class="dropdown-item">Cartera administrada</router-link>
            <router-link to="/InvestmentLimits" tag="link" class="dropdown-item">Límites de inversión</router-link>
            <router-link to="/PortfolioByEconomicSector" tag="link" class="dropdown-item">Cartera por sector económico</router-link>
            <router-link to="/InvestmentInfrastructure" tag="link" class="dropdown-item">Inversión en infraestructura</router-link>
            <router-link to="/FundEvolution" tag="link" class="dropdown-item">Evolución del fondo</router-link>
            <router-link to="/ApvWithPensionPurpose" tag="link" class="dropdown-item">Aportes voluntarios con fin previsional</router-link>
            <router-link to="/ApvWithOutPensionEnd" tag="link" class="dropdown-item">Aportes voluntarios sin fin previsional</router-link>
            <router-link to="/CostEffectiveness" tag="link" class="dropdown-item">Rentabilidad</router-link>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" data-toggle="dropdown"> <span>Comisiones y Primas</span>
          </a>
          <div class="dropdown-menu">
            <router-link to="/CommissionOnFlow" tag="link" class="dropdown-item">Comisión sobre flujo</router-link>
            <router-link to="/MixedCommission" tag="link" class="dropdown-item">Comisión mixta</router-link>
            <router-link to="/InsurancePremiumRateNumberFirst" tag="link" class="dropdown-item">Prima de seguro, tasa de aporte y aportes por año</router-link>
            <router-link to="/InsurancePremiumRateNumberSecond" tag="link" class="dropdown-item">Comisiones por aportes voluntarios</router-link>
          </div>
        </li>
      </ul>
      <!-- ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" data-toggle="dropdown"> <span>Cartera administrada del fondo de pensiones </span>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Cartera administrada del fondo de pensiones tipo 1 por instrumento financiero y AFP</a>
            <a class="dropdown-item" href="#">Cartera administrada del fondo de pensiones tipo 2 por instrumento financiero y AFP</a>
            <a class="dropdown-item" href="#">Cartera administrada del fondo de pensiones tipo 3 por instrumento financiero y AFP</a>
            <a class="dropdown-item" href="#">Evolución del fondo de pensiones-histórico</a>
            <a class="dropdown-item" href="#">Rentabilidad nominal anualizada del SPP</a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/pensiones" tag="link" class="sidebar-link text-white">Comisiones y primas del SPP</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pensiones" tag="link" class="sidebar-link text-white">Información latinoamérica</router-link>
        </li>
        <li class="nav-item d-block d-sm-block d-md-block d-lg-none">
          <a class="sidebar-link text-white" href="#" @click.prevent="Logout">Cerrar Session</a>
        </li>
      </ul -->
      <ul class="navbar-nav ml-auto d-none d-sm-none d-md-none d-lg-block">
        <li class="nav-item dropdown">
          <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-toggle="dropdown">
            <i class="align-middle" data-feather="settings"></i>
          </a>

          <a class="nav-link dropdown-toggle d-none d-sm-inline-block text-white" href="#" data-toggle="dropdown"> <span>{{name}} </span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#" @click.prevent="Logout">Cerrar Session</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {getName, authLogout} from '@/utils/auth';
import logo_directores from '../../src/assets/logo_directores.png';
export default {
  name: 'Header',
  data () {
    return {
        name: '',
        logo_afp: logo_directores
    }
  },
  props: {
    msg: String
  },
  created () {
    const self = this;
    self.name = getName();

    /* setTimeout(function(){
      self.Logout();
    }, 600000); */
  },
  methods: {
    Logout () {
        authLogout()
        this.$user.set({ role: '' });
        this.$router.push('/ingresar')
    }
  }
}
</script>

<style>
  .sidebar-brand {
    border-radius: 2px;
    /*background-color: #fff;*/
    padding: 5px !important;
    margin-right: 20px;
    padding: 0 !important;
  }

  .navbar-nav .nav-item a, .navbar-nav .nav-item link {
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
  }

  .navbar-light .navbar-toggler {
    color: rgba(255, 255, 255, 1) !important;
    border-color: rgba(255, 255, 255, 1) !important;
    margin-right: 15px;
  }

  .navbar-nav .nav-item {
    align-self: center;
  }

  @media screen and (min-width: 992px) and (max-width: 1102px) {
    .navbar-nav .nav-item a, .navbar-nav .nav-item link {
      font-size: 12px;
    }

    .sidebar-link, a.sidebar-link {
      padding: 0.75rem 10px !important;
    }
  }
</style>
