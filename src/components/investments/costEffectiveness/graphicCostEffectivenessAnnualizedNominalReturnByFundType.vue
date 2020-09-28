<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicCostEffectivenessAnnualizedNominalReturnByFundType',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        chart: {
					type: 'column',
					style: {
						//'height':'525px',
						'background-color':'#FFFFFF'
					}/*,
					events:{
						load: function() {
							this.renderer.text('- En agosto de 1993 inicia el Fondo 2', 10, this.chartHeight+10)
							.css({
								color: '#a0a0a0',
								fontSize: '11px',
								//'font-style': 'italic'
							})
							.add();
							this.renderer.text('- En enero del 2006 inician el Fondo 1 y Fondo 3', 10, this.chartHeight+30)
							.css({
								color: '#a0a0a0',
								fontSize: '11px',
								//'font-style': 'italic'
							})
							.add();
							this.renderer.text('- En abril del 2016 inicia el Fondo 0', 10, this.chartHeight+50)
							.css({
								color: '#a0a0a0',
								fontSize: '11px',
								//'font-style': 'italic'
							})
							.add();
						}
					}*/
			    },
			    title: {
			        text: 'Rentabilidad nominal anualizada por tipo de fondo'
				},
				subtitle: {
			        text: ''
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        categories: ['1 año', '3 años', '5 años', '10 años'],
			        labels: {
			            rotation: -90
			        }
			    },
			    yAxis: {
				   	title: false
				},
				tooltip: {
			        pointFormat: '{series.name}: Porcentaje: <b>{point.y}%</b>'
			    },
			    plotOptions: {
			        line: {
			            dataLabels: {
			                enabled: false
			            },
			            enableMouseTracking: true
			        }
			    },
			    series: []
		    }
	    }
  	},
    methods: {
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
  		get_cost_effectiveness() {
  			let self = this;
  			if (Object.keys(self.get_cost_effectiveness).length > 0 && self.get_cost_effectiveness != null) {
  				self.chartOptions.title.text = 'Rentabilidad nominal anualizada por tipo de fondo: <span class="text-capitalize">'+self.get_cost_effectiveness.graphic_rentability_bar_month.dates+'<span>';


  				self.chartOptions.series = [{
			        name: 'Fondo 0',
			        data: [
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_0['1year'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_0['3years'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_0['5years'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_0['10years'][0])
	  				]
			    }, {
			        name: 'Fondo 1',
			        data: [
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_1['1year'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_1['3years'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_1['5years'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_1['10years'][0])
	  				]
			    }, {
			        name: 'Fondo 2',
			        data: [
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_2['1year'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_2['3years'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_2['5years'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_2['10years'][0])
	  				]
			    }, {
			        name: 'Fondo 3',
			        data: [
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_3['1year'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_3['3years'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_3['5years'][0]),
	  					parseFloat(self.get_cost_effectiveness.graphic_rentability_bar_month.tipo_3['10years'][0])
	  				]
			    }];

  				/*self.chartOptions.series[2].data = self.get_cost_effectiveness.graphic_rentability_bar_month.fondo_tipo_2.values;
  				self.chartOptions.series[2].data = self.get_cost_effectiveness.graphic_rentability_bar_month.fondo_tipo_3.values;*/

  				/* $.map(self.chartOptions.series, function(item, index) {
  					let delete_empty = true;
  					$.map(item.data, function(item_a, index_a) {
  						self.chartOptions.series[index].data[index_a] = parseInt(item_a);
  						if (parseInt(item_a) > 0) {
  							delete_empty = false;
  						}
  					});

	  				if (delete_empty) {
	  					delete self.chartOptions.series[index];
	  				}
	  			}); */
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>