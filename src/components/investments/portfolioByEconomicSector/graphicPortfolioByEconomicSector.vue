<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicPortfolioByEconomicSector',
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
			        text: 'Inversión de la cartera por fondo y tipo de emisor (%)'
			    },
			    subtitle: {
			        text: ''
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        categories: [],
			        labels: {
			            rotation: 0
			        }
			    },
			    yAxis: {
				   	title: false
				},
				tooltip: {
			        formatter: function () {
				        return this.x+'<br>'+this.series.userOptions.name+': <strong>'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+'%</strong>';
				    }
			    },
			    plotOptions: {
			    	column: {
			            stacking: 'normal'
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
	     	get_portfolio_by_economic_sector: 'getPortfolioByEconomicSector',
	      	event_watch_portfolio_by_economic_sector: 'eventWatchPortfolioByEconomicSector'
	    }),
	    ...mapState({
	      	getPortfolioByEconomicSector: state => state.get_portfolio_by_economic_sector,
	      	eventWatchPortfolioByEconomicSector: state => state.event_watch_portfolio_by_economic_sector
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_portfolio_by_economic_sector() {
  			let self = this;
  			if (Object.keys(self.get_portfolio_by_economic_sector).length > 0 && self.get_portfolio_by_economic_sector != null) {
  				let table_data = self.get_portfolio_by_economic_sector.table_economic_sector_month;

  				self.chartOptions.subtitle.text = '('+table_data[table_data.length-1].date+')';

  				self.chartOptions.xAxis.categories = ['Fondo 0', 'Fondo 1', 'Fondo 2', 'Fondo 3', 'Total'];

  				self.chartOptions.series = [
  					{
				        name: 'Local',
						data: [],
						stack: 'Local'
				    }, {
				        name: 'Extranjero',
						data: [],
						stack: 'Extranjero'
				    }
  				];

  				$.each(self.get_portfolio_by_economic_sector.graphic_economic_sector_bar_tipo_fondo_month[0], function(index, val) {
  					if (index == 'local') {
  						$.each(val[0], function(index_a, val_a) {
  							self.chartOptions.series[0].data.push(val_a);
  						});
  					}

  					if (index == 'exterior') {
  						$.each(val[0], function(index_a, val_a) {
  							self.chartOptions.series[1].data.push(val_a);
  						});
  					}
  				});
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>