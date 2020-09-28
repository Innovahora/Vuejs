<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
				<tr>
					<th class="text-center" colspan="4">Límites de inversión en el exterior</th>
					<th class="text-center" rowspan="2" v-if="response_data.table_investment_limits_validate.local">Inversión local</th>
				</tr>
              	<tr>
					<th class="text-center">Fecha</th>
					<th class="text-center" v-if="response_data.table_investment_limits_validate.efective">Inversión efectiva</th>
					<th class="text-center" v-if="response_data.table_investment_limits_validate.operative">Límite operativo</th>
					<th class="text-center" v-if="response_data.table_investment_limits_validate.legal">Límite legal</th>
              	</tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_investment_limits" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center" v-if="response_data.table_investment_limits_validate.efective">{{ response.efective }}</td>
                <td class="text-center" v-if="response_data.table_investment_limits_validate.operative">{{ response.operative }}</td>
                <td class="text-center" v-if="response_data.table_investment_limits_validate.legal">{{ response.legal }}</td>
                <td class="text-center" v-if="response_data.table_investment_limits_validate.local">{{ response.local }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'tableInvestmentLimits',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_investment_limits: [],
	    		table_investment_limits_validate: {}
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
	      get_investment_limits: 'getInvestmentLimits',
	      event_watch_investment_limits: 'eventWatchInvestmentLimits'
	    }),
	    ...mapState({
	      getInvestmentLimits: state => state.get_investment_limits,
	      eventWatchInvestmentLimits: state => state.event_watch_investment_limits
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_investment_limits() {
  			let self = this;
  			switch(self.event_watch_investment_limits) {
  				case 'get':
			      	if (self.options.period == 'year') {
						self.response_data.table_investment_limits = self.get_investment_limits.table_InvestmentLimits_year;
			      		self.response_data.table_investment_limits_validate = self.get_investment_limits.table_InvestmentLimits_validate_year;
			      		
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_investment_limits = self.get_investment_limits.table_InvestmentLimits_month;
			      		self.response_data.table_investment_limits_validate = self.get_investment_limits.table_InvestmentLimits_validate_month;
			      	}

			      	$.each(self.response_data.table_investment_limits, function(index, val) {
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a === 0) {
			      				self.response_data.table_investment_limits[index][index_a] = '-';
			      			}else{
								if ($.isNumeric(val_a)) {
									val_a = (String(val_a).substr(0, 1) == '.') ? parseFloat('0'+val_a) : parseFloat(val_a);
									
									self.response_data.table_investment_limits[index][index_a] = parseFloat(val_a).toFixed(2).toLocaleString('en-EN')+'%';
									
								}

								if (index_a == 'date' && self.options.period == 'year') {
									let date_format = val_a.split('-');
									self.response_data.table_investment_limits[index][index_a] = date_format[1];
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