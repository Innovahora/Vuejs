<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicManagedPortfolioEvolutionPensionFundReserveRequirementSpp',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        chart: {
			        type: 'line'
			    },
			    title: {
			        text: 'Evolución del fondo de pensiones y el encaje del SPP'
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
			    /* yAxis: {
				   	title: false
				}, */
				yAxis: [{
			        //min: 0,
			        title: false
			    }, {
			        title: false,
			        opposite: true
			    }],
			    plotOptions: {
			        line: {
			        	grouping: false,
			            shadow: false,
			            borderWidth: 0,
			            dataLabels: {
			                enabled: false,
			                /* formatter: function () {
						        return 'S/'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN');
						    } */
			            },
			            enableMouseTracking: true,
			        }
			    },
			    tooltip: {
		            formatter: function () {
				        return this.x+'<br>'+this.series.userOptions.name+': <strong>S/'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+'</strong>';
				    }
		        },
			    series: [{
			        name: 'Fondo de pensiones (Millones de S/)',
			        data: []
			    }, {
			        name: 'Encaje (Millones de S/)',
			        data: [],
			        yAxis: 1
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
  				self.chartOptions.xAxis.categories = self.get_managed_portfolio.graphic_managed_portfolio_line_month.dates;
  				self.chartOptions.series[0].data = self.get_managed_portfolio.graphic_managed_portfolio_line_month.values.fondpens;
  				self.chartOptions.series[1].data = self.get_managed_portfolio.graphic_managed_portfolio_line_month.values.encaje;

  				$.map(self.chartOptions.series, function(item, index) {
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
	  			});
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>