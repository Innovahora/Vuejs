<template>
  <div>
      <div class="row">
          <div class="col-12">
          <h1 class="h3 mb-3" align="center">Pensión promedio del SPP</h1>
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
                  <form class="form" @submit.prevent="getAveragePensionSpp">
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
              <h5 class="card-title mb-0">Pensión promedio del SPP</h5>
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
                      <GraphicAveragePensionSpp></GraphicAveragePensionSpp>
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
                        <TableAveragePensionSpp></TableAveragePensionSpp>
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
import TableAveragePensionSpp from '@/components/pensions/averagePensionSpp/tableAveragePensionSpp';
import GraphicAveragePensionSpp from '@/components/pensions/averagePensionSpp/graphicAveragePensionSpp';
import Toastr from 'toastr';
export default {
  name: 'averagePensionSpp',
  components: {
    SearchContentHeader,
    TableAveragePensionSpp,
    GraphicAveragePensionSpp
  },
  data () {
    return {
      options: {
        query: {
          start_date: '',
          end_date: ''
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
    getAveragePensionSpp() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;
      
      let payload = this.options.query;
      this.$store.dispatch('getDataAveragePensionSpp', payload);
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
    this.getAveragePensionSpp();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getAveragePensionSpp':
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