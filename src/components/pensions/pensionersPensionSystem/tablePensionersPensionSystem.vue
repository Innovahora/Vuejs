<template>
	<div>
		<table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th class="text-center" colspan="7">Pensionistas por tipo de sistema de pensiones</th>
        </tr>
        <tr>
          <th class="text-center">Fecha</th>
          <th class="text-center">SNP</th>
          <th class="text-center">SPP</th>
          <th class="text-center">Pensión 65</th>
          <th class="text-center">Total de pensionistas</th>
          <th class="text-center">Población adulta mayor</th>
          <th class="text-center">Población adulta mayor sin pensión</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(response, index) in get_pensioners_pension_system.table_pensioners_pension" :key="index"> -->
        <tr v-for="(response, index) in response_data.table_pensioners_pension" :key="index">
          <td class="text-center">{{ response.date }}</td>
          <td class="text-center">{{ response.snp.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.spp.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response['65'].toLocaleString('en-EN') }}</td>
          <!-- <td class="text-center">{{ (response.snp + response.spp + response['65']).toLocaleString('en-EN') }}</td> -->
          <td class="text-center">{{ response.total_pensioners.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.numpo.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.pobsnp.toLocaleString('en-EN') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tablePensionersPensionSystem',
    components: {
  	},
    data () {
	    return {
        response_data: {
          table_pensioners_pension: [],
          table_pensioners_pension_validate: {}
        }
	    }
  	},
    methods: {
  	},
  	computed: {
		  ...mapGetters({
        get_pensioners_pension_system: 'getPensionersPensionSystem',
	      event_watch_pensioners_pension_system: 'eventWatchPensionersPensionSystem'
	    }),
	    ...mapState({
        getPensionersPensionSystem: state => state.get_pensioners_pension_system,
	      eventWatchPensionersPensionSystem: state => state.event_watch_pensioners_pension_system
	    })
  	},
  	created() {
  	},
  	watch: {
      event_watch_pensioners_pension_system() {
        let self = this;
        switch(self.event_watch_pensioners_pension_system) {
          case 'get':
            // response_data
            // if (self.options.period == 'year') {
              self.response_data.table_pensioners_pension = self.get_pensioners_pension_system.table_pensioners_pension;
              for (let i = 0; i < self.response_data.table_pensioners_pension.length; i++) {
                let date = self.response_data.table_pensioners_pension[i].date;
                let array_date = date.split('-');
                self.response_data.table_pensioners_pension[i].date = array_date[1];
              }
              // self.response_data.table_pensioners_pension_validate = self.get_pensioners_pension_system.table_pensioners_pension_validate;
              
            // }

            /*if (self.options.period == 'month') {
              self.response_data.table_pensioners_pension = self.get_pensioners_spp.table_pensioners_pension_from_month;
              self.response_data.table_pensioners_pension_validate = self.get_pensioners_spp.table_pensioners_pension_validate_from_month;
            }*/

            $.each(self.response_data.table_pensioners_pension, function(index, val) {
              $.each(val, function(index_a, val_a) {
                if ($.isNumeric(val_a) && val_a === 0) {
                  self.response_data.table_pensioners_pension[index][index_a] = '-';
                }

                else {
                  if (index_a == 'snp' || index_a == 'spp' || index_a == '65') {
                    if (self.response_data.table_pensioners_pension[index].total_pensioners == undefined) {
                      self.response_data.table_pensioners_pension[index].total_pensioners = val_a;
                    }

                    else {
                      self.response_data.table_pensioners_pension[index].total_pensioners += val_a;
                    }
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