<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
				<tr>
					<th class="text-center" colspan="4">Número de nuevos afiliados al SPP por tipo de trabajador</th>
				</tr>
				<tr>
					<th class="text-center">Fecha</th>
					<th class="text-center">Dependientes</th>
					<th class="text-center">Independientes</th>
					<th class="text-center">Total</th>
				</tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(response, index) in get_new_affiliates_type_worker.table_new_affiliates" :key="index"> -->
              <tr v-for="(response, index) in response_data.table_new_affiliates" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <td class="text-center">{{ response.dependent.toLocaleString('en-EN') }}</td>
                <td class="text-center">{{ response.independent.toLocaleString('en-EN') }}</td>
                <td class="text-center">{{ (response.dependent + response.independent).toLocaleString('en-EN') }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableNewAffiliatesTypeWorker',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_new_affiliates: [],
	    		table_new_affiliates_validate: {}
	    	}
	      	/* data_response : [{
	          	date: 'ene-2019',
	          	dependent: 16465,
	          	independent: 5228,
	          	total: 21693
	        },
	        {
	          	date: 'feb-2019',
	          	dependent: 16466,
	          	independent: 5229,
	          	total: 21695
	        },
	        {
	          	date: 'mar-2019',
	          	dependent: 16467,
	          	independent: 5230,
	          	total: 21697
	        },
	        {
	          	date: 'abr-2019',
	          	dependent: 15874,
	          	independent: 5231,
	          	total: 21105
	        },
	        {
	          	date: 'may-2019',
	          	dependent: 16467,
	          	independent: 5532,
	          	total: 21999
	        },
	        {
	          	date: 'jun-2019',
	          	dependent: 16467,
	          	independent: 5532,
	          	total: 21999
	        },
	        {
	          	date: 'jul-2019',
	          	dependent: 16467,
	          	independent: 3464,
	          	total: 14508
	        }] */
	    }
  	},
  	props: ['options'],
    methods: {
  	},
  	computed: {
		...mapGetters({
	      get_new_affiliates_type_worker: 'getNewAffiliatesTypeWorker',
	      event_watch_new_affiliates_type_worker: 'eventWatchNewAffiliatesTypeWorker'
	    }),
	    ...mapState({
	      getNewAffiliatesTypeWorker: state => state.get_new_affiliates_type_worker,
	      eventWatchNewAffiliatesTypeWorker: state => state.event_watch_new_affiliates_type_worker
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_new_affiliates_type_worker() {
  			let self = this;
  			switch(self.event_watch_new_affiliates_type_worker) {
  				case 'get':
			      	if (self.options.period == 'year') {
			      		self.response_data.table_new_affiliates = self.get_new_affiliates_type_worker.table_new_affiliates_from_year;
			      		self.response_data.table_new_affiliates_validate = self.get_new_affiliates_type_worker.table_new_affiliates_validate_year;
			      		for (let i = 0; i < self.response_data.table_new_affiliates.length; i++) {
							let date = self.response_data.table_new_affiliates[i].date;
							let array_date = date.split('-');
							self.response_data.table_new_affiliates[i].date = array_date[1];
						}
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_new_affiliates = self.get_new_affiliates_type_worker.table_new_affiliates_from_month;
			      		self.response_data.table_new_affiliates_validate = self.get_new_affiliates_type_worker.table_new_affiliates_validate_month;
			      	}

			      	$.each(self.response_data.table_new_affiliates, function(index, val) {
		              	$.each(val, function(index_a, val_a) {
			                if ($.isNumeric(val_a) && val_a === 0) {
			                  self.response_data.table_new_affiliates[index][index_a] = '-';
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