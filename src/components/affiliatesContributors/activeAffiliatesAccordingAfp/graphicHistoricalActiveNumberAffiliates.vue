<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicHistoricalActiveNumberAffiliates',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
		        chart: {
			        type: 'line'
			    },
			    title: {
			        text: 'Cantidad de afiliados activos'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        categories: []
			    },
			    yAxis: {
				   	title: false
				},
			    plotOptions: {
			        line: {
			            dataLabels: {
			                enabled: true
			            },
			            enableMouseTracking: false
			        }
			    },
			    series: [{
			        name: 'Integra',
			        data: []
			    }, {
			        name: 'Habitat',
			        data: []
			    }, {
			        name: 'Prima',
			        data: []
			    }, {
			        name: 'Profuturo',
			        data: []
			    }, {
		            name: 'Horizonte',
		            data: []
		        }, {
		            name: 'Union vida',
		            data: []
		        }, {
		            name: 'Union',
		            data: []
		        }, {
		            name: 'Nueva vida',
		            data: []
		        }, {
		            name: 'El roble',
		            data: []
		        }, {
		            name: 'Providencia',
		            data: []
		        }, {
		            name: 'Megafondo',
		            data: []
		        }, {
		            name: 'Afiliados SNP',
		            data: []
		        }]
		    }
	    }
  	},
    methods: {
  	},
  	computed: {
		...mapGetters({
	      	get_active_affiliates_according_afp: 'getActiveAffiliatesAccordingAfp'
	    }),
	    ...mapState({
	      	getActiveAffiliatesAccordingAfp: state => state.get_active_affiliates_according_afp
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_active_affiliates_according_afp() {
  			let self = this;
  			if (Object.keys(self.get_active_affiliates_according_afp).length > 0 && self.get_active_affiliates_according_afp != null) {
  				self.chartOptions.xAxis.categories = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.dates;
  				self.chartOptions.series[0].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.integra;
  				self.chartOptions.series[1].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.habitat;
  				self.chartOptions.series[2].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.prima;
  				self.chartOptions.series[3].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.profuturo;
  				self.chartOptions.series[4].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.horizonte;
  				self.chartOptions.series[5].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.union_vida;
  				self.chartOptions.series[6].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.union;
  				self.chartOptions.series[7].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.nueva_vida;
  				self.chartOptions.series[8].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.el_roble;
  				self.chartOptions.series[9].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.providencia;
  				self.chartOptions.series[10].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.megafondo;
  				self.chartOptions.series[11].data = self.get_active_affiliates_according_afp.graphic_historical_active_number_affiliates.values.sin_afp;

  				$.map(self.chartOptions.series, function(item, index) {
  					let delete_empty = true;
  					$.map(item.data, function(item_a, index_a) {
  						if (item_a > 0) {
  							delete_empty = false;
  						}
  					});

	  				if (delete_empty) {
	  					delete self.chartOptions.series[index];
	  				}
	  			});
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>