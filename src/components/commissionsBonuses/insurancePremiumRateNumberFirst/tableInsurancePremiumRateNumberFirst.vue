<template>
	<div>
		<table class="table table-sm table-bordered overflow-x">
            <thead>
              <tr>
				<th class="text-center" rowspan="3">Fecha</th>
                <th class="text-center" :colspan="response_data.table_insurance_premium_rate_number_first_validate.total">Prima de seguro, tasa de aporte y aportes por año</th>
              </tr>
              <tr>
                <th class="text-center" :colspan="response_data.table_insurance_premium_rate_number_first_validate.total_prima">Prima de seguro</th>
                <th class="text-center" rowspan="2" v-if="response_data.table_insurance_premium_rate_number_first_validate.promedio">Prima de seguro promedio</th>
                <th class="text-center" rowspan="2" v-if="response_data.table_insurance_premium_rate_number_first_validate.remuneracion">Tasa aporte obligatorio sobre remuneración</th>
                <th class="text-center" rowspan="2" v-if="response_data.table_insurance_premium_rate_number_first_validate.aportes">Aportes por año</th>
              </tr>
              <tr>
                <th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.horizonte">Horizonte</th>
                <th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.integra">Integra</th>
                <th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.profuturo">Profuturo</th>
                <th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.prima">Prima</th>
                <th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.habitat">Habitat</th>
				<th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.union_vida">Unión Vida</th>
				<th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.union">Unión</th>
				<th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.nueva_vida">Nueva Vida</th>
				<th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.elroble">El Roble</th>
				<th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.providencia">Providencia</th>
				<th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.megafondo">Megafondo</th>
				<th class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.sin_afp">Sin AFP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_insurance_premium_rate_number_first" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.horizonte">{{ response.horizonte }}</td>
                <td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.integra">{{ response.integra }}</td>
                <td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.profuturo">{{ response.profuturo }}</td>
                <td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.prima">{{ response.prima }}</td>
                <td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.habitat">{{ response.habitat }}</td>
				<td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.union_vida">{{ response.union_vida }}</td>
				<td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.union">{{ response.union }}</td>
				<td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.nueva_vida">{{ response.nueva_vida }}</td>
				<td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.elroble">{{ response.elroble }}</td>
				<td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.providencia">{{ response.providencia }}</td>
				<td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.megafondo">{{ response.megafondo }}</td>
				<td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.sin_afp">{{ response.sin_afp }}</td>
                <td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.promedio">{{ response.promedio }}</td>
                <td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.remuneracion">{{ response.remuneracion }}</td>
                <td class="text-center" v-if="response_data.table_insurance_premium_rate_number_first_validate.aportes">{{ response.aportes }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'tableInsurancePremiumRateNumberFirst',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_insurance_premium_rate_number_first: [],
	    		table_insurance_premium_rate_number_first_validate: {}
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
	      get_insurance_premium_rate_number_first: 'getInsurancePremiumRateNumberFirst',
	      event_watch_insurance_premium_rate_number_first: 'eventWatchInsurancePremiumRateNumberFirst'
	    }),
	    ...mapState({
	      getInsurancePremiumRateNumberFirst: state => state.get_insurance_premium_rate_number_first,
	      eventWatchInsurancePremiumRateNumberFirst: state => state.event_watch_insurance_premium_rate_number_first
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_insurance_premium_rate_number_first() {
  			let self = this;
  			switch(self.event_watch_insurance_premium_rate_number_first) {
  				case 'get':
			      	if (self.options.period == 'year') {
			      		self.response_data.table_insurance_premium_rate_number_first = self.get_insurance_premium_rate_number_first.table_insurance_prima_rate_number_year;
			      		self.response_data.table_insurance_premium_rate_number_first_validate = self.get_insurance_premium_rate_number_first.table_insurance_prima_rate_number_validate_year;
			      		
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_insurance_premium_rate_number_first = self.get_insurance_premium_rate_number_first.table_insurance_prima_rate_number_month;
			      		self.response_data.table_insurance_premium_rate_number_first_validate = self.get_insurance_premium_rate_number_first.table_managed_portfolio_validate_month;
			      	}

			      	$.each(self.response_data.table_insurance_premium_rate_number_first, function(index, val) {
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a === 0) {
			      				self.response_data.table_insurance_premium_rate_number_first[index][index_a] = '-';
			      			}

                  else {
                    if ($.isNumeric(val_a)) {
                      let symbol = (index_a != 'aportes') ? '%' : '';

                      val_a = (String(val_a).substr(0, 1) == '.') ? parseFloat('0'+val_a) : parseFloat(val_a);
                      self.response_data.table_insurance_premium_rate_number_first[index][index_a] = parseFloat(val_a).toFixed(2).toLocaleString('en-EN')+symbol;
                    }

                    if (index_a == 'date' && self.options.period == 'year') {
                      let date_format = val_a.split('-');
                      self.response_data.table_insurance_premium_rate_number_first[index][index_a] = date_format[1];
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