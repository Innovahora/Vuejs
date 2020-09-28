<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <form class="form" @submit.prevent="getCostEffectivenessRender">
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
          <div class="col-md-12">
            <GraphicCostEffectivenessAnnualizedNominalReturnByFundType></GraphicCostEffectivenessAnnualizedNominalReturnByFundType>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-12 text-right">
                        <ButtonExportToExcelCostEffectivenessAnnualizedNominalReturnByFundType :options="options_button_export.year"></ButtonExportToExcelCostEffectivenessAnnualizedNominalReturnByFundType>
                        <br>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="table-responsive">
                          <TableCostEffectivenessAnnualizedNominalReturnByFundType></TableCostEffectivenessAnnualizedNominalReturnByFundType>
                        </div>
                        <div v-if="false"><b>Fecha de inicio: {{options.query.start_date}}</b></div>
                        <div class="text-muted">Fecha de inicio de cada fondo:<br>- En agosto de 1993 inicia el Fondo 2<br>- En enero del 2006 inician el Fondo 1 y Fondo 3<br>- En abril del 2016 inicia el Fondo 0</div>
                      </div>
                    </div>
                  </div>
                </div>
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
import ButtonExportToExcelCostEffectivenessAnnualizedNominalReturnByFundType from '@/components/investments/costEffectiveness/buttonExportToExcelCostEffectivenessAnnualizedNominalReturnByFundType';
import TableCostEffectivenessAnnualizedNominalReturnByFundType from '@/components/investments/costEffectiveness/tableCostEffectivenessAnnualizedNominalReturnByFundType';
import GraphicCostEffectivenessAnnualizedNominalReturnByFundType from '@/components/investments/costEffectiveness/graphicCostEffectivenessAnnualizedNominalReturnByFundType';
import Toastr from 'toastr';
export default {
  name: 'costEffectiveness',
  components: {
    SearchContentHeader,
    ButtonExportToExcelCostEffectivenessAnnualizedNominalReturnByFundType,
    TableCostEffectivenessAnnualizedNominalReturnByFundType,
    GraphicCostEffectivenessAnnualizedNominalReturnByFundType
  },
  data () {
    let date = new Date();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    return {
      first: 0,
      options: {
        query: {
          //start_date: ''+y+'-'+(m<10?'0':'')+m,
          start_date: '',
          end_date: ''
        },
        date_picker: {
          format: 'YYYY-MM',
          minDate: '1996-01-01'
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
    getCostEffectivenessRender() {
      this.spinner.class = 'spinner-border';
      this.spinner.text = '';
      this.event_change.loading_get = false;
      this.event_change.empty_data = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataCostEffectiveness', payload);
    },
    setExportToExcel() {
      this.options_button_export.month.query = this.options.query;
      this.options_button_export.year.query = this.options.query;
    }
  },
  computed: {
    ...mapGetters({
      event_error_watch: 'eventErrorWatch',
      get_cost_effectiveness: 'getCostEffectiveness',
      event_watch_cost_effectiveness: 'eventWatchCostEffectiveness'
    }),
    ...mapState({
      eventErrorWatch: state => state.event_error_watch,
      getCostEffectiveness: state => state.get_cost_effectiveness,
      eventWatchCostEffectiveness: state => state.event_watch_cost_effectiveness
    })
  },
  created() {
    this.getCostEffectivenessRender();
  },
  mounted() {
    this.setExportToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getCostEffectiveness':
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
    event_watch_cost_effectiveness() {
      switch(this.event_watch_cost_effectiveness) {
        case 'get':
          if(this.first==0){
            this.options.query.start_date = ''+this.get_cost_effectiveness.max_date;
            this.first = 1;
          }
        break;
      }
    }
  }
}
</script>