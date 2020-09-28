<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center" colspan="6">Aportes voluntarios sin fin previsional por AFP y tipo de fondo (En miles de S/)
                </th>
              </tr>
              <tr>
                <th class="text-center" rowspan="2">Fecha</th>
                <!--
                <th class="text-center" colspan="5">Habitat</th>
                <th class="text-center" colspan="5">Integra</th>
                <th class="text-center" colspan="5">Prima</th>
                -->
                <th class="text-center" colspan="4">Tipo de fondo</th>
                <th class="text-center" rowspan="2">Total SPP</th>
              </tr>
              <tr>
                <!--
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_tipo_0">Fondo 0</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_tipo_1">Fondo 1</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_tipo_2">Fondo 2</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_tipo_3">Fondo 3</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_total">Total</th>

                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_tipo_0">Fondo 0</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_tipo_1">Fondo 1</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_tipo_2">Fondo 2</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_tipo_3">Fondo 3</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_total">Total</th>

                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_tipo_0">Fondo 0</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_tipo_1">Fondo 1</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_tipo_2">Fondo 2</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_tipo_3">Fondo 3</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_total">Total</th>
                -->
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_tipo_0">Fondo 0</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_tipo_1">Fondo 1</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_tipo_2">Fondo 2</th>
                <th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_tipo_3">Fondo 3</th>
                <!--<th class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_spp">Total</th>-->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in response_data.table_apv_pension_without_purpose" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <!--
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_tipo_0">{{ response.habitat_tipo_0 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_tipo_1">{{ response.habitat_tipo_1 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_tipo_2">{{ response.habitat_tipo_2 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_tipo_3">{{ response.habitat_tipo_3 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.habitat_total">{{ response.habitat_total }}</td>

                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_tipo_0">{{ response.integra_tipo_0 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_tipo_1">{{ response.integra_tipo_1 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_tipo_2">{{ response.integra_tipo_2 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_tipo_3">{{ response.integra_tipo_3 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.integra_total">{{ response.integra_total }}</td>

                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_tipo_0">{{ response.prima_tipo_0 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_tipo_1">{{ response.prima_tipo_1 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_tipo_2">{{ response.prima_tipo_2 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_tipo_3">{{ response.prima_tipo_3 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.prima_total">{{ response.prima_total }}</td>
                -->
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_tipo_0">{{ response.total_tipo_0 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_tipo_1">{{ response.total_tipo_1 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_tipo_2">{{ response.total_tipo_2 }}</td>
                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_tipo_3">{{ response.total_tipo_3 }}</td>
                <!--<td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_spp">{{ response.total_tipo_3 }}</td>-->

                <td class="text-center" no-v-if="response_data.table_apv_pension_without_purpose_validate.total_spp">{{ response.total_spp }}</td>
              </tr>
            </tbody>
        </table>
        <div><strong>No existe información desagregada por tipo de fondo antes del 2009.</strong></div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'tableApvWithOutPensionEnd',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_apv_pension_without_purpose: [],
	    		table_apv_pension_without_purpose_validate: {}
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
	      get_apv_with_out_pension_end: 'getApvWithOutPensionEnd',
	      event_watch_apv_with_out_pension_end: 'eventWatchApvWithOutPensionEnd'
	    }),
	    ...mapState({
	      getApvWithOutPensionEnd: state => state.get_apv_with_out_pension_end,
	      eventWatchApvWithOutPensionEnd: state => state.event_watch_apv_with_out_pension_end
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_apv_with_out_pension_end() {
  			let self = this;

  			switch(self.event_watch_apv_with_out_pension_end) {
  				case 'get':
			      	if (self.options.period == 'year') {
			      		self.response_data.table_apv_pension_without_purpose = self.get_apv_with_out_pension_end.table_apv_pension_without_purpose_year;
			      		self.response_data.table_apv_pension_without_purpose_validate = self.get_apv_with_out_pension_end.table_apv_pension_without_purpose_validate_year;
			      		
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_apv_pension_without_purpose = self.get_apv_with_out_pension_end.table_apv_pension_without_purpose_month;
			      		self.response_data.table_apv_pension_without_purpose_validate = self.get_apv_with_out_pension_end.table_apv_pension_without_purpose_validate_month;
			      	}

			      	$.each(self.response_data.table_apv_pension_without_purpose, function(index, val) {
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a === 0) {
			      				self.response_data.table_apv_pension_without_purpose[index][index_a] = '-';
			      			}

                  else {
                    if ($.isNumeric(val_a)) {
                      val_a = (String(val_a).substr(0, 1) == '.') ? '0'+val_a : val_a;
                      self.response_data.table_apv_pension_without_purpose[index][index_a] = parseFloat(val_a).toFixed(2).toLocaleString('en-EN');
                    }

                    if (index_a == 'date' && self.options.period == 'year') {
                      let date_format = val_a.split('-');
                      self.response_data.table_apv_pension_without_purpose[index][index_a] = date_format[1];
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