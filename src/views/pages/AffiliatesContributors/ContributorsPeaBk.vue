<template>
  <div>
    <div class="row">
        <div class="col-12">
        <h1 class="h3 mb-3" align="center">Afiliados y cotizantes con respecto a PEA</h1>
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
        <div class="row" v-for="(value, index) in options_table_active_contributors_month" :key="index">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">{{ value.title }}</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <GraphicActiveContributorsMonth :options="value.contributors"></GraphicActiveContributorsMonth>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <br>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="table-responsive">
                      <TableActiveContributorsMonth :options="value.historical"></TableActiveContributorsMonth>
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
import TableActiveContributorsMonth from '@/components/affiliatesContributors/contributorsPea/tableActiveContributorsMonth';
import GraphicActiveContributorsMonth from '@/components/affiliatesContributors/contributorsPea/graphicActiveContributorsMonth';
import Toastr from 'toastr';
export default {
  name: 'contributorsPea',
  components: {
    TableActiveContributorsMonth,
    GraphicActiveContributorsMonth
  },
  data () {
    return {
      /* {
        [{
        }],
        [{
        }]
      }
      [
        [{
        }
        {
        }]
      ] */
      options: {
        query: {
          start_date: '',
          end_date: ''
        }
      },
      options_table_active_contributors_month: [/*{
        id: 1,
        title: 'Cotizantes activos diciembre 2017',
        contributors: {
          chart: {
            title: {
              text: 'Cotizantes / PEA Diciembre 2017'
            },
            tooltip: {
              pointFormat: {
                year: 2017
              }
            },
            series: {
              data: [
                ['Integra', 5.4],
                ['Profuturo', 2.0],
                ['Prima', 4.1],
                ['Habitat', 4.2],
                ['SPP', 15.7]
              ]
            }
          }
        },
        historical: [{
          afp: 'Integra',
          affiliates: 2005476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 5.4
        },
        {
          afp: 'Profuturo',
          affiliates: 1805476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 4.2
        },
        {
          afp: 'Prima',
          affiliates: 1605476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 4.1
        },
        {
          afp: 'Habitat',
          affiliates: 1405476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 2.0
        },
        {
          afp: 'SPP',
          affiliates: 1105476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 15.7
        }]
      },
      {
        id: 2,
        title: 'Cotizantes activos diciembre 2018',
        contributors: {
          chart: {
            title: {
              text: 'Cotizantes / PEA Diciembre 2018'
            },
            tooltip: {
              pointFormat: {
                year: 2018
              }
            },
            series: {
              data: [
                ['Integra', 4.9],
                ['Profuturo', 3.7],
                ['Prima', 3.8],
                ['Habitat', 2.9],
                ['SPP', 15.3]
              ]
            }
          }
        },
        historical: [{
          afp: 'Integra',
          affiliates: 2005476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 5.4
        },
        {
          afp: 'Profuturo',
          affiliates: 1805476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 4.2
        },
        {
          afp: 'Prima',
          affiliates: 1605476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 4.1
        },
        {
          afp: 'Habitat',
          affiliates: 1405476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 2.0
        },
        {
          afp: 'SPP',
          affiliates: 1105476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 15.7
        }]
      },
      {
        id: 3,
        title: 'Cotizantes activos diciembre 2019',
        contributors: {
          chart: {
            title: {
              text: 'Cotizantes / PEA Diciembre 2019'
            },
            tooltip: {
              pointFormat: {
                year: 2019
              }
            },
            series: {
              data: [
                ['Integra', 5.6],
                ['Profuturo', 4.3],
                ['Prima', 5.1],
                ['Habitat', 3.0],
                ['SPP', 18.0]
              ]
            }
          }
        },
        historical: [{
          afp: 'Integra',
          affiliates: 2005476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 5.6
        },
        {
          afp: 'Profuturo',
          affiliates: 1805476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 4.3
        },
        {
          afp: 'Prima',
          affiliates: 1605476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 5.1
        },
        {
          afp: 'Habitat',
          affiliates: 1405476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 3.0
        },
        {
          afp: 'SPP',
          affiliates: 1105476,
          contributors: 830508,
          contributors_pea: 16903662.46,
          contributors: 18.0
        }]
      }*/],
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
    getContributorsPeaFilter() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataContributorsPea', payload);
    }
  },
  computed: {
    ...mapGetters({
      event_error_watch: 'eventErrorWatch',
      get_contributors_pea: 'getContributorsPea'
    }),
    ...mapState({
      eventErrorWatch: state => state.event_error_watch,
      getContributorsPea: state => state.get_contributors_pea
    })
  },
  created() {
    this.getContributorsPeaFilter();
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
    },
    get_contributors_pea() {
      if (Object.keys(this.get_contributors_pea).length > 0 && this.get_contributors_pea != null) {
        /*this.options_table_active_contributors_month[0].historical = this.get_contributors_pea[0].historical;
        this.options_table_active_contributors_month[1].historical = this.get_contributors_pea[1].historical;
        this.options_table_active_contributors_month[2].historical = this.get_contributors_pea[2].historical;*/

        this.options_table_active_contributors_month = this.get_contributors_pea;
      }
    }
  }
}

</script>