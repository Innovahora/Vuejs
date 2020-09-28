<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th colspan="4" class="text-center">Inversión de la cartera administrada en infraestructura</th>
              </tr>
              <tr>
                <th class="text-center">Fecha</th>
                <th class="text-center" v-if="response_data.table_investment_infrastructure_validate.infraporcentaje">Infraestructura<br>(Cartera %)</th>
                <th class="text-center" v-if="response_data.table_investment_infrastructure_validate.inframonto">Infraestructura<br>(Millones de S/)</th>
                <th class="text-center" v-if="response_data.table_investment_infrastructure_validate.cartadmin">Cartera administrada<br>(Millones de S/)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_investment_infrastructure" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center" v-if="response_data.table_investment_infrastructure_validate.infraporcentaje">{{ response.infraporcentaje+'%' }}</td>
                <td class="text-center" v-if="response_data.table_investment_infrastructure_validate.inframonto">{{ response.inframonto.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_investment_infrastructure_validate.cartadmin">{{ response.cartadmin.toLocaleString('en-EN') }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'tableInvestmentInfrastructure',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_investment_infrastructure: [],
	    		table_investment_infrastructure_validate: {}
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
	      get_investment_infrastructure: 'getInvestmentInfrastructure',
	      event_watch_investment_infrastructure: 'eventWatchInvestmentInfrastructure'
	    }),
	    ...mapState({
	      getInvestmentInfrastructure: state => state.get_investment_infrastructure,
	      eventWatchInvestmentInfrastructure: state => state.event_watch_investment_infrastructure
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_investment_infrastructure() {
  			let self = this;
  			switch(self.event_watch_investment_infrastructure) {
  				case 'get':
			      	if (self.options.period == 'year') {
			      		self.response_data.table_investment_infrastructure = self.get_investment_infrastructure.table_Investment_Infrastructure_year;
			      		self.response_data.table_investment_infrastructure_validate = self.get_investment_infrastructure.table_Investment_Infrastructure_validate_year;
			      		
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_investment_infrastructure = self.get_investment_infrastructure.table_Investment_Infrastructure_month;
			      		self.response_data.table_investment_infrastructure_validate = self.get_investment_infrastructure.table_Investment_Infrastructure_validate_month;
			      	}

			      	$.each(self.response_data.table_investment_infrastructure, function(index, val) {
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a === 0) {
			      				self.response_data.table_investment_infrastructure[index][index_a] = '-';
			      			}else {
								if ($.isNumeric(val_a)) {
									val_a = (String(val_a).substr(0, 1) == '.') ? parseFloat('0'+val_a) : parseFloat(val_a);
									if(index_a=='infraporcentaje'){
										self.response_data.table_investment_infrastructure[index][index_a] = parseFloat(val_a*100).toFixed(2).toLocaleString('en-EN');
									}else{
										self.response_data.table_investment_infrastructure[index][index_a] = parseFloat(val_a.toFixed(0)).toLocaleString('en-EN');
									}
									
								}

								if (index_a == 'date' && self.options.period == 'year') {
									let date_format = val_a.split('-');
									self.response_data.table_investment_infrastructure[index][index_a] = date_format[1];
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