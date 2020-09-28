<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center" colspan-no="21" colspan="6">
                  Evolución del fondo de pensiones por tipo de fondo (En miles de S/)
                </th>
              </tr>
              <tr>
                <th class="text-center" rowspan="2">Fecha</th>
                <th class="text-center" colspan-no="5" colspan="1">Fondo 0</th>
                <th class="text-center" colspan-no="5" colspan="1">Fondo 1</th>
                <th class="text-center" colspan-no="5" colspan="1">Fondo 2</th>
                <th class="text-center" colspan-no="5" colspan="1">Fondo 3</th>
                <th class="text-center" colspan-no="5" colspan="1">Total</th>
              </tr>
              <tr>
                <!-- th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_habitat">Habitat</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_integra">Integra</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_prima">Prima</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_profuturo">Profuturo</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_total">Total</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_habitat">Habitat</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_integra">Integra</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_prima">Prima</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_profuturo">Profuturo</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_total">Total</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_habitat">Habitat</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_integra">Integra</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_prima">Prima</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_profuturo">Profuturo</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_total">Total</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_habitat">Habitat</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_integra">Integra</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_prima">Prima</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_profuturo">Profuturo</th>
                <th class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_total">Total</th -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_fund_evolution" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <!-- td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_habitat">{{ response.tipo_0_habitat }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_integra">{{ response.tipo_0_integra }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_prima">{{ response.tipo_0_prima }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_profuturo">{{ response.tipo_0_profuturo }}</td -->
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_0_total">{{ response.tipo_0_total }}</td>

                <!-- td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_habitat">{{ response.tipo_1_habitat }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_integra">{{ response.tipo_1_integra }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_prima">{{ response.tipo_1_prima }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_profuturo">{{ response.tipo_1_profuturo }}</td -->
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_1_total">{{ response.tipo_1_total }}</td>

                <!-- td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_habitat">{{ response.tipo_2_habitat }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_integra">{{ response.tipo_2_integra }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_prima">{{ response.tipo_2_prima }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_profuturo">{{ response.tipo_2_profuturo }}</td -->
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_2_total">{{ response.tipo_2_total }}</td>

                <!-- td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_habitat">{{ response.tipo_3_habitat }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_integra">{{ response.tipo_3_integra }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_prima">{{ response.tipo_3_prima }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_profuturo">{{ response.tipo_3_profuturo }}</td -->
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_total">{{ response.tipo_3_total }}</td>
                <td class="text-center" no-v-if="response_data.table_fund_evolution_validate.tipo_3_total">{{ response.total }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'tableFundEvolution',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_fund_evolution: [],
	    		table_fund_evolution_validate: {}
	    	}
	    }
  	},
  	props: ['options'],
    methods: {
	    imgDefaultUser(event) {
	    	event.target.src = img_user;
	    }
  	},
  	computed: {
		  ...mapGetters({
	      get_fund_evolution: 'getFundEvolution',
	      event_watch_fund_evolution: 'eventWatchFundEvolution'
	    }),
	    ...mapState({
	      getFundEvolution: state => state.get_fund_evolution,
	      eventWatchFundEvolution: state => state.event_watch_fund_evolution
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_fund_evolution() {
  			let self = this;
  			switch(self.event_watch_fund_evolution) {
  				case 'get':
			      	if (self.options.period == 'year') {
			      		self.response_data.table_fund_evolution = self.get_fund_evolution.table_fund_evolution_year;
			      		self.response_data.table_fund_evolution_validate = self.get_fund_evolution.table_fund_evolution_validate_year;
			      		
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_fund_evolution = self.get_fund_evolution.table_fund_evolution_month;
			      		self.response_data.table_fund_evolution_validate = self.get_fund_evolution.table_fund_evolution_validate_month;
			      	}

			      	$.each(self.response_data.table_fund_evolution, function(index, val) {
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a === 0) {
			      				self.response_data.table_fund_evolution[index][index_a] = '-';
			      			}

                  else {
                    if ($.isNumeric(val_a)) {
                      self.response_data.table_fund_evolution[index][index_a] = parseInt(val_a).toLocaleString('en-EN');
                    }

                    if (index_a == 'date' && self.options.period == 'year') {
                      let date_format = val_a.split('-');
                      self.response_data.table_fund_evolution[index][index_a] = date_format[1];
                    }
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