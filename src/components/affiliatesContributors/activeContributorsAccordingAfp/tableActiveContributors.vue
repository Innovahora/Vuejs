<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center" :colspan="response_data.table_active_contributors_validate.total">Cotizantes activos al sistema de pensiones</th>
              </tr>
              <tr> 
                <th class="text-center">Fecha</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.integra">Integra</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.habitat">Habitat</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.profuturo">Profuturo</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.prima">Prima</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.horizonte">Horizonte</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.union_vida">Unión Vida</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.union">Unión</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.nueva_vida">Nueva vida</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.el_roble">El Roble</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.providencia">Providencia</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.megafondo">Megafondo</th>
                <!-- <th class="text-center">Sin afp</th> -->
                <th class="text-center" text-old="Cotizantes SNP">Total SPP</th>
                <th class="text-center" v-if="response_data.table_active_contributors_validate.total_snp">Total SNP</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(response, index) in get_active_contributors_according_afp.table_active_contributors" :key="index"> -->
              <tr v-for="(response, index) in response_data.table_active_contributors" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.integra">{{ response.integra.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.habitat">{{ response.habitat.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.profuturo">{{ response.profuturo.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.prima">{{ response.prima.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.horizonte">{{ response.horizonte.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.union_vida">{{ response.union_vida.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.union">{{ response.union.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.nueva_vida">{{ response.nueva_vida.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.el_roble">{{ response.el_roble.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.providencia">{{ response.providencia.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.megafondo">{{ response.megafondo.toLocaleString('en-EN') }}</td>
                <!-- <td class="text-center">{{ response.sin_afp.toLocaleString('en-EN') }}</td> -->
                <td class="text-center">{{ response.total_spp.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_active_contributors_validate.total_snp">{{ response.total_snp.toLocaleString('en-EN') }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableActiveContributors',
    components: {
  	},
    data () {
	    return {
        response_data: {
          table_active_contributors: [],
          table_active_contributors_validate: {}
        }
      	/* data_response : [{
          	date: 'ene-19',
          	integra: 846555,
          	// habitat: 2.893,
          	profuturo: 1033682,
          	prima: 641496,
          	total_spp: 2937529,
          	cotizantes_snp: 440033
        },
        {
          	date: 'feb-19',
          	integra: 868941,
          	// habitat: 2.893,
          	profuturo: 1040939,
          	prima: 644065,
          	total_spp: 2970795,
          	cotizantes_snp: 477048
        },
        {
          	date: 'mar-19',
          	integra: 835895,
          	// habitat: 2.893,
          	profuturo: 1026644,
          	prima: 630704,
          	total_spp: 2900725,
          	cotizantes_snp: 488283
        },
        {
          	date: 'abr-19',
          	integra: 891938,
          	// habitat: 2.893,
          	profuturo: 1092822,
          	prima: 678929,
          	total_spp: 3081386,
          	cotizantes_snp: 495666
        }] */
	    }
  	},
    props: ['options'],
    methods: {
  	},
  	computed: {
  		...mapGetters({
	      get_active_contributors_according_afp: 'getActiveContributorsAccordingAfp',
        event_watch_active_contributors_according_afp: 'eventWatchActiveContributorsAccordingAfp'
	    }),
	    ...mapState({
	      getActiveContributorsAccordingAfp: state => state.get_active_contributors_according_afp,
        eventWatchActiveContributorsAccordingAfp: state => state.event_watch_active_contributors_according_afp
	    })
  	},
  	created() {
  	},
  	watch: {
      event_watch_active_contributors_according_afp() {
        let self = this;
        switch(self.event_watch_active_contributors_according_afp) {
          case 'get':
            if (self.options.period == 'year') {
              self.response_data.table_active_contributors = self.getActiveContributorsAccordingAfp.table_active_contributors_year;
              self.response_data.table_active_contributors_validate = self.getActiveContributorsAccordingAfp.table_active_contributors_validate_year;
              for (let i = 0; i < self.response_data.table_active_contributors.length; i++) {
                let date = self.response_data.table_active_contributors[i].date;
                let array_date = date.split('-');
                self.response_data.table_active_contributors[i].date = array_date[1];
              }
            }

            if (self.options.period == 'month') {
              self.response_data.table_active_contributors = self.getActiveContributorsAccordingAfp.table_active_contributors_month;
              self.response_data.table_active_contributors_validate = self.getActiveContributorsAccordingAfp.table_active_contributors_validate_month;
            }

            $.each(self.response_data.table_active_contributors, function(index, val) {
              $.each(val, function(index_a, val_a) {
                if ($.isNumeric(val_a) && val_a === 0) {
                  self.response_data.table_active_contributors[index][index_a] = '-';
                }
              });
            });
          break;
        }
      }
  	},
  	mounted() {

  	}
}
</script>

<style>
	.section-new_title {
		margin-bottom: 0px !important;
		margin-right: 60px;
	}
	.section-new_user_name {
	    margin-bottom: 0.5rem;
    	font-weight: 400;
    	font-size: 12px;
    	line-height: 1.2;
    	color: #17a2b8;
	}
</style>