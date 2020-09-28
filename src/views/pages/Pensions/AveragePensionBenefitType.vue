<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <form class="form" @submit.prevent="getAveragePensionBenefitType">
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
            <!-- <GraphicAveragePensionBenefitType></GraphicAveragePensionBenefitType> -->
            <GraphicAveragePensionSpp :active_spp.sync="active_spp"></GraphicAveragePensionSpp>
            <div v-show="/*active_spp*/true" v-bind:class="'card '+(active_spp ? 'mycollapse-enter' : 'mycollapse-leave')">
              <div class="card-body">
                <div class="text-justify"><b>Pensión en el SPP:</b> ingreso periódico como consecuencia del aporte realizado a lo largo de su vida laboral en su cuenta de capitalización individual (CIC), la misma que es de propiedad única del afiliado.</div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <GraphicAveragePensionSnp  :active_snp.sync="active_snp"></GraphicAveragePensionSnp>
            <div v-if="/*active_snp*/true" v-bind:class="'card '+(active_snp ? 'mycollapse-enter' : 'mycollapse-leave')">
              <div class="card-body">
                <div class="text-justify"><b>Pensión en el SNP:</b> monto percibido como resultado de realizar aportes en sistema público sobre un mínimo de 20 años. El monto percibido cuenta con un tope mínimo de S/ 500 y máximo de S/ 893, desde el año 2019.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <GraphicAveragePensionBenefitTypeSppSnp></GraphicAveragePensionBenefitTypeSppSnp>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <br>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-md-12 text-right">
            <ButtonExportToExcelAveragePensionBenefitType :options="options_button_export.year"></ButtonExportToExcelAveragePensionBenefitType>
            <br>
          </div>
        </div> -->
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
                      <ButtonExportToExcelAveragePensionBenefitType :options="options_button_export.year"></ButtonExportToExcelAveragePensionBenefitType>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableAveragePensionBenefitType :options="options_table.year"></TableAveragePensionBenefitType>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab-month" role="tabpanel">
                  <div class="row">
                    <div class="col-md-12 text-right">
                      <ButtonExportToExcelAveragePensionBenefitType :options="options_button_export.month"></ButtonExportToExcelAveragePensionBenefitType>
                      <br>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="table-responsive">
                        <TableAveragePensionBenefitType :options="options_table.month"></TableAveragePensionBenefitType>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <TableAveragePensionBenefitType></TableAveragePensionBenefitType>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import SearchContentHeader from '@/components/utils/forms/searchContentHeader';
import ButtonExportToExcelAveragePensionBenefitType from '@/components/pensions/averagePensionBenefitType/buttonExportToExcelAveragePensionBenefitType';
import TableAveragePensionBenefitType from '@/components/pensions/averagePensionBenefitType/tableAveragePensionBenefitType';
// import GraphicAveragePensionBenefitType from '@/components/pensions/averagePensionBenefitType/graphicAveragePensionBenefitType';
import GraphicAveragePensionSpp from '@/components/pensions/averagePensionSpp/graphicAveragePensionSpp';
import GraphicAveragePensionSnp from '@/components/pensions/averagePensionSnp/graphicAveragePensionSnp';
import GraphicAveragePensionBenefitTypeSppSnp from '@/components/pensions/averagePensionBenefitType/graphicAveragePensionBenefitTypeSppSnp';
import Toastr from 'toastr';
export default {
  name: 'averagePensionBenefitType',
  components: {
    SearchContentHeader,
    ButtonExportToExcelAveragePensionBenefitType,
    TableAveragePensionBenefitType,
    // GraphicAveragePensionBenefitType,
    GraphicAveragePensionSpp,
    GraphicAveragePensionSnp,
    GraphicAveragePensionBenefitTypeSppSnp
  },
  data () {
    let date = new Date();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let last_day_date = new Date(y, m, 0);
    let last_day = last_day_date.getDate();
    return {
      active_snp:false,
      active_spp:false,
      options: {
        query: {
          start_date: '2002-12',
          end_date: ''+y+'-'+(m<10?'0':'')+m+'-'+last_day,
        },
        date_picker: {
          minDate: '2002-01-01'
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
    getAveragePensionBenefitType() {
      this.spinner.class = 'spinner-border';
      this.event_change.loading_get = false;
      
      let payload = this.options.query;
      this.$store.dispatch('getDataAveragePensionBenefitType', payload);
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
    this.getAveragePensionBenefitType();
  },
  mounted() {
    this.setExportToExcel();
  },
  watch: {
    event_error_watch() {
      switch(this.event_error_watch.event) {
        case 'getAveragePensionBenefitType':
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