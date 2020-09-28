<template>
	<div>
		<table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th class="text-center" rowspan-no="2">Fecha</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.regular_early_total">Jubilación legal</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.ordinary_regime_total">Jubilación anticipada<br>Régimen ordinario</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.extraordinary_regime_total">Jubilación anticipada por riesgo<br>Régimen extraordinario</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.generic_regime_total">Jubilación anticipada<br>Régimen genérico</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.subcategory_legal_retirement_total">Régimen especial de jubilación<br>Anticipada para desempleados</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.advanced_total">Jubilación adelantada del decreto ley N° 19990</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.subcategory_minimum_pension_27617_total">Pensión mínima 27617</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.subcategory_minimum_pension_28991_total">Pensión mínima 28991</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.especial_regime_28991_total">REJA 28991</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.especial_regime_29426_total">REJA 29426</th>
          <th class="text-center" colspan-no="3" v-if="response_data.table_retirement_pensioners_validate.terminal_disease_total">Jubilación anticipada por enfermedad terminal o cáncer</th>
        </tr>
        <!-- tr>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
          <th class="text-center">Hombres</th>
          <th class="text-center">Mujeres</th>
          <th class="text-center">Total</th>
        </tr -->
      </thead>
      <tbody>
        <tr v-for="(response, index) in get_new_retirement_pensioners.table_retirement_pensioners" :key="index">
        <tr v-for="(response, index) in response_data.table_retirement_pensioners" :key="index">
          <td class="text-center">{{ response.date }}</td>
          <!-- <td class="text-center">{{ response.regular_early_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.regular_early_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.regular_early_total">{{ response.regular_early_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.ordinary_regime_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.ordinary_regime_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.ordinary_regime_total">{{ response.ordinary_regime_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.extraordinary_regime_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.extraordinary_regime_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.extraordinary_regime_total">{{ response.extraordinary_regime_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.generic_regime_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.generic_regime_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.generic_regime_total">{{ response.generic_regime_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.subcategory_legal_retirement_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.subcategory_legal_retirement_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.subcategory_legal_retirement_total">{{ response.subcategory_legal_retirement_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.advanced_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.advanced_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.advanced_total">{{ response.advanced_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.subcategory_minimum_pension_27617_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.subcategory_minimum_pension_27617_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.subcategory_minimum_pension_27617_total">{{ response.subcategory_minimum_pension_27617_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.subcategory_minimum_pension_28991_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.subcategory_minimum_pension_28991_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.subcategory_minimum_pension_28991_total">{{ response.subcategory_minimum_pension_28991_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.especial_regime_28991_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.especial_regime_28991_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.especial_regime_28991_total">{{ response.especial_regime_28991_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.especial_regime_29426_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.especial_regime_29426_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.especial_regime_29426_total">{{ response.especial_regime_29426_total.toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ response.terminal_disease_men.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.terminal_disease_women.toLocaleString('en-EN') }}</td> -->
          <td class="text-center" v-if="response_data.table_retirement_pensioners_validate.terminal_disease_total">{{ response.terminal_disease_total.toLocaleString('en-EN') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableNewRetirementPensioners',
    components: {
  	},
    data () {
	    return {
        response_data: {
          table_retirement_pensioners: [],
          table_retirement_pensioners_validate: {}
        }
	    }
  	},
    props: ['options'],
    methods: {
  	},
  	computed: {
		  ...mapGetters({
	      get_new_retirement_pensioners: 'getNewRetirementPensioners',
        event_watch_new_retirement_pensioners: 'eventWatchNewRetirementPensioners'
	    }),
	    ...mapState({
	      getNewRetirementPensioners: state => state.get_new_retirement_pensioners,
        eventWatchNewRetirementPensioners: state => state.event_watch_new_retirement_pensioners
	    })
  	},
  	created() {
  	},
  	watch: {
      event_watch_new_retirement_pensioners() {
        switch(this.event_watch_new_retirement_pensioners) {
          case 'get':
            // response_data
            if (this.options.period == 'year') {
              this.response_data.table_retirement_pensioners = this.get_new_retirement_pensioners.table_retirement_pensioners_from_year;
              this.response_data.table_retirement_pensioners_validate = this.get_new_retirement_pensioners.table_retirement_pensioners_validate_from_year;
              
            }

            if (this.options.period == 'month') {
              this.response_data.table_retirement_pensioners = this.get_new_retirement_pensioners.table_retirement_pensioners_from_month;
              this.response_data.table_retirement_pensioners_validate = this.get_new_retirement_pensioners.table_retirement_pensioners_validate_from_month;
            }
          break;
        }
      }
  	},
  	mounted() {
  	}
}
</script>

<style>
  table thead th {
    vertical-align: middle !important;
  }
</style>