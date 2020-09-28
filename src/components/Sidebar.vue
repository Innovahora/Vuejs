<template>
  <nav class="sidebar toggled-no">
    <div class="sidebar-content">
      <a class="sidebar-brand" href="/dashboard">
        <!--img alt="Asociacion de afp" src="@/assets/logo.svg" width="120" /-->
        <!-- h2>Directores</h2 -->
        <img alt="Asociacion de afp" :src="logo_afp" height="70" />
      </a>

      <ul class="sidebar-nav">
        <!-- li class="sidebar-item" v-if='type_user == "ENTIDAD" || type_user == "ADMIN"'>
          <router-link to="/dashboard" tag="link" class="sidebar-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file align-middle mr-2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
            <span class="align-middle">Inicio</span>
          </router-link>
        </li -->
        <li class="sidebar-item active-no">
          <a href="https://www.asociacionafp.pe/" class="sidebar-link collapsed"> <span>Página principal </span>
          </a>
        </li>
        <li class="sidebar-item active-no">
          <a href="#AffiliatesContributors" data-toggle="collapse" class="sidebar-link collapsed"> <span>Afiliados y cotizantes </span>
          </a>
          <ul id="AffiliatesContributors" class="sidebar-dropdown list-unstyled collapse">
            <li :class="(this.$router.currentRoute.path == '/ActiveAffiliatesAccordingAfp' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/ActiveAffiliatesAccordingAfp" tag="link" class="sidebar-link">Afiliados activos</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/NewAffiliatesTypeWorker' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/NewAffiliatesTypeWorker" tag="link" class="sidebar-link">Nuevos afiliados por tipo de trabajador</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/ActiveContributorsAccordingAfp' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/ActiveContributorsAccordingAfp" tag="link" class="sidebar-link">Cotizantes activos</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/ContributorsPea' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/ContributorsPea" tag="link" class="sidebar-link">Afiliados, cotizantes y PEA</router-link>
            </li>
          </ul>
        </li>
        <li class="sidebar-item">
          <a href="#Pensions" data-toggle="collapse" class="sidebar-link collapsed"> <span>Pensiones </span>
          </a>
          <ul id="Pensions" class="sidebar-dropdown list-unstyled collapse">
            <li :class="(this.$router.currentRoute.path == '/PensionersSpp' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/PensionersSpp" tag="link" class="sidebar-link">Pensionistas del SPP</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/PensionersPensionSystem' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/PensionersPensionSystem" tag="link" class="sidebar-link">Pensionistas por sistema de pensiones</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/AveragePensionBenefitType' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/AveragePensionBenefitType" tag="link" class="sidebar-link">Pensión promedio por tipo de beneficio</router-link>
            </li>
          </ul>
        </li>
        <li class="sidebar-item">
          <a href="#Investments" data-toggle="collapse" class="sidebar-link collapsed"> <span>Inversiones </span>
          </a>
          <ul id="Investments" class="sidebar-dropdown list-unstyled collapse">
            <li :class="(this.$router.currentRoute.path == '/ManagedPortfolio' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/ManagedPortfolio" tag="link" class="sidebar-link">Cartera administrada</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/InvestmentLimits' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/InvestmentLimits" tag="link" class="sidebar-link">Límites de inversión</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/PortfolioByEconomicSector' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/PortfolioByEconomicSector" tag="link" class="sidebar-link">Cartera por sector económico</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/InvestmentInfrastructure' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/InvestmentInfrastructure" tag="link" class="sidebar-link">Inversión en infraestructura</router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/FundEvolution" tag="link" class="sidebar-link">Evolución del fondo</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/ApvWithPensionPurpose' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/ApvWithPensionPurpose" tag="link" class="sidebar-link">Aportes voluntarios con fin previsional</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/ApvWithOutPensionEnd' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/ApvWithOutPensionEnd" tag="link" class="sidebar-link">Aportes voluntarios sin fin previsional</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/CostEffectiveness' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/CostEffectiveness" tag="link" class="sidebar-link">Rentabilidad</router-link>
            </li>
          </ul>
        </li>
        <li class="sidebar-item">
          <a href="#CommissionsBonuses" data-toggle="collapse" class="sidebar-link collapsed"> <span>Comisiones y primas </span>
          </a>
          <ul id="CommissionsBonuses" class="sidebar-dropdown list-unstyled collapse">
            <li :class="(this.$router.currentRoute.path == '/CommissionOnFlow' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/CommissionOnFlow" tag="link" class="sidebar-link">Comisión sobre flujo</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/MixedCommission' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/MixedCommission" tag="link" class="sidebar-link">Comisión mixta</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/InsurancePremiumRateNumberFirst' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/InsurancePremiumRateNumberFirst" tag="link" class="sidebar-link">Prima de seguro, tasa de aporte y aportes por año</router-link>
            </li>
            <li :class="(this.$router.currentRoute.path == '/InsurancePremiumRateNumberSecond' ? 'sidebar-item active' : 'sidebar-item')">
              <router-link to="/InsurancePremiumRateNumberSecond" tag="link" class="sidebar-link">Comisiones por aportes voluntarios</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- div class="sidebar-bottom d-none d-lg-block">
        <div class="media">
          <div class="media-body">
            <h5 class="mb-1">{{name}}</h5>
            <div>
              <i class="fas fa-circle text-success"></i> Online
            </div>
          </div>
        </div>
      </div -->
    </div>
  </nav>
</template>

<script>
import {getName, authLogout} from '@/utils/auth';
import logo_directores from '../../src/assets/logo_directores.png';
export default {
  name: 'Sidebar',
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
    $(document).on('click', '.sidebar .sidebar-nav .sidebar-dropdown .sidebar-item', function() {
      $('.sidebar .sidebar-nav .sidebar-dropdown .sidebar-item').removeClass('active');
      $(this).addClass('active');
    });
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
    text-align: center;
  }

  .sidebar-brand h2 {
    color: #fff;
    margin-bottom: 0;
    text-align: center;
  }
</style>