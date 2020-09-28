<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center" colspan="5">Pensionistas del SPP</th>
              </tr>
              <tr>
                <th class="text-center">Fecha</th>
                <th class="text-center" v-if="response_data.table_pensioners_validate.retirement">Jubilación</th>
                <th class="text-center" v-if="response_data.table_pensioners_validate.disability">Invalidez</th>
                <th class="text-center" v-if="response_data.table_pensioners_validate.survival">Sobrevivencia</th>
                <th class="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(response, index) in get_pensioners_spp.table_pensioners" :key="index"> -->
              <tr v-for="(response, index) in response_data.table_pensioners" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center" v-if="response_data.table_pensioners_validate.retirement">{{ response.retirement.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_pensioners_validate.disability">{{ response.disability.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_pensioners_validate.survival">{{ response.survival.toLocaleString('en-EN') }}</td>
                <td class="text-center">{{ response.total.toLocaleString('en-EN') }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tablePensionersSpp',
    components: {
  	},
    data () {
	    return {
        response_data: {
          table_pensioners: [],
          table_pensioners_validate: {}
        }
	    }
  	},
    props: ['options'],
    methods: {
  	},
  	computed: {
		  ...mapGetters({
	      get_pensioners_spp: 'getPensionersSpp',
        event_watch_pensioners_spp: 'eventWatchPensionersSpp'
	    }),
	    ...mapState({
	      getPensionersSpp: state => state.get_pensioners_spp,
        eventWatchPensionersSpp: state => state.event_watch_pensioners_spp
	    })
  	},
  	created() {
  	},
  	watch: {
      event_watch_pensioners_spp() {
        let self = this;
        switch(self.event_watch_pensioners_spp) {
          case 'get':
            // response_data
            if (self.options.period == 'year') {
              self.response_data.table_pensioners = self.get_pensioners_spp.table_pensioners_from_year;
              self.response_data.table_pensioners_validate = self.get_pensioners_spp.table_pensioners_validate_from_year;
              for (let i = 0; i < self.response_data.table_pensioners.length; i++) {
                let date = self.response_data.table_pensioners[i].date;
                let array_date = date.split('-');
                self.response_data.table_pensioners[i].date = array_date[1];
              }
            }

            if (self.options.period == 'month') {
              self.response_data.table_pensioners = self.get_pensioners_spp.table_pensioners_from_month;
              self.response_data.table_pensioners_validate = self.get_pensioners_spp.table_pensioners_validate_from_month;
            }

            $.each(self.response_data.table_pensioners, function(index, val) {
              $.each(val, function(index_a, val_a) {
                if ($.isNumeric(val_a) && val_a === 0) {
                  self.response_data.table_pensioners[index][index_a] = '-';
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