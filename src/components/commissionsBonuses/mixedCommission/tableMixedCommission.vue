<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
				<th class="text-center" rowspan="3">Fecha</th>
                <th class="text-center" :colspan="response_data.table_mixed_commission_validate.total">Comisión mixta</th>
              </tr>
              <tr>
                <th class="text-center" :colspan="response_data.table_mixed_commission_validate.total_flujo">Componente sobre flujo (% remuneración)</th>
                <th class="text-center" :colspan="response_data.table_mixed_commission_validate.total_saldo">
					Componente sobre saldo (tasa anual)
					<i class="fas fa-info-circle" data-toggle="tooltip" data-placement="right" title="La comisión sobre saldo anual se aplica sobre el saldo generado a partir de junio de 2013"></i>
				</th>
              </tr>
              <tr>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.habitat_flujo">Habitat</th>
				<th class="text-center" v-if="response_data.table_mixed_commission_validate.horizonte_flujo">Horizonte</th>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.integra_flujo">Integra</th>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.prima_flujo">Prima</th>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.profuturo_flujo">Profuturo</th>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.promedio_flujo">Promedio</th>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.habitat_saldo">Habitat</th>
				<th class="text-center" v-if="response_data.table_mixed_commission_validate.horizonte_saldo">Horizonte</th>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.integra_saldo">Integra</th>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.prima_saldo">Prima</th>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.profuturo_saldo">Profuturo</th>
                <th class="text-center" v-if="response_data.table_mixed_commission_validate.promedio_saldo">Promedio</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_mixed_commission" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.habitat_flujo">{{ response.habitat_flujo }}</td>
				<td class="text-center" v-if="response_data.table_mixed_commission_validate.horizonte_flujo">{{ response.horizonte_flujo }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.integra_flujo">{{ response.integra_flujo }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.prima_flujo">{{ response.prima_flujo }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.profuturo_flujo">{{ response.profuturo_flujo }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.promedio_flujo">{{ response.promedio_flujo }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.habitat_saldo">{{ response.habitat_saldo }}</td>
				<td class="text-center" v-if="response_data.table_mixed_commission_validate.horizonte_saldo">{{ response.horizonte_saldo }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.integra_saldo">{{ response.integra_saldo }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.prima_saldo">{{ response.prima_saldo }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.profuturo_saldo">{{ response.profuturo_saldo }}</td>
                <td class="text-center" v-if="response_data.table_mixed_commission_validate.promedio_saldo">{{ response.promedio_saldo }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'tableMixedCommission',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_mixed_commission: [],
	    		table_mixed_commission_validate: {}
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
	      get_mixed_commission: 'getMixedCommission',
	      event_watch_mixed_commission: 'eventWatchMixedCommission'
	    }),
	    ...mapState({
	      getMixedCommission: state => state.get_mixed_commission,
	      eventWatchMixedCommission: state => state.event_watch_mixed_commission
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_mixed_commission() {
  			let self = this;
  			switch(self.event_watch_mixed_commission) {
  				case 'get':
			      	if (self.options.period == 'year') {
			      		self.response_data.table_mixed_commission = self.get_mixed_commission.table_commission_mixta_year;
			      		self.response_data.table_mixed_commission_validate = self.get_mixed_commission.table_commission_mixta_validate_year;
			      		
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_mixed_commission = self.get_mixed_commission.table_commission_mixta_month;
			      		self.response_data.table_mixed_commission_validate = self.get_mixed_commission.table_managed_portfolio_validate_month;
			      	}

			      	$.each(self.response_data.table_mixed_commission, function(index, val) {
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a === 0) {
			      				self.response_data.table_mixed_commission[index][index_a] = '-';
			      			}

                  else {
                    if ($.isNumeric(val_a)) {
                      val_a = (String(val_a).substr(0, 1) == '.') ? parseFloat('0'+val_a) : parseFloat(val_a);
                      self.response_data.table_mixed_commission[index][index_a] = parseFloat(val_a).toFixed(2).toLocaleString('en-EN')+'%';
                    }

                    if (index_a == 'date' && self.options.period == 'year') {
                      let date_format = val_a.split('-');
                      self.response_data.table_mixed_commission[index][index_a] = date_format[1];
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