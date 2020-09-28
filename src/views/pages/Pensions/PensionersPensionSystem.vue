<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <form class="form" @submit.prevent="getPensionersPensionSystem">
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
          <div class="col-lg-3 col-md-12 pr-1">
            <GraphicPensionersPensionSystemLastYear></GraphicPensionersPensionSystemLastYear>
          </div>
          <div class="col-lg-9 col-md-12">
            <div class="row">
              <div class="col-lg-6 col-md-12 px-0">
                <GraphicPensionersPensionSystem :options="options_type.normal"></GraphicPensionersPensionSystem>
              </div>
              <div class="col-lg-6 col-md-12 pl-1">
                <GraphicPensionersPensionSystem :options="options_type.percent"></GraphicPensionersPensionSystem>
              </div>
            </div>
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
                <div class="table-responsive">
                  <ButtonExportToExcelPensionersPensionSystem :options="options_button_export.year"></ButtonExportToExcelPensionersPensionSystem>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <TablePensionersPensionSystem :options="options_table.year"></TablePensionersPensionSystem>
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
import ButtonExportToExcelPensionersPensionSystem from '@/components/pensions/pensionersPensionSystem/buttonExportToExcelPensionersPensionSystem';
import TablePensionersPensionSystem from '@/components/pensions/pensionersPensionSystem/tablePensionersPensionSystem';
import GraphicPensionersPensionSystem from '@/components/pensions/pensionersPensionSystem/graphicPensionersPensionSystem';
import GraphicPensionersPensionSystemLastYear from '@/components/pensions/pensionersPensionSystem/graphicPensionersPensionSystemLastYear';
import Toastr from 'toastr';
export default {
  name: 'pensionersPensionSystem',
  components: {
    SearchContentHeader,
    ButtonExportToExcelPensionersPensionSystem,
    TablePensionersPensionSystem,
    GraphicPensionersPensionSystem,
    GraphicPensionersPensionSystemLastYear
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
          start_date: '2001-01',
          end_date: ''+y+'-'+(m<10?'0':'')+m+'-'+last_day,
        },
        tab: {
          period: 'year'
        },
        date_picker: {
          minDate: '2001-01-01'
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
      options_type: {
        normal: {
          type: 'normal'
        },
        percent: {
          type: 'percent'
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
    getPensionersPensionSystem() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataPensionersPensionSystem', payload);
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
    this.getPensionersPensionSystem();
  },
  mounted() {
    this.setExportToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getPensionersPensionSystem':
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