<template>
	<div>
		<table class="table table-sm table-bordered">
	      <thead>
			  	<tr>
					<th class="text-center" :colspan="6">Afiliados y cotizantes por sistema de pensiones</th>
					</tr>
				<tr>
					<th class="text-center" rowspan="2" style="vertical-align: middle">Fecha</th>
					<th class="text-center" colspan="2">SPP</th>
					<th class="text-center" colspan="2">SNP</th>
					<th class="text-center" rowspan="2" style="vertical-align: middle">PEA <i class="fas fa-info-circle" data-toggle="tooltip" data-placement="right" title="PEA: población económicamente activa"></i></th>
				</tr>
				<tr>
					<th class="text-center">Afiliados</th>
					<th class="text-center">Cotizantes</th>
					<th class="text-center">Afiliados</th>
					<th class="text-center">Cotizantes</th>
				</tr>
	      </thead>
	      <tbody>
	        <!-- <tr v-for="(response, index) in get_contributors_pea.table_contributors_affiliates_pea_year" :key="index"> -->
	        <!-- <tr v-for="(response, index) in get_contributors_pea.table_contributors_affiliates_pea_from_year" :key="index"> -->
	        <tr v-for="(response, index) in response_data.table_contributors_pea" :key="index">
	          <td class="text-center text-capitalize">{{ response.date }}</td>
	          <td class="text-center">{{ response.affiliates_spp.toLocaleString('en-EN') }}</td>
	          <td class="text-center">{{ response.contributors_spp.toLocaleString('en-EN') }}</td>
	          <td class="text-center">{{ response.affiliates_snp.toLocaleString('en-EN') }}</td>
	          <td class="text-center">{{ response.contributors_snp.toLocaleString('en-EN') }}</td>
	          <td class="text-center">{{ response.pea.toLocaleString('en-EN') }}</td>
	        </tr>
	      </tbody>
	    </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableActiveContributorsFromYear',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_contributors_pea: [],
	    		table_contributors_pea_validate: {}
	    	}
	    }
  	},
  	props: ['options'],
    methods: {
  	},
  	computed: {
		...mapGetters({
	      get_contributors_pea: 'getContributorsPea',
	      event_watch_contributors_pea: 'eventWatchContributorsPea'
	      // event_error_watch: 'eventErrorWatch'
	    }),
	    ...mapState({
	      getContributorsPea: state => state.get_contributors_pea,
	      eventWatchContributorsPea: state => state.event_watch_contributors_pea
	      // eventErrorWatch: state => state.event_error_watch
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_contributors_pea() {
  			let self = this;
  			switch(self.event_watch_contributors_pea) {
  				case 'get':
			      	// response_data
			      	if (self.options.period == 'year') {
			      		self.response_data.table_contributors_pea = self.get_contributors_pea.table_contributors_affiliates_pea_from_year;
			      		self.response_data.table_contributors_pea_validate = self.get_contributors_pea.table_contributors_affiliates_pea_year_validate;
			      		for (let i = 0; i < self.response_data.table_contributors_pea.length; i++) {
							let date = self.response_data.table_contributors_pea[i].date;
							let array_date = date.split('-');
							self.response_data.table_contributors_pea[i].date = array_date[1];
						}
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_contributors_pea = self.get_contributors_pea.table_contributors_affiliates_pea_from_month;
			      		self.response_data.table_contributors_pea_validate = self.get_contributors_pea.table_contributors_affiliates_pea_from_month_validate;
			      	}

			      	$.each(self.response_data.table_contributors_pea, function(index, val) {
			      		self.response_data.table_contributors_pea[index].total_spp = val.integra + val.habitat + val.profuturo + val.prima + val.horizonte + val.union_vida + val.union + val.nueva_vida + val.el_roble + val.providencia + val.megafondo;
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a === 0) {
			      				self.response_data.table_contributors_pea[index][index_a] = '-';
			      			}

			      			else {
			      				if (index_a != 'date') {
			      					self.response_data.table_contributors_pea[index][index_a] = parseFloat(self.response_data.table_contributors_pea[index][index_a]);
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