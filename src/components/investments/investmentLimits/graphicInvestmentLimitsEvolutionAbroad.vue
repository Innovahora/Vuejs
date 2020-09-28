<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicInvestmentLimitsEvolutionAbroad',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        /*chart: {
			        type: 'area'
			    },*/
			    title: {
			        text: 'Evolución del límite de inversión en el exterior'
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
					//min: 35
				},
				tooltip: {
			        pointFormat: '{series.name}: Total: <b>{point.y}%</b>'
			    },
			    plotOptions: {
			        line: {
			            dataLabels: {
			                enabled: false
			            },
			            enableMouseTracking: true
			        }
			    },
			    series: [{
			        name: 'Inversión efectiva',
			        data: [],
			        type: 'area'
			    }, {
			        name: 'Límite operativo',
			        data: [],
			        type: 'line'
			    }, {
			        name: 'Límite legal',
			        data: [],
			        type: 'line'
			    }]
		    }
	    }
  	},
    methods: {
  	},
  	computed: {
		...mapGetters({
	      get_investment_limits: 'getInvestmentLimits',
	      event_watch_investment_limits: 'eventWatchInvestmentLimits'
	    }),
	    ...mapState({
	      getInvestmentLimits: state => state.get_investment_limits,
	      eventWatchInvestmentLimits: state => state.event_watch_investment_limits
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_investment_limits() {
			let self = this,
				min_values = [];
  			if (Object.keys(self.get_investment_limits).length > 0 && self.get_investment_limits != null) {
  				self.chartOptions.xAxis.categories = self.get_investment_limits.graphic_InvestmentLimits_line_month.dates;
  				self.chartOptions.series[0].data = self.get_investment_limits.graphic_InvestmentLimits_line_month.values.efective;
  				self.chartOptions.series[1].data = self.get_investment_limits.graphic_InvestmentLimits_line_month.values.operative;
  				self.chartOptions.series[2].data = self.get_investment_limits.graphic_InvestmentLimits_line_month.values.legal;

  				$.map(self.chartOptions.series, function(item, index) {
					let delete_empty = true;
					let min_value = Math.min.apply(null, self.chartOptions.series[index].data);
					min_values.push(min_value);
  					$.map(item.data, function(item_a, index_a) {
  						self.chartOptions.series[index].data[index_a] = parseInt(item_a);
  						if (parseInt(item_a) > 0) {
  							delete_empty = false;
  						}
  					});

	  				if (delete_empty) {
	  					delete self.chartOptions.series[index];
	  				}
				});
				
			}
			let min_y = Math.min.apply(null, min_values);
			if(min_y>35){
				self.chartOptions.yAxis.min = 35;
			}else{
				self.chartOptions.yAxis.min = min_y;
			}
  		}
  	},
  	mounted() {

  	}
}
</script>