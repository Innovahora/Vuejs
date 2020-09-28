<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <form class="form" @submit.prevent="getCommissionOnFlow">
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
        <div class="row">
          <div class="col-md-6">
            <GraphicCommissionOnFlow :options="options_type.year"></GraphicCommissionOnFlow>
          </div>
          <div class="col-md-6 text-no-capitalize">
            <GraphicCommissionOnFlow :options="options_type.month"></GraphicCommissionOnFlow>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <br>
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
                  <div class="tab tab-style-a">
                    <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item"><a class="nav-link active" href="#tab-year-flow" data-toggle="tab" role="tab">Comisión sobre flujo</a></li>
                      <li class="nav-item"><a class="nav-link" href="#tab-year-fixed" data-toggle="tab" role="tab">Comisión fija</a></li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane active" id="tab-year-flow" role="tabpanel">
                        <div class="row">
                          <div class="col-md-12 text-right">
                            <ButtonExportToExcelCommissionOnFlow :options="options_button_export.year"></ButtonExportToExcelCommissionOnFlow>
                            <br>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="table-responsive">
                              <TableCommissionOnFlow :options="options_table.year"></TableCommissionOnFlow>
                            </div>
                            <div><b>A partir de Enero de 1997 se eliminó el cobro de comisión fija.</b></div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="tab-year-fixed" role="tabpanel">
                        <div class="row">
                          <div class="col-md-12 text-right">
                            <ButtonExportToExcelCommissionOnFlow :options="options_button_export.year_fixed"></ButtonExportToExcelCommissionOnFlow>
                            <br>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="table-responsive">
                              <TableCommissionOnFlow :options="options_table.year_fixed"></TableCommissionOnFlow>
                            </div>
                            <div><b>A partir de Enero de 1997 se eliminó el cobro de comisión fija.</b></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-month" role="tabpanel">
                  <div class="tab tab-style-a">
                    <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item"><a class="nav-link active" href="#tab-month-flow" data-toggle="tab" role="tab">Comisión sobre flujo</a></li>
                      <li class="nav-item"><a class="nav-link" href="#tab-month-fixed" data-toggle="tab" role="tab">Comisión fija</a></li>
                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane active" id="tab-month-flow" role="tabpanel">
                        <div class="row">
                          <div class="col-md-12 text-right">
                            <ButtonExportToExcelCommissionOnFlow :options="options_button_export.month"></ButtonExportToExcelCommissionOnFlow>
                            <br>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="table-responsive">
                              <TableCommissionOnFlow :options="options_table.month"></TableCommissionOnFlow>
                            </div>
                            <div><b>A partir de Enero de 1997 se eliminó el cobro de comisión fija.</b></div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="tab-month-fixed" role="tabpanel">
                        <div class="row">
                          <div class="col-md-12 text-right">
                            <ButtonExportToExcelCommissionOnFlow :options="options_button_export.month_fixed"></ButtonExportToExcelCommissionOnFlow>
                            <br>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="table-responsive">
                              <TableCommissionOnFlow :options="options_table.month_fixed"></TableCommissionOnFlow>
                            </div>
                            <div><b>A partir de Enero de 1997 se eliminó el cobro de comisión fija.</b></div>
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
import ButtonExportToExcelCommissionOnFlow from '@/components/commissionsBonuses/commissionOnFlow/buttonExportToExcelCommissionOnFlow';
import TableCommissionOnFlow from '@/components/commissionsBonuses/commissionOnFlow/tableCommissionOnFlow';
import GraphicCommissionOnFlow from '@/components/commissionsBonuses/commissionOnFlow/graphicCommissionOnFlow';
import Toastr from 'toastr';
export default {
  name: 'commissionOnFlow',
  components: {
    SearchContentHeader,
    ButtonExportToExcelCommissionOnFlow,
    TableCommissionOnFlow,
    GraphicCommissionOnFlow
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
          start_date: '1993-06',
          end_date: ''+y+'-'+(m<10?'0':'')+m+'-'+last_day
        },
        date_picker: {
          minDate: '1993-01-01'
        }
      },
      options_type: {
        year: {
          type: 'year'
        },
        month: {
          type: 'month'
        }
      },
      options_table: {
        year: {
          period: 'year'
        },
        month: {
          period: 'month'
        },
        year_fixed: {
          period: 'year_fixed'
        },
        month_fixed: {
          period: 'month_fixed'
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
        },
        month_fixed: {
          period: 'month_fixed',
          props: {
            name: 'Exportar a excel'
          },
          query: {
            start_date: '',
            end_date: ''
          }
        },
        year_fixed: {
          period: 'year_fixed',
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
    getCommissionOnFlow() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataCommissionOnFlow', payload);
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
    this.getCommissionOnFlow();
  },
  mounted() {
    this.setExportToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getCommissionOnFlow':
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