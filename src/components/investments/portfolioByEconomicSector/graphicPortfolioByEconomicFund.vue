<template>
	<div>
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
			        text: 'Inversión de la cartera por sector económico y tipo de emisor (%)'
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
			            rotation: -90
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
		orderList(series = [], categories = []) {
			let categories_tmp = [], 
				series_tmp = [
					{
						name: 'Local',
						data: []
					}, {
						name: 'Extranjero',
						data: []
					}
				],
				max_value,
				max_index;

			let series_total = [],
				total,
				serie_0,
				serie_1;
			for (let i = 0; i < series[0].data.length; i++) {
				serie_0 = series[0].data[i];
				serie_1 = series[1].data[i];
				serie_0 = serie_0==undefined ? 0 : serie_0;
				serie_1 = serie_1==undefined ? 0 : serie_1;
				total = serie_0 + serie_1;
				series_total.push(total);
			}

			let series_total_length = series_total.length;
			for (let i = 0; i < series_total_length; i++) {
				max_value = Math.max.apply(null, series_total);
				max_index = series_total.indexOf(max_value);
				categories_tmp.push(categories[max_index]);
				series_tmp[0].data.push(series[0].data[max_index]==undefined ? 0 : series[0].data[max_index]);
				series_tmp[1].data.push(series[1].data[max_index]==undefined ? 0 : series[1].data[max_index]);

				if (max_index > -1) {
					series_total[max_index] = 0;
				}
				
			}
			series = series_tmp;
			categories = categories_tmp;
			this.chartOptions.xAxis.categories = categories;
			this.chartOptions.series = series;
    	}
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
				let categories = [],
				  	series = [
						{
							name: 'Local',
							data: []
						}, {
							name: 'Extranjero',
							data: []
						}
					];

  				$.each(self.get_portfolio_by_economic_sector.graphic_economic_sector_bar_categories_month[0], function(index, val) {
  					if (index == 'local') {
  						$.each(val, function(index_a, val_a) {
							let array_tmp = val_a.name.split(" "),
								string_tmp = '';
							if(val_a.name=='Telecomunicaciones'){
								categories.push('Telecom.');
							}else if(array_tmp.length>1){
								$.each(array_tmp, function(index_b, val_b) {
									string_tmp += val_b;
									if(val_b.length>2 && (index_b<array_tmp.length-1)){
										string_tmp += '<br>'
									}else{
										string_tmp += ' ';
									}
								});
								categories.push(string_tmp);
							}
							else{
								categories.push(val_a.name);
							}
							series[0].data.push(val_a.values);
  						});
  					}

  					if (index == 'exterior') {
  						$.each(val, function(index_a, val_a) {
							series[1].data.push(val_a.values);
  						});
  					}
				});

				this.orderList(series, categories);
				
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>