<template>
	<div>
		<table class="table table-sm table-bordered overflow-x">
            <thead>
				<tr>
					<th class="text-center" :colspan="response_data.table_historical_active_affiliates_validate.total+2">Afiliados activos al sistema de pensiones </th>
				</tr>
				<tr>
					<th class="text-center">Fecha</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.integra">Integra</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.habitat">Habitat</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.profuturo">Profuturo</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.prima">Prima</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.horizonte">Horizonte</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.union_vida">Unión Vida</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.union">Unión</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.nueva_vida">Nueva Vida</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.el_roble">El Roble</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.providencia">Providencia</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.megafondo">Megafondo</th>
					<th class="text-center">Total SPP</th>
					<th class="text-center" v-if="response_data.table_historical_active_affiliates_validate.sin_afp">Total SNP</th>
				</tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(response, index) in get_active_affiliates_according_afp.table_historical_active_affiliates" :key="index"> -->
              <tr v-for="(response, index) in response_data.table_historical_active_affiliates" :key="index">
                <td class="text-center text-capitalize">{{ response.date }}</td>
                <!-- <td class="text-center">{{ response.integra.toLocaleString('de-DE', { style: 'decimal', decimal: '2' }) }}</td> -->
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.integra">{{ response.integra.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.habitat">{{ response.habitat.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.profuturo">{{ response.profuturo.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.prima">{{ response.prima.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.horizonte">{{ response.horizonte.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.union_vida">{{ response.union_vida.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.union">{{ response.union.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.nueva_vida">{{ response.nueva_vida.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.el_roble">{{ response.el_roble.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.providencia">{{ response.providencia.toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.megafondo">{{ response.megafondo.toLocaleString('en-EN') }}</td>
                <td class="text-center">{{ (response.total_spp).toLocaleString('en-EN') }}</td>
                <td class="text-center" v-if="response_data.table_historical_active_affiliates_validate.sin_afp">{{ response.sin_afp.toLocaleString('en-EN') }}</td>
                <!-- <td class="text-center">{{ (response.integra + response.habitat + response.profuturo + response.prima + response.horizonte + response.union_vida + response.union + response.nueva_vida + response.el_roble + response.providencia + response.megafondo).toLocaleString('en-EN') }}</td> -->
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableHistoricalActiveAffiliates',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_historical_active_affiliates: [],
	    		table_historical_active_affiliates_validate: {}
	    	}
	      	/* data_response : [{
	          	date: 'feb-2019',
	          	integra: 5.795,
	          	habitat: 2.893,
	          	profuturo: 4.575,
	          	prima: 690,
	          	total_spp: 14.881
	        },
	        {
	          	date: 'mar-2019',
	          	integra: 36.270,
	          	habitat: 36.878,
	          	profuturo: 20.322,
	          	prima: 12.398,
	          	total_spp: 124.213
	        },
	        {
	          	date: 'abr-2019',
	          	integra: 13.270,
	          	habitat: 13.878,
	          	profuturo: 20.322,
	          	prima: 12.398,
	          	total_spp: 124.213
	        },
	        {
	          	date: 'may-2019',
	          	integra: 3.6,
	          	habitat: 90.03,
	          	profuturo: 20.322,
	          	prima: 12.398,
	          	total_spp: 124.213
	        },
	        {
	          date: 'jun-2019',
	          integra: 36.270,
	          habitat: 15.96,
	          profuturo: 20.322,
	          prima: 12.398,
	          total_spp: 124.213
	        },
	        {
	          	date: 'jul-2019',
	          	integra: 16.270,
	          	habitat: 36.4,
	          	profuturo: 20.322,
	          	prima: 10.398,
	          	total_spp: 124.213
	        },
	        {
	          	date: 'ago-2019',
	          	integra: 36.270,
	          	habitat: 70.878,
	          	profuturo: 20.322,
	          	prima: 12.398,
	          	total_spp: 124.213
	        }] */
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
	      get_active_affiliates_according_afp: 'getActiveAffiliatesAccordingAfp',
	      event_watch_active_affiliates_according_afp: 'eventWatchActiveAffiliatesAccordingAfp'
	    }),
	    ...mapState({
	      getActiveAffiliatesAccordingAfp: state => state.get_active_affiliates_according_afp,
	      eventWatchActiveAffiliatesAccordingAfp: state => state.event_watch_active_affiliates_according_afp
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_active_affiliates_according_afp() {
  			let self = this;
  			switch(self.event_watch_active_affiliates_according_afp) {
  				case 'get':
			      	// response_data
			      	if (self.options.period == 'year') {
						self.response_data.table_historical_active_affiliates = self.get_active_affiliates_according_afp.table_historical_active_affiliates_from_year;
			      		self.response_data.table_historical_active_affiliates_validate = self.get_active_affiliates_according_afp.table_historical_active_affiliates_validate_year;
			      		for (let i = 0; i < self.response_data.table_historical_active_affiliates.length; i++) {
							let date = self.response_data.table_historical_active_affiliates[i].date;
							let array_date = date.split('-');
							self.response_data.table_historical_active_affiliates[i].date = array_date[1];
						}
			      	}

			      	if (self.options.period == 'month') {
			      		self.response_data.table_historical_active_affiliates = self.get_active_affiliates_according_afp.table_historical_active_affiliates_from_month;
			      		self.response_data.table_historical_active_affiliates_validate = self.get_active_affiliates_according_afp.table_historical_active_affiliates_validate_month;
			      	}

			      	$.each(self.response_data.table_historical_active_affiliates, function(index, val) {
			      		self.response_data.table_historical_active_affiliates[index].total_spp = val.integra + val.habitat + val.profuturo + val.prima + val.horizonte + val.union_vida + val.union + val.nueva_vida + val.el_roble + val.providencia + val.megafondo;
			      		$.each(val, function(index_a, val_a) {
			      			if ($.isNumeric(val_a) && val_a === 0) {
			      				self.response_data.table_historical_active_affiliates[index][index_a] = '-';
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