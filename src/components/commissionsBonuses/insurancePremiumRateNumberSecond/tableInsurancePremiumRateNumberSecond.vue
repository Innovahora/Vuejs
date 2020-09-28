<template>
	<div>
    <div class="tab tab-style-a">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item"><a class="nav-link active" :href="'#'+this.options.period+'-1'" data-toggle="tab" role="tab">Sin fin previsional - Afiliados a la AFP</a></li>
        <li class="nav-item"><a class="nav-link" :href="'#'+this.options.period+'-2'" data-toggle="tab" role="tab">Sin fin previsional - No afiliados a la AFP</a></li>
        <li class="nav-item"><a class="nav-link" :href="'#'+this.options.period+'-3'" data-toggle="tab" role="tab">Con fin previsional</a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" :id="this.options.period+'-1'" role="tabpanel">
          <table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center" colspan="13">Comisión por la gestión de aportes voluntarios</th>
              </tr>
              <tr>
                <th class="text-center" rowspan="2">AFP</th>
                <th class="text-center" colspan="12">Comisiones aportes sin fin previsional - Afiliados a la AFP (Anual)</th>
              </tr>
              <tr>
                <th class="text-center" colspan="3">Integra</th>
                <th class="text-center" colspan="3">Profuturo</th>
                <th class="text-center" colspan="3">Prima</th>
                <th class="text-center" colspan="3">Habitat</th>
              </tr>
              <tr>
                <th class="text-center">Fecha</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_insurance_premium_rate_number_second" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center">{{ response.integra_tipo_1_afiliados }}</td>
                <td class="text-center">{{ response.integra_tipo_2_afiliados }}</td>
                <td class="text-center">{{ response.integra_tipo_3_afiliados }}</td>
                <td class="text-center">{{ response.profuturo_tipo_1_afiliados }}</td>
                <td class="text-center">{{ response.profuturo_tipo_2_afiliados }}</td>
                <td class="text-center">{{ response.profuturo_tipo_3_afiliados }}</td>
                <td class="text-center">{{ response.prima_tipo_1_afiliados }}</td>
                <td class="text-center">{{ response.prima_tipo_2_afiliados }}</td>
                <td class="text-center">{{ response.prima_tipo_3_afiliados }}</td>
                <td class="text-center">{{ response.habitat_tipo_1_afiliados }}</td>
                <td class="text-center">{{ response.habitat_tipo_2_afiliados }}</td>
                <td class="text-center">{{ response.habitat_tipo_3_afiliados }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tab-pane" :id="this.options.period+'-2'" role="tabpanel">
          <table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center" colspan="13">Comisión por la gestión de aportes voluntarios</th>
              </tr>
              <tr>
                <th class="text-center" rowspan="2">AFP</th>
                <th class="text-center" colspan="12">Comisiones aportes sin fin previsional - No afiliados a la AFP (Anual)</th>
              </tr>
              <tr>
                <th class="text-center" colspan="3">Integra</th>
                <th class="text-center" colspan="3">Profuturo</th>
                <th class="text-center" colspan="3">Prima</th>
                <th class="text-center" colspan="3">Habitat</th>
              </tr>
              <tr>
                <th class="text-center">Fecha</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_insurance_premium_rate_number_second" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center">{{ response.integra_tipo_1_no_afiliados }}</td>
                <td class="text-center">{{ response.integra_tipo_2_no_afiliados }}</td>
                <td class="text-center">{{ response.integra_tipo_3_no_afiliados }}</td>
                <td class="text-center">{{ response.profuturo_tipo_1_no_afiliados }}</td>
                <td class="text-center">{{ response.profuturo_tipo_2_no_afiliados }}</td>
                <td class="text-center">{{ response.profuturo_tipo_3_no_afiliados }}</td>
                <td class="text-center">{{ response.prima_tipo_1_no_afiliados }}</td>
                <td class="text-center">{{ response.prima_tipo_2_no_afiliados }}</td>
                <td class="text-center">{{ response.prima_tipo_3_no_afiliados }}</td>
                <td class="text-center">{{ response.habitat_tipo_1_no_afiliados }}</td>
                <td class="text-center">{{ response.habitat_tipo_2_no_afiliados }}</td>
                <td class="text-center">{{ response.habitat_tipo_3_no_afiliados }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tab-pane" :id="this.options.period+'-3'" role="tabpanel">
          <table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center" colspan="13">Comisión por la gestión de aportes voluntarios</th>
              </tr>
              <tr>
                <th class="text-center" rowspan="2">AFP</th>
                <th class="text-center" colspan="12">Comisiones aportes con fin previsional (Anual)</th>
              </tr>
              <tr>
                <th class="text-center" colspan="3">Integra</th>
                <th class="text-center" colspan="3">Profuturo</th>
                <th class="text-center" colspan="3">Prima</th>
                <th class="text-center" colspan="3">Habitat</th>
              </tr>
              <tr>
                <th class="text-center">Fecha</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
                <th class="text-center">Fondo 1</th>
                <th class="text-center">Fondo 2</th>
                <th class="text-center">Fondo 3</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_insurance_premium_rate_number_second" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center">{{ response.integra_tipo_1_normal }}</td>
                <td class="text-center">{{ response.integra_tipo_2_normal }}</td>
                <td class="text-center">{{ response.integra_tipo_3_normal }}</td>
                <td class="text-center">{{ response.profuturo_tipo_1_normal }}</td>
                <td class="text-center">{{ response.profuturo_tipo_2_normal }}</td>
                <td class="text-center">{{ response.profuturo_tipo_3_normal }}</td>
                <td class="text-center">{{ response.prima_tipo_1_normal }}</td>
                <td class="text-center">{{ response.prima_tipo_2_normal }}</td>
                <td class="text-center">{{ response.prima_tipo_3_normal }}</td>
                <td class="text-center">{{ response.habitat_tipo_1_normal }}</td>
                <td class="text-center">{{ response.habitat_tipo_2_normal }}</td>
                <td class="text-center">{{ response.habitat_tipo_3_normal }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
		<!--<table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th class="text-center" colspan="37">Comisión por la Gestión de Aportes Voluntarios</th>
        </tr>
        <tr>
          <th class="text-center" rowspan="2">AFP</th>
          <th class="text-center" colspan="12">Comisiones Aportes Sin Fin Previsional-Afiliados a la AFP (Anual)</th>
          <th class="text-center" colspan="12">Comisiones Aportes Sin Fin Previsional-No afiliados a la AFP- (Anual)</th>
          <th class="text-center" colspan="12">Comisiones Aportes Con Fin Previsional (Anual)</th>
        </tr>
        <tr>
          <th class="text-center" colspan="3">Integra</th>
          <th class="text-center" colspan="3">Profuturo</th>
          <th class="text-center" colspan="3">Prima</th>
          <th class="text-center" colspan="3">Habitat</th>
          <th class="text-center" colspan="3">Integra</th>
          <th class="text-center" colspan="3">Profuturo</th>
          <th class="text-center" colspan="3">Prima</th>
          <th class="text-center" colspan="3">Habitat</th>
          <th class="text-center" colspan="3">Integra</th>
          <th class="text-center" colspan="3">Profuturo</th>
          <th class="text-center" colspan="3">Prima</th>
          <th class="text-center" colspan="3">Habitat</th>
        </tr>
        <tr>
          <th class="text-center">Fecha</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
          <th class="text-center">Fondo 1</th>
          <th class="text-center">Fondo 2</th>
          <th class="text-center">Fondo 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(response, index) in response_data.table_insurance_premium_rate_number_second" :key="index">
          <td class="text-center">{{ response.date }}</td>
          <td class="text-center">{{ response.integra_tipo_1_afiliados }}</td>
          <td class="text-center">{{ response.integra_tipo_2_afiliados }}</td>
          <td class="text-center">{{ response.integra_tipo_3_afiliados }}</td>
          <td class="text-center">{{ response.profuturo_tipo_1_afiliados }}</td>
          <td class="text-center">{{ response.profuturo_tipo_2_afiliados }}</td>
          <td class="text-center">{{ response.profuturo_tipo_3_afiliados }}</td>
          <td class="text-center">{{ response.prima_tipo_1_afiliados }}</td>
          <td class="text-center">{{ response.prima_tipo_2_afiliados }}</td>
          <td class="text-center">{{ response.prima_tipo_3_afiliados }}</td>
          <td class="text-center">{{ response.habitat_tipo_1_afiliados }}</td>
          <td class="text-center">{{ response.habitat_tipo_2_afiliados }}</td>
          <td class="text-center">{{ response.habitat_tipo_3_afiliados }}</td>
          <td class="text-center">{{ response.integra_tipo_1_no_afiliados }}</td>
          <td class="text-center">{{ response.integra_tipo_2_no_afiliados }}</td>
          <td class="text-center">{{ response.integra_tipo_3_no_afiliados }}</td>
          <td class="text-center">{{ response.profuturo_tipo_1_no_afiliados }}</td>
          <td class="text-center">{{ response.profuturo_tipo_2_no_afiliados }}</td>
          <td class="text-center">{{ response.profuturo_tipo_3_no_afiliados }}</td>
          <td class="text-center">{{ response.prima_tipo_1_no_afiliados }}</td>
          <td class="text-center">{{ response.prima_tipo_2_no_afiliados }}</td>
          <td class="text-center">{{ response.prima_tipo_3_no_afiliados }}</td>
          <td class="text-center">{{ response.habitat_tipo_1_no_afiliados }}</td>
          <td class="text-center">{{ response.habitat_tipo_2_no_afiliados }}</td>
          <td class="text-center">{{ response.habitat_tipo_3_no_afiliados }}</td>
          <td class="text-center">{{ response.integra_tipo_1_normal }}</td>
          <td class="text-center">{{ response.integra_tipo_2_normal }}</td>
          <td class="text-center">{{ response.integra_tipo_3_normal }}</td>
          <td class="text-center">{{ response.profuturo_tipo_1_normal }}</td>
          <td class="text-center">{{ response.profuturo_tipo_2_normal }}</td>
          <td class="text-center">{{ response.profuturo_tipo_3_normal }}</td>
          <td class="text-center">{{ response.prima_tipo_1_normal }}</td>
          <td class="text-center">{{ response.prima_tipo_2_normal }}</td>
          <td class="text-center">{{ response.prima_tipo_3_normal }}</td>
          <td class="text-center">{{ response.habitat_tipo_1_normal }}</td>
          <td class="text-center">{{ response.habitat_tipo_2_normal }}</td>
          <td class="text-center">{{ response.habitat_tipo_3_normal }}</td>
        </tr>
      </tbody>
    </table>-->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'tableInsurancePremiumRateNumberSecond',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_insurance_premium_rate_number_second: [],
	    		table_insurance_premium_rate_number_second_validate: {}
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
	      get_insurance_premium_rate_number_second: 'getInsurancePremiumRateNumberSecond',
	      event_watch_insurance_premium_rate_number_second: 'eventWatchInsurancePremiumRateNumberSecond'
	    }),
	    ...mapState({
	      getInsurancePremiumRateNumberSecond: state => state.get_insurance_premium_rate_number_second,
	      eventWatchInsurancePremiumRateNumberSecond: state => state.event_watch_insurance_premium_rate_number_second
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_insurance_premium_rate_number_second() {
  			let self = this;
  			switch(self.event_watch_insurance_premium_rate_number_second) {
  				case 'get':
			      	if (self.options.period == 'year') {
			      		self.response_data.table_insurance_premium_rate_number_second = self.get_insurance_premium_rate_number_second.table_commission_voluntary_year;
			      		self.response_data.table_insurance_premium_rate_number_second_validate = self.get_insurance_premium_rate_number_second.table_commission_voluntary_validate_year;
			      		
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_insurance_premium_rate_number_second = self.get_insurance_premium_rate_number_second.table_commission_voluntary_month;
			      		self.response_data.table_insurance_premium_rate_number_second_validate = self.get_insurance_premium_rate_number_second.table_managed_portfolio_validate_month;
			      	}

			      	$.each(self.response_data.table_insurance_premium_rate_number_second, function(index, val) {
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a == 0) {
			      				self.response_data.table_insurance_premium_rate_number_second[index][index_a] = '-';
			      			}

                  else {
                    if ($.isNumeric(val_a)) {
                      let symbol = (index_a != 'aportes') ? '%' : '';

                      val_a = (String(val_a).substr(0, 1) == '.') ? parseFloat('0'+val_a) : parseFloat(val_a);
                      self.response_data.table_insurance_premium_rate_number_second[index][index_a] = parseFloat(val_a).toFixed(2).toLocaleString('en-EN')+symbol;
                    }

                    if (index_a == 'date' && self.options.period == 'year') {
                      let date_format = val_a.split('-');
                      self.response_data.table_insurance_premium_rate_number_second[index][index_a] = date_format[1];
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