<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicInvestmentInfrastructurePortfolioInvestment',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        /* chart: {
			        type: 'area'
			    }, */
			    title: {
			        text: 'Evolución de la cartera administrada vs. Inversión en infraestructura'
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
			        title: false,
			    }, {
					title: false,
					labels:{format: '{value}%'},
			        opposite: true
			    }],
				tooltip: {
					//pointFormat: '{series.name}: Total: <b>{point.y}</b>'
					//pointFormat: '{series.name} (%): <b>{point.y}%</b>'
					formatter: function () {
						if((this.point.y/100)<=1){
							return this.point.category+'<br>Porcentaje: <strong>'+parseFloat(this.point.y/**100*/).toFixed(2).toLocaleString('en-EN')+'%</strong>'
						}else{
							return this.point.category+'<br>'+this.series.userOptions.name+': <strong>'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+'</strong>';

						}
				    }
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
			        name: 'Cartera administrada (Millones de S/)',
			        data: [],
			        type: 'column'
			    }, {
			        name: 'Infraestructura (% cartera)',
			        data: [],
			        type: 'line',
			        yAxis: 1
			    }]
		    }
	    }
  	},
    methods: {
  	},
  	computed: {
		...mapGetters({
	      get_investment_infrastructure: 'getInvestmentInfrastructure',
	      event_watch_investment_infrastructure: 'eventWatchInvestmentInfrastructure'
	    }),
	    ...mapState({
	      getInvestmentInfrastructure: state => state.get_investment_infrastructure,
	      eventWatchInvestmentInfrastructure: state => state.event_watch_investment_infrastructure
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_investment_infrastructure() {
  			let self = this;
  			if (Object.keys(self.get_investment_infrastructure).length > 0 && self.get_investment_infrastructure != null) {
  				self.chartOptions.xAxis.categories = self.get_investment_infrastructure.graphic_Investment_Infrastructure_line_month.dates;
  				self.chartOptions.series[0].data = self.get_investment_infrastructure.graphic_Investment_Infrastructure_line_month.values.cartadmin;
				//self.chartOptions.series[1].data = self.get_investment_infrastructure.graphic_Investment_Infrastructure_line_month.values.inframonto;
				self.chartOptions.series[1].data = self.get_investment_infrastructure.graphic_Investment_Infrastructure_line_month.values.infraporcentaje;

				for (let i = 0; i < self.chartOptions.series[1].data.length; i++) {
					self.chartOptions.series[1].data[i] = self.chartOptions.series[1].data[i] * 100
					self.chartOptions.series[1].data[i] = parseFloat(self.chartOptions.series[1].data[i]);
				}

  				$.map(self.chartOptions.series, function(item, index) {
					let delete_empty = true;
					if(index==1){
						delete_empty = false;
					}else{
						$.map(item.data, function(item_a, index_a) {
							self.chartOptions.series[index].data[index_a] = parseInt(item_a);
							if (parseInt(item_a) > 0) {
								delete_empty = false;
							}
						});
					}

	  				if (delete_empty) {
	  					delete self.chartOptions.series[index];
	  				}
				});

				let min_value, min_values = [];
				min_value = Math.min.apply(null, self.chartOptions.series[0].data);
				min_values.push(min_value);
				min_value = Math.min.apply(null, self.chartOptions.series[1].data);
				min_values.push(min_value);

				let min_y = Math.min.apply(null, min_values);
				self.chartOptions.yAxis.min = min_y;
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>