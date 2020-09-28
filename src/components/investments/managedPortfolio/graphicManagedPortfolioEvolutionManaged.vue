<template>
	<div class="text-no-capitalize">
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicManagedPortfolioEvolutionManaged',
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
			        text: 'Evolución de la cartera administrada'
			    },
			    subtitle: {
			    	text: '(En millones de S/)'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        type: 'category',
			        labels: {
			            style: {
			                fontSize: '10px',
			                fontFamily: 'Verdana, sans-serif'
						},
						rotation: -90
			        }
			    },
			    yAxis: {
			        //min: 0,
			        title: false
			    },
			    legend: {
			        enabled: false
			    },
			    plotOptions: {
			        column: {
			            dataLabels: {
			                enabled: true,
			                // format: '{point.y:,.2f}'
			                formatter: function () {
						        // return Highcharts.numberFormat(this.y,2);
						        //return 'S/'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN');
						    }
			            },
			            enableMouseTracking: true
			        }
			    },
			    series: [{
			        name: 'Evolución',
			        data: []
			    }]
		    }
	    }
  	},
    methods: {
  	},
  	computed: {
		...mapGetters({
	      	get_managed_portfolio: 'getManagedPortfolio'
	    }),
	    ...mapState({
	      	getManagedPortfolio: state => state.get_managed_portfolio
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_managed_portfolio() {
  			let self = this;
  			if (Object.keys(self.get_managed_portfolio).length > 0 && self.get_managed_portfolio != null) {
  				self.chartOptions.series[0].data = [];
  				$.each(self.get_managed_portfolio.graphic_managed_portfolio_bar_year.values.cartera, function(index, val) {
  					let date_format = self.get_managed_portfolio.graphic_managed_portfolio_bar_year.dates[index].split('-');
  					self.chartOptions.series[0].data.push([
  						date_format[1], 
  						parseInt(val)
  					]);
  				});
				let min_y = Math.min.apply(null, self.get_managed_portfolio.graphic_managed_portfolio_bar_year.values.cartera);
				self.chartOptions.yAxis.min = min_y;
			}
  		}
  	},
  	mounted() {

  	}
}
</script>