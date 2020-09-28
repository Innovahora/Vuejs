<template>
  <div>
      
    <div class="row">
      <div class="col-md-12">
        <form class="form" @submit.prevent="getActiveAffiliatesAccordingAfp">
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
          <div class="col-md-4">
            <GraphicHistoricalActiveAffiliates></GraphicHistoricalActiveAffiliates>
          </div>
          <div class="col-md-8">
            <GraphicHistoricalActiveNumberAffiliatesLastYear></GraphicHistoricalActiveNumberAffiliatesLastYear>
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
                  <!-- <h4 class="tab-title">Anual</h4> -->
                  <div class="row">
                    <div class="col-md-12 text-right">
                      <ButtonExportToExcelHistoricalActiveAffiliates :options="options_button_export.year"></ButtonExportToExcelHistoricalActiveAffiliates>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableHistoricalActiveAffiliates :options="options_table.year"></TableHistoricalActiveAffiliates>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-month" role="tabpanel">
                  <!-- <h4 class="tab-title">Mensual</h4> -->
                  <div class="row">
                    <div class="col-md-12 text-right">
                      <!-- <a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">Exportar a excel</a> -->
                      <ButtonExportToExcelHistoricalActiveAffiliates :options="options_button_export.month"></ButtonExportToExcelHistoricalActiveAffiliates>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableHistoricalActiveAffiliates :options="options_table.month"></TableHistoricalActiveAffiliates>
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
import ButtonExportToExcelHistoricalActiveAffiliates from '@/components/affiliatesContributors/activeAffiliatesAccordingAfp/buttonExportToExcelHistoricalActiveAffiliates';
import TableHistoricalActiveAffiliates from '@/components/affiliatesContributors/activeAffiliatesAccordingAfp/tableHistoricalActiveAffiliates';
import GraphicHistoricalActiveAffiliates from '@/components/affiliatesContributors/activeAffiliatesAccordingAfp/graphicHistoricalActiveAffiliates';
// import GraphicHistoricalActiveNumberAffiliates from '@/components/affiliatesContributors/activeAffiliatesAccordingAfp/graphicHistoricalActiveNumberAffiliates';
import GraphicHistoricalActiveNumberAffiliatesLastYear from '@/components/affiliatesContributors/activeAffiliatesAccordingAfp/graphicHistoricalActiveNumberAffiliatesLastYear';
import Toastr from 'toastr';
export default {
  name: 'activeAffiliatesAccordingAfp',
  components: {
    SearchContentHeader,
    ButtonExportToExcelHistoricalActiveAffiliates,
    TableHistoricalActiveAffiliates,
    GraphicHistoricalActiveAffiliates,
    // GraphicHistoricalActiveNumberAffiliates,
    GraphicHistoricalActiveNumberAffiliatesLastYear
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
      }/* ,
      actions: {
        export_month_to_excel: '/AffiliatesContributors/ActiveAffiliatesAccordingAfp/export'
      } */
    }
  },
  methods: {
    initTable() {
    },
    getActiveAffiliatesAccordingAfp() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataActiveAffiliatesAccordingAfp', payload);
    },
    setExportToExcel() {
      this.options_button_export.month.query = this.options.query;
      this.options_button_export.year.query = this.options.query;
    }
    /* exportMonthToExcel() {
      this.actions.export_month_to_excel += '?start_date='+this.options.query.start_date+'&end_date='+this.options.query.end_date;
      window.open(this.actions.export_month_to_excel, '_blank');
    } */
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
    this.getActiveAffiliatesAccordingAfp();
  },
  mounted() {
    this.setExportToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getActiveAffiliatesAccordingAfp':
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