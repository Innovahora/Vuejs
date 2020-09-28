<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center">Fecha</th>
                <th class="text-center" v-if="response_data.table_managed_portfolio_validate.fondpens">Fondo de pensiones <br>(Millones de S/)</th>
                <th class="text-center" v-if="response_data.table_managed_portfolio_validate.encaje">Encaje <br>(Millones de S/)</th>
                <th class="text-center" v-if="response_data.table_managed_portfolio_validate.cartera">Cartera administrada <br>(Millones de S/)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_managed_portfolio" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center" v-if="response_data.table_managed_portfolio_validate.fondpens">{{ response.fondpens.split('.')[0] }}</td>
                <td class="text-center" v-if="response_data.table_managed_portfolio_validate.encaje">{{ response.encaje.split('.')[0] }}</td>
                <td class="text-center" v-if="response_data.table_managed_portfolio_validate.cartera">{{ response.cartera.split('.')[0] }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableManagedPortfolio',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_managed_portfolio: [],
	    		table_managed_portfolio_validate: {}
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
	      get_managed_portfolio: 'getManagedPortfolio',
	      event_watch_managed_portfolio: 'eventWatchManagedPortfolio'
	    }),
	    ...mapState({
	      getManagedPortfolio: state => state.get_managed_portfolio,
	      eventWatchManagedPortfolio: state => state.event_watch_managed_portfolio
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_managed_portfolio() {
  			let self = this;
  			switch(self.event_watch_managed_portfolio) {
  				case 'get':
			      	if (self.options.period == 'year') {
			      		self.response_data.table_managed_portfolio = self.get_managed_portfolio.table_managed_portfolio_year;
			      		self.response_data.table_managed_portfolio_validate = self.get_managed_portfolio.table_managed_portfolio_validate_year;
			      		
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_managed_portfolio = self.get_managed_portfolio.table_managed_portfolio_month;
			      		self.response_data.table_managed_portfolio_validate = self.get_managed_portfolio.table_managed_portfolio_validate_month;
			      	}

			      	$.each(self.response_data.table_managed_portfolio, function(index, val) {
			      		self.response_data.table_managed_portfolio[index].total_spp = val.fondpens + val.encaje + val.cartera;
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && parseFloat(val_a) === 0) {
			      				self.response_data.table_managed_portfolio[index][index_a] = '-';
			      			}

			      			else {
			                    if ($.isNumeric(val_a)) {
			                      	val_a = (String(val_a).substr(0, 1) == '.') ? parseFloat('0'+val_a) : parseFloat(val_a);
			                      	self.response_data.table_managed_portfolio[index][index_a] = parseFloat(val_a.toFixed(2)).toLocaleString('en-EN');
			                    }

			                    if (index_a == 'date' && self.options.period == 'year') {
			                    	let date_format = val_a.split('-');
			                    	self.response_data.table_managed_portfolio[index][index_a] = date_format[1];
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