<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <form class="form" @submit.prevent="getInsurancePremiumRateNumberFirst">
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
            <GraphicInsurancePremiumRateNumberFirst :options="options_type.year"></GraphicInsurancePremiumRateNumberFirst>
          </div>
          <div class="col-md-6">
            <GraphicInsurancePremiumRateNumberFirst :options="options_type.month"></GraphicInsurancePremiumRateNumberFirst>
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
                  <div class="row">
                    <div class="col-md-12 text-right">
                      <ButtonExportToExcelInsurancePremiumRateNumberFirst :options="options_button_export.year"></ButtonExportToExcelInsurancePremiumRateNumberFirst>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableInsurancePremiumRateNumberFirst :options="options_table.year"></TableInsurancePremiumRateNumberFirst>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-month" role="tabpanel">
                  <div class="row">
                    <div class="col-md-12 text-right">
                      <ButtonExportToExcelInsurancePremiumRateNumberFirst :options="options_button_export.month"></ButtonExportToExcelInsurancePremiumRateNumberFirst>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableInsurancePremiumRateNumberFirst :options="options_table.month"></TableInsurancePremiumRateNumberFirst>
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
import ButtonExportToExcelInsurancePremiumRateNumberFirst from '@/components/commissionsBonuses/insurancePremiumRateNumberFirst/buttonExportToExcelInsurancePremiumRateNumberFirst';
import TableInsurancePremiumRateNumberFirst from '@/components/commissionsBonuses/insurancePremiumRateNumberFirst/tableInsurancePremiumRateNumberFirst';
import GraphicInsurancePremiumRateNumberFirst from '@/components/commissionsBonuses/insurancePremiumRateNumberFirst/graphicInsurancePremiumRateNumberFirst';
import Toastr from 'toastr';
export default {
  name: 'insurancePremiumRateNumberFirst',
  components: {
    SearchContentHeader,
    ButtonExportToExcelInsurancePremiumRateNumberFirst,
    TableInsurancePremiumRateNumberFirst,
    GraphicInsurancePremiumRateNumberFirst
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
          end_date: ''+y+'-'+(m<10?'0':'')+m+'-'+last_day,
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
    getInsurancePremiumRateNumberFirst() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataInsurancePremiumRateNumberFirst', payload);
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
    this.getInsurancePremiumRateNumberFirst();
  },
  mounted() {
    this.setExportToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getInsurancePremiumRateNumberFirst':
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