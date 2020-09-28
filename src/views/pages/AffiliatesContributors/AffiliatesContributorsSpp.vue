<template>
  <div>
      <div class="row">
          <div class="col-12">
          <h1 class="h3 mb-3" align="center">Afiliados y cotizantes del SPP</h1>
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
                  <form class="form" @submit.prevent="getAffiliatesContributorsSpp">
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
              <h5 class="card-title mb-0">Afiliados y cotizantes activos</h5>
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
                  <div class="row">
                    <div class="col-md-12">
                      <GraphicEvolutionContributionsAffiliatesAccordingAfp></GraphicEvolutionContributionsAffiliatesAccordingAfp>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <br>
                    </div>
                  </div>
                  <!-- div class="row">
                    <div class="col-md-6">
                      <div class="table-responsive">
                        <TableAffiliatesContributorsYear></TableAffiliatesContributorsYear>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="table-responsive">
                        <TableAffiliatesContributorsYearPercents></TableAffiliatesContributorsYearPercents>
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
                              <div class="col-md-12">
                                <div class="table-responsive">
                                  <TableAffiliatesContributorsYear :options="options_table.year"></TableAffiliatesContributorsYear>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab-month" role="tabpanel">
                            <!-- <h4 class="tab-title">Mensual</h4> -->
                            <div class="row">
                              <div class="col-md-12">
                                <div class="table-responsive">
                                  <TableAffiliatesContributorsYear :options="options_table.month"></TableAffiliatesContributorsYear>
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
import TableAffiliatesContributorsYear from '@/components/affiliatesContributors/affiliatesContributorsSpp/tableAffiliatesContributorsYear';
import TableAffiliatesContributorsYearPercents from '@/components/affiliatesContributors/affiliatesContributorsSpp/tableAffiliatesContributorsYearPercents';
import GraphicEvolutionContributionsAffiliatesAccordingAfp from '@/components/affiliatesContributors/affiliatesContributorsSpp/graphicEvolutionContributionsAffiliatesAccordingAfp';
import Toastr from 'toastr';
export default {
  name: 'affiliatesContributorsSpp',
  components: {
    SearchContentHeader,
    TableAffiliatesContributorsYear,
    TableAffiliatesContributorsYearPercents,
    GraphicEvolutionContributionsAffiliatesAccordingAfp
  },
  data () {
    return {
      options: {
        query: {
          start_date: '',
          end_date: ''
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
    getAffiliatesContributorsSpp() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;

      let payload = this.options.query;
      this.$store.dispatch('getDataAffiliatesContributorsSpp', payload);
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
  created () {
    this.getAffiliatesContributorsSpp();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getAffiliatesContributorsSpp':
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