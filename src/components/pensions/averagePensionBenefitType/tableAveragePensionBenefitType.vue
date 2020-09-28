<template>
	<div>
		<table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th class="text-center" colspan="7">Pensión promedio por tipo de beneficio</th>
        </tr>
        <tr>
          <th class="text-center" rowspan="2" style="vertical-align: middle">Fecha</th>
          <th class="text-center" colspan="3">SPP</th>
          <th class="text-center" colspan="3">SNP</th>
        </tr>
        <tr>
          <th class="text-center">Jubilación</th>
          <th class="text-center">Invalidez</th>
          <th class="text-center">Sobrevivencia</th>
          <th class="text-center">Jubilación</th>
          <th class="text-center">Invalidez</th>
          <th class="text-center">Sobrevivencia</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(response, index) in get_average_pension_benefit_type.table_average_pension" :key="index"> -->
        <tr v-for="(response, index) in response_data.table_average_pension" :key="index">
          <td class="text-center text-capitalize">{{ response.date }}</td>
          <td class="text-center">{{ (response.spp_retirement).toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ (response.spp_disability).toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ (response.spp_survival).toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ (response.snp_retirement).toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ (response.snp_disability).toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ (response.snp_survival).toLocaleString('en-EN') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableAveragePensionBenefitType',
    components: {
  	},
    data () {
	    return {
        response_data: {
          table_average_pension: [],
          table_average_pension_validate: {}
        }
	    }
  	},
    props: ['options'],
    methods: {
  	},
  	computed: {
		  ...mapGetters({
	      get_average_pension_benefit_type: 'getAveragePensionBenefitType',
        event_watch_average_pension_benefit_type: 'eventWatchAveragePensionBenefitType'
	    }),
	    ...mapState({
        getAveragePensionBenefitType: state => state.get_average_pension_benefit_type,
	      eventWatchAveragePensionBenefitType: state => state.event_watch_average_pension_benefit_type
	    })
  	},
  	created() {
  	},
  	watch: {
      event_watch_average_pension_benefit_type() {
        let self = this;
        switch(self.event_watch_average_pension_benefit_type) {
          case 'get':
            if (self.options.period == 'year') {
              self.response_data.table_average_pension = self.get_average_pension_benefit_type.table_average_pension_from_year;
              self.response_data.table_average_pension_validate = self.get_average_pension_benefit_type.table_average_pension_validate_from_year;
              for (let i = 0; i < self.response_data.table_average_pension.length; i++) {
                let date = self.response_data.table_average_pension[i].date;
                let array_date = date.split('-');
                self.response_data.table_average_pension[i].date = array_date[1];
              }
            }

            if (self.options.period == 'month') {
              self.response_data.table_average_pension = self.get_average_pension_benefit_type.table_average_pension_from_month;
              self.response_data.table_average_pension_validate = self.get_average_pension_benefit_type.table_average_pension_validate_from_month;
            }

            $.each(self.response_data.table_average_pension, function(index, val) {
              $.each(val, function(index_a, val_a) {
                if ($.isNumeric(val_a) && val_a == 0) {
                  self.response_data.table_average_pension[index][index_a] = '-';
                }else if(index=='date'){
                  self.response_data.table_average_pension[index][index_a] = parseInt(self.response_data.table_average_pension[index][index_a])
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