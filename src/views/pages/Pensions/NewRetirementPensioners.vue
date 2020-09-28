<template>
  <div>
      <div class="row">
          <div class="col-12">
          <h1 class="h3 mb-3" align="center">Pensionistas por sistema de jubilación</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Filtrar por rango de fechas</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <form class="form" @submit.prevent="getNewRetirementPensioners">
                    <SearchContentHeader :options="options"></SearchContentHeader>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title mb-0">Nuevos pensionistas de jubilación</h5>
            </div>
            <div class="card-body">
              <div class="row" v-show="!event_change.loading_get">
                <div class="col-md-12">
                  <p class="text-center">
                    <span :class="spinner.class"></span>
                  </p>
                </div>
              </div>
              <div class="row" v-show="event_change.loading_get">
                <div class="col-md-12">
                  <!-- div class="row">
                    <div class="col-md-12">
                      <GraphicNewRetirementPensionersPerMonth></GraphicNewRetirementPensionersPerMonth>
                    </div>
                  </div -->
                  <div class="row">
                    <div class="col-md-12">
                      <GraphicNewRetirementPensionersPerYear></GraphicNewRetirementPensionersPerYear>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <br>
                    </div>
                  </div>
                  <!-- div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableNewRetirementPensioners></TableNewRetirementPensioners>
                      </div>
                    </div>
                  </div -->
                  <div class="row">
                    <div class="col-md-12">
                      <div class="tab tab-style-a">
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item"><a class="nav-link active" href="#tab-year" data-toggle="tab" role="tab">Anual</a></li>
                          <li class="nav-item"><a class="nav-link" href="#tab-month" data-toggle="tab" role="tab">Mensual</a></li>
                        </ul>
                        <div class="tab-content">
                          <div class="tab-pane active" id="tab-year" role="tabpanel">
                            <!-- <h4 class="tab-title">Anual</h4> -->
                            <div class="row">
                              <div class="col-md-12 text-right">
                                <ButtonExportToExcelNewRetirementPensioners :options="options_button_export.year"></ButtonExportToExcelNewRetirementPensioners>
                                <br>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                <div class="table-responsive">
                                  <TableNewRetirementPensioners :options="options_table.year"></TableNewRetirementPensioners>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab-month" role="tabpanel">
                            <!-- <h4 class="tab-title">Mensual</h4> -->
                            <div class="row">
                              <div class="col-md-12 text-right">
                                <ButtonExportToExcelNewRetirementPensioners :options="options_button_export.month"></ButtonExportToExcelNewRetirementPensioners>
                                <br>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                <div class="table-responsive">
                                  <TableNewRetirementPensioners :options="options_table.month"></TableNewRetirementPensioners>
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
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import SearchContentHeader from '@/components/utils/forms/searchContentHeader';
import ButtonExportToExcelNewRetirementPensioners from '@/components/pensions/newRetirementPensioners/buttonExportToExcelNewRetirementPensioners';
import TableNewRetirementPensioners from '@/components/pensions/newRetirementPensioners/tableNewRetirementPensioners';
import GraphicNewRetirementPensionersPerMonth from '@/components/pensions/newRetirementPensioners/graphicNewRetirementPensionersPerMonth';
import GraphicNewRetirementPensionersPerYear from '@/components/pensions/newRetirementPensioners/graphicNewRetirementPensionersPerYear';
import Toastr from 'toastr';
export default {
  name: 'newRetirementPensioners',
  components: {
    SearchContentHeader,
    ButtonExportToExcelNewRetirementPensioners,
    TableNewRetirementPensioners,
    GraphicNewRetirementPensionersPerMonth,
    GraphicNewRetirementPensionersPerYear
  },
  data () {
    return {
      options: {
        query: {
          start_date: '',
          end_date: ''
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
      }
    }
  },
  methods: {
    initTable() {
    },
    getNewRetirementPensioners() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;
      
      let payload = this.options.query;
      this.$store.dispatch('getDataNewRetirementPensioners', payload);
    },
    setExportMonthToExcel() {
      this.options_button_export.month.query = this.options.query;
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
    this.getNewRetirementPensioners();
  },
  mounted() {
    this.setExportMonthToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getNewRetirementPensioners':
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