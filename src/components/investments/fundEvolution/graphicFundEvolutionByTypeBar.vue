<template>
	<div class="text-no-capitalize">
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicFundEvolutionByTypeBar',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        chart: {
			        type: 'column'
			    },
			    title: {
					//text: 'Evolución del fondo de pensiones por tipo de fondo de pensiones (en miles de S/)'
					text: 'Evolución del fondo de pensiones por tipo de fondo'
				},
				subtitle: {
			    	text: '(En miles de S/)'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        categories: [],
			        labels: {
			            rotation: -90
			        }
			    },
			    yAxis: {
					title: false,
					tickInterval: 20000000,
				},
				tooltip: {
			        pointFormat: '{series.name}: Total: <b>S/. {point.y}</b>'
			    },
			    plotOptions: {
			        column: {
			            stacking: 'normal'
			        },
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
	      get_fund_evolution: 'getFundEvolution',
	      event_watch_fund_evolution: 'eventWatchFundEvolution'
	    }),
	    ...mapState({
	      getFundEvolution: state => state.get_fund_evolution,
	      eventWatchFundEvolution: state => state.event_watch_fund_evolution
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_fund_evolution() {
			let self = this;
			let series_tmp = [
					{
						name: 'Fondo 0',
						data: []
					}, {
						name: 'Fondo 1',
						data: []
					}, {
						name: 'Fondo 2',
						data: []
					}, {
						name: 'Fondo 3',
						data: []
					}
				]  
  			if (Object.keys(self.get_fund_evolution).length > 0 && self.get_fund_evolution != null) {
				self.chartOptions.xAxis.categories = self.get_fund_evolution.graphic_fund_evolution_bar.dates;

  				series_tmp[0].data = self.get_fund_evolution.graphic_fund_evolution_bar.fondo_tipo_0.values;
  				series_tmp[1].data = self.get_fund_evolution.graphic_fund_evolution_bar.fondo_tipo_1.values;
  				series_tmp[2].data = self.get_fund_evolution.graphic_fund_evolution_bar.fondo_tipo_2.values;
  				series_tmp[3].data = self.get_fund_evolution.graphic_fund_evolution_bar.fondo_tipo_3.values;

  				$.map(series_tmp, function(item, index) {
  					let delete_empty = true;
  					$.map(item.data, function(item_a, index_a) {
  						series_tmp[index].data[index_a] = parseInt(item_a);
  						if (parseInt(item_a) > 0) {
  							delete_empty = false;
  						}
  					});

	  				if (delete_empty) {
	  					delete self.chartOptions.series[index];
	  				}
				});
				self.chartOptions.series = series_tmp;  
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>