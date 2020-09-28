<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <form class="form" @submit.prevent="getActiveContributorsAccordingAfp">
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
            <GraphicActiveContributors></GraphicActiveContributors>
          </div>
          <div class="col-md-8">
            <!-- <GraphicActiveNumberContributors></GraphicActiveNumberContributors> -->
            <GraphicActiveNumberContributorsLastYear></GraphicActiveNumberContributorsLastYear>
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
                      <ButtonExportToExcelActiveContributors :options="options_button_export.year"></ButtonExportToExcelActiveContributors>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableActiveContributors :options="options_table.year"></TableActiveContributors>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-month" role="tabpanel">
                  <!-- <h4 class="tab-title">Mensual</h4> -->
                  <div class="row">
                    <div class="col-md-12 text-right">
                      <ButtonExportToExcelActiveContributors :options="options_button_export.month"></ButtonExportToExcelActiveContributors>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableActiveContributors :options="options_table.month"></TableActiveContributors>
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
import ButtonExportToExcelActiveContributors from '@/components/affiliatesContributors/activeContributorsAccordingAfp/buttonExportToExcelActiveContributors';
import TableActiveContributors from '@/components/affiliatesContributors/activeContributorsAccordingAfp/tableActiveContributors';
import GraphicActiveContributors from '@/components/affiliatesContributors/activeContributorsAccordingAfp/graphicActiveContributors';
// import GraphicActiveNumberContributors from '@/components/affiliatesContributors/activeContributorsAccordingAfp/graphicActiveNumberContributors';
import GraphicActiveNumberContributorsLastYear from '@/components/affiliatesContributors/activeContributorsAccordingAfp/graphicActiveNumberContributorsLastYear';
import Toastr from 'toastr';
export default {
  name: 'activeContributorsAccordingAfp',
  components: {
    SearchContentHeader,
    ButtonExportToExcelActiveContributors,
    TableActiveContributors,
    GraphicActiveContributors,
    // GraphicActiveNumberContributors,
    GraphicActiveNumberContributorsLastYear
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
          start_date: '1998-01',
          end_date: ''+y+'-'+(m<10?'0':'')+m+'-'+last_day,
        },
        date_picker: {
          minDate: '1998-01-01'
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
    getActiveContributorsAccordingAfp() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataActiveContributorsAccordingAfp', payload);
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
    this.getActiveContributorsAccordingAfp();
  },
  mounted() {
    this.setExportToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getActiveContributorsAccordingAfp':
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