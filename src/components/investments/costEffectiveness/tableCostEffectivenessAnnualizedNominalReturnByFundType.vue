<template>
	<div>
		<table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th colspan="6" class="text-center">Rentabilidad nominal anualizada por tipo de fondo</th>
        </tr>
        <tr>
          <!-- <th class="text-center">Fecha</th> -->
          <th class="text-center">Tipo de fondo</th>
          <th class="text-center">1 año</th>
          <th class="text-center">3 años</th>
          <th class="text-center">5 años</th>
          <th class="text-center">10 años</th>
          <th class="text-center">Inicio del fondo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(response, index) in response_data.table_cost_effectiveness[0]" :key="index">
          <template v-if="index != 'date'">
            <td class="text-center">{{ 'Fondo '+index.substring(5) }}</td>
            <td class="text-center" v-for="(response_a, index_a) in response">{{ response_a }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'tableCostEffectivenessAnnualizedNominalReturnByFundType',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_cost_effectiveness: [],
	    		table_cost_effectiveness_validate: {}
	    	}
	    }
  	},
    methods: {
	    imgDefaultUser(event) {
	    	event.target.src = img_user;
	    }
  	},
  	computed: {
		  ...mapGetters({
	      get_cost_effectiveness: 'getCostEffectiveness',
	      event_watch_cost_effectiveness: 'eventWatchCostEffectiveness'
	    }),
	    ...mapState({
	      getCostEffectiveness: state => state.get_cost_effectiveness,
	      eventWatchCostEffectiveness: state => state.event_watch_cost_effectiveness
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_cost_effectiveness() {
  			let self = this;
  			switch(self.event_watch_cost_effectiveness) {
  				case 'get':
		      		self.response_data.table_cost_effectiveness = self.get_cost_effectiveness.table_rentability_month;
		      		self.response_data.table_rentability_validate = self.get_cost_effectiveness.table_rentability_validate_month;

			      	$.each(self.response_data.table_cost_effectiveness, function(index, val) {
			      		$.each(val, function(index_a, val_a) {
							if (index_a != 'date') {
								$.each(val_a, function(index_b, val_b) {
											if ($.isNumeric(val_b) && val_b === 0) {
												self.response_data.table_cost_effectiveness[index][index_a][index_b] = '-';
											}

								else {
									if ($.isNumeric(val_b)) {
									self.response_data.table_cost_effectiveness[index][index_a][index_b] = parseFloat(val_b).toFixed(2)+'%';
									}

									if (index_a == 'date' && self.options.period == 'year') {
									let date_format = val_a.split('-');
									self.response_data.table_cost_effectiveness[index][index_a] = date_format[1];
									}
								}
								});
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