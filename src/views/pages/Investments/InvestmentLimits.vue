<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <form class="form" @submit.prevent="getInvestmentLimits">
          <SearchContentHeader :options="options"></SearchContentHeader>
        </form>
      </div>
    </div>
    <div class="row" v-show="!event_change.loading_get">
      <div class="col-md-12">
        <p class="text-center">
          <span :class="spinner.class"></span>
        </p>
      </div>
    </div>
    <div class="row" v-show="event_change.loading_get">
      <div class="col-md-12">
        <!--
        <div class="row">
          <div class="col-md-4 pr-0">
            <h4 class="title-both-pie">{{ options_type.month.data.title }}</h4>
          </div>
        </div>
        -->
        <div class="row">
          <div class="col-sm-12 offset-sm-0 col-md-8 offset-md-2 col-xl-4 offset-xl-0">
            <div class="card">
              <div class="card-body" data-section="sectionGraphic">
                <div class="row">
                  <div class="col-md-12">
                    <h4 class="title-both-pie">Inversión según origen</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <GraphicInvestmentLimitsEvolutionInside :options="options_type.year"></GraphicInvestmentLimitsEvolutionInside>
                  </div>
                  <div class="col-md-6">
                    <GraphicInvestmentLimitsEvolutionInside :options="options_type.month"></GraphicInvestmentLimitsEvolutionInside>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 offset-sm-0 col-md-8 offset-md-2 col-xl-8 offset-xl-0 mt-3">
            <GraphicInvestmentLimitsEvolutionAbroad></GraphicInvestmentLimitsEvolutionAbroad>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="tab tab-style-a">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item"><a class="nav-link active" href="#tab-year" data-toggle="tab" role="tab">Anual</a></li>
                <li class="nav-item"><a class="nav-link" href="#tab-month" data-toggle="tab" role="tab">Mensual</a></li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="tab-year" role="tabpanel">
                  <div class="row">
                    <div class="col-md-12 text-right">
                      <ButtonExportToExcelInvestmentLimits :options="options_button_export.year"></ButtonExportToExcelInvestmentLimits>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableInvestmentLimits :options="options_table.year"></TableInvestmentLimits>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-month" role="tabpanel">
                  <div class="row">
                    <div class="col-md-12 text-right">
                      <ButtonExportToExcelInvestmentLimits :options="options_button_export.month"></ButtonExportToExcelInvestmentLimits>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableInvestmentLimits :options="options_table.month"></TableInvestmentLimits>
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
import ButtonExportToExcelInvestmentLimits from '@/components/investments/investmentLimits/buttonExportToExcelInvestmentLimits';
import TableInvestmentLimits from '@/components/investments/investmentLimits/tableInvestmentLimits';
import GraphicInvestmentLimitsEvolutionInside from '@/components/investments/investmentLimits/graphicInvestmentLimitsEvolutionInside';
import GraphicInvestmentLimitsEvolutionAbroad from '@/components/investments/investmentLimits/graphicInvestmentLimitsEvolutionAbroad';
import Toastr from 'toastr';
export default {
  name: 'investmentLimits',
  components: {
    SearchContentHeader,
    ButtonExportToExcelInvestmentLimits,
    TableInvestmentLimits,
    GraphicInvestmentLimitsEvolutionInside,
    GraphicInvestmentLimitsEvolutionAbroad
  },
  data () {
    let date = new Date();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let last_day_date = new Date(y, m, 0);
    let last_day = last_day_date.getDate();
    return {
      options: {
        query: {
          start_date: '2000-04',
          end_date: ''+y+'-'+(m<10?'0':'')+m+'-'+last_day,
        },
        date_picker: {
          minDate: '2000-01-01'
        }
      },
      options_type: {
        year: {
          type: 'year'
        },
        month: {
          type: 'month',
          data: {
            title: 'Inversión según origen'
          }
        }
      },
      options_table: {
        year: {
          period: 'year'
        },
        month: {
          period: 'month'
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
        loading_get: false
      },
      spinner: {
        class: 'spinner-border'
      },
    }
  },
  methods: {
    initTable() {
    },
    getInvestmentLimits() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataInvestmentLimits', payload);
    },
    setExportToExcel() {
      this.options_button_export.month.query = this.options.query;
      this.options_button_export.year.query = this.options.query;
    }
  },
  computed: {
    ...mapGetters({
      event_error_watch: 'eventErrorWatch'
    }),
    ...mapState({
      eventErrorWatch: state => state.event_error_watch
    })
  },
  created() {
    this.getInvestmentLimits();
  },
  mounted() {
    this.setExportToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getInvestmentLimits':
          this.spinner.class = 'fa fa-low-vision';
          Toastr.error('El rango definido es muy amplio');
        break;

        default:
          this.event_change.loading_get = true;
      }
    }
  }
}
</script>

<style>
  [data-section="sectionGraphic"] .highcharts-container, [data-section="sectionGraphic"].card-body {
    border: 0;
  }
</style>