<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center" rowspan="2">Fecha</th>
                <th class="text-center" :colspan="response_data.table_commission_on_flow_validate.total">{{title}}</th>
                <th class="text-center" rowspan="2" v-if="response_data.table_commission_on_flow_validate.promedio">Promedio</th>
              </tr>
              <tr>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.habitat">Habitat</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.integra">Integra</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.prima">Prima</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.profuturo">Profuturo</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.elroble">El Roble</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.horizonte">Horizonte</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.megafondo">Megafondo</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.nueva_vida">Nueva vida</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.providencia">Providencia</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.union">Unión</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.union_vida">Unión Vida</th>
                <th class="text-center" v-if="response_data.table_commission_on_flow_validate.sin_afp">Sin AFP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_commission_on_flow" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.habitat">{{ response.habitat }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.integra">{{ response.integra }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.prima">{{ response.prima }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.profuturo">{{ response.profuturo }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.elroble">{{ response.elroble }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.horizonte">{{ response.horizonte }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.megafondo">{{ response.megafondo }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.nueva_vida">{{ response.nueva_vida }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.providencia">{{ response.providencia }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.union">{{ response.union }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.union_vida">{{ response.union_vida }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.sin_afp">{{ response.sin_afp }}</td>
                <td class="text-center" v-if="response_data.table_commission_on_flow_validate.promedio">{{ response.promedio }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'tableCommissionOnFlow',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_commission_on_flow: [],
	    		table_commission_on_flow_validate: {}
			},
			title: ''
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
	      get_commission_on_flow: 'getCommissionOnFlow',
	      event_watch_commission_on_flow: 'eventWatchCommissionOnFlow'
	    }),
	    ...mapState({
	      getCommissionOnFlow: state => state.get_commission_on_flow,
	      eventWatchCommissionOnFlow: state => state.event_watch_commission_on_flow
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_commission_on_flow() {
			let self = this,
				percent_bool = true;
  			switch(self.event_watch_commission_on_flow) {
  				case 'get':
			      	if (self.options.period == 'year') {
						self.title = 'Comisión sobre flujo (remuneración) por AFP'
			      		self.response_data.table_commission_on_flow = self.get_commission_on_flow.table_commission_on_flow_year;
			      		self.response_data.table_commission_on_flow_validate = self.get_commission_on_flow.table_commission_on_flow_validate_year;
			      		
			      	}

			      	if (self.options.period == 'month') {
						self.title = 'Comisión sobre flujo (remuneración) por AFP'
			      		self.response_data.table_commission_on_flow = self.get_commission_on_flow.table_commission_on_flow_month;
			      		self.response_data.table_commission_on_flow_validate = self.get_commission_on_flow.table_managed_portfolio_validate_month;
			      	}

					if (self.options.period == 'year_fixed') {
						percent_bool = false
						self.title = 'Comisión fija (En S/)'
			      		self.response_data.table_commission_on_flow = self.get_commission_on_flow.table_commission_fixed_year;
			      		self.response_data.table_commission_on_flow_validate = self.get_commission_on_flow.table_commission_fixed_validate_year;
					}
					  
					if (self.options.period == 'month_fixed') {
						percent_bool = false
						self.title = 'Comisión fija (En S/)'
			      		self.response_data.table_commission_on_flow = self.get_commission_on_flow.table_commission_fixed_month;
			      		self.response_data.table_commission_on_flow_validate = self.get_commission_on_flow.table_commission_fixed_validate_month;
			      	}

			      	$.each(self.response_data.table_commission_on_flow, function(index, val) {
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a === 0) {
			      				self.response_data.table_commission_on_flow[index][index_a] = '-';
			      			}
							else {
								if ($.isNumeric(val_a)) {
									val_a = (String(val_a).substr(0, 1) == '.') ? parseFloat('0'+val_a) : parseFloat(val_a);
									self.response_data.table_commission_on_flow[index][index_a] = parseFloat(val_a).toFixed(2).toLocaleString('en-EN')+(percent_bool ? '%' : '');
								}

								if (index_a == 'date' && (self.options.period == 'year' || self.options.period == 'year_fixed')) {
									let date_format = val_a.split('-');
									self.response_data.table_commission_on_flow[index][index_a] = date_format[1];
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