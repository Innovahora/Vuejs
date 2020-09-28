<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <form class="form" @submit.prevent="getPortfolioByEconomicSectorRender">
          <SearchContentHeader :options="options"></SearchContentHeader>
        </form>
      </div>
    </div>
    <div class="row" v-show="!event_change.loading_get || !event_change.empty_data">
      <div class="col-md-12">
        <p class="text-center">
          <span :class="spinner.class"></span><span v-if="spinner.text != ''"> {{ spinner.text }}</span>
        </p>
      </div>
    </div>
    <div class="row" v-show="event_change.loading_get">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <GraphicPortfolioByEconomicFund></GraphicPortfolioByEconomicFund>
          </div>
          <div class="col-md-6">
              <GraphicPortfolioByEconomicSector></GraphicPortfolioByEconomicSector>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 text-right">
                <ButtonExportToExcelPortfolioByEconomicSector :options="options_button_export.year"></ButtonExportToExcelPortfolioByEconomicSector>
                <br>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <TablePortfolioByEconomicSector></TablePortfolioByEconomicSector>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import SearchContentHeader from '@/components/utils/forms/searchContentHeader';
import ButtonExportToExcelPortfolioByEconomicSector from '@/components/investments/portfolioByEconomicSector/buttonExportToExcelPortfolioByEconomicSector';
import TablePortfolioByEconomicSector from '@/components/investments/portfolioByEconomicSector/tablePortfolioByEconomicSector';
import GraphicPortfolioByEconomicFund from '@/components/investments/portfolioByEconomicSector/graphicPortfolioByEconomicFund';
import GraphicPortfolioByEconomicSector from '@/components/investments/portfolioByEconomicSector/graphicPortfolioByEconomicSector';
import Toastr from 'toastr';
export default {
  name: 'portfolioByEconomicSector',
  components: {
    SearchContentHeader,
    ButtonExportToExcelPortfolioByEconomicSector,
    TablePortfolioByEconomicSector,
    GraphicPortfolioByEconomicFund,
    GraphicPortfolioByEconomicSector
  },
  data () {
    return {
      first: 0,
      options: {
        query: {
          start_date: '',
          end_date: ''
        },
        date_picker: {
          format: 'YYYY-MM',
          minDate: '2010-01-01'
        },
        tab: {
          period: 'month'
        },
        button: {
          visibility: {
            start_date: true,
            end_date: false
          }
        }
      },
      options_button_export: {
        year: {
          period: 'year',
          props: {
            name: 'Exportar a excel'
          },
          query: {
            start_date: '',
            end_date: ''
          }
        },
        month: {
          period: 'month',
          props: {
            name: 'Exportar a excel'
          },
          query: {
            start_date: '',
            end_date: ''
          }
        }
      },
      event_change: {
        loading_get: false,
        empty_data: false
      },
      spinner: {
        class: 'spinner-border',
        text: ''
      }
    }
  },
  methods: {
    initTable() {
    },
    getPortfolioByEconomicSectorRender() {
      this.spinner.class = 'spinner-border';
      this.spinner.text = '';
      this.event_change.loading_get = false;
      this.event_change.empty_data = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataPortfolioByEconomicSector', payload);
    },
    setExportToExcel() {
      this.options_button_export.month.query = this.options.query;
      this.options_button_export.year.query = this.options.query;
    }
  },
  computed: {
    ...mapGetters({
      event_error_watch: 'eventErrorWatch',
      get_portfolio_by_economic_sector: 'getPortfolioByEconomicSector',
      event_watch_portfolio_by_economic_sector: 'eventWatchPortfolioByEconomicSector'
    }),
    ...mapState({
      eventErrorWatch: state => state.event_error_watch,
      getPortfolioByEconomicSector: state => state.get_portfolio_by_economic_sector,
      eventWatchPortfolioByEconomicSector: state => state.event_watch_portfolio_by_economic_sector
    })
  },
  created() {
    this.getPortfolioByEconomicSectorRender();
  },
  mounted() {
    this.setExportToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getPortfolioByEconomicSector':
          this.spinner.class = 'fa fa-low-vision';
          this.spinner.text = '';
          Toastr.error('El rango definido es muy amplio');
        break;

        case 'emptyData':
          this.spinner.class = 'fa fa-info-circle';
          this.spinner.text = 'No se encontro información para la fecha solicitada...';
        break;

        default:
          this.event_change.loading_get = true;
          this.event_change.empty_data = true;
      }
    },
    event_watch_portfolio_by_economic_sector() {
      let self = this;
      switch(self.event_watch_portfolio_by_economic_sector) {
        case 'get':
          if(this.first==0){
            this.options.query.start_date = ''+self.get_portfolio_by_economic_sector.max_date;
            this.first = 1;
          }
        break;
      }
    }
  }
}
</script>