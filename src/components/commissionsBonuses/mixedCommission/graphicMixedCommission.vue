<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicMixedCommission',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        chart: {
			        type: ''
			    },
			    title: {
			        text: ''
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
			        },
			        crosshair: true
			    },
				yAxis: {
			        min: 0,
			        title: false
			    },
			    plotOptions: {},
			    tooltip: {
		            formatter: function () {
				        return this.x+'<br>'+this.series.userOptions.name+': <strong>'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+'%</strong>';
				    }
		        },
			    series: []
		    }
	    }
  	},
  	props: ['options'],
    methods: {
  	},
  	computed: {
		...mapGetters({
	      get_mixed_commission: 'getMixedCommission',
	      event_watch_mixed_commission: 'eventWatchMixedCommission'
	    }),
	    ...mapState({
	      getMixedCommission: state => state.get_mixed_commission,
	      eventWatchMixedCommission: state => state.event_watch_mixed_commission
	    })
  	},
  	watch: {
  		get_mixed_commission() {
  			let self = this;
  			if ((Object.keys(self.get_mixed_commission).length > 0 && self.get_mixed_commission != null) || Object.keys(self.get_mixed_commission).length > 0 && self.get_mixed_commission != null) {
  				let series_data_title_tmp = '',
  					series_data_subtitle_tmp = '',
  					series_data_tmp = [],
  					series_data = [];

  				if (self.options.type == 'year') {
  					self.chartOptions.chart.type = 'column';

  					series_data_title_tmp = 'Comisión mixta por AFP';
  					series_data_subtitle_tmp = self.get_mixed_commission.graphic_commission_mixta_bar_last_month.dates[0];
  					self.chartOptions.subtitle.text = series_data_subtitle_tmp;

  					self.chartOptions.xAxis.categories = ['Integra', 'Prima', 'Habitat', 'Profuturo'];

  					self.chartOptions.plotOptions.column = {
			        	pointPadding: 0.2,
            			borderWidth: 0
			        };

  					series_data_tmp = [{
				        name: '% Remuneración (mensual)',
				        data: [
				        	parseFloat(self.get_mixed_commission.graphic_commission_mixta_bar_last_month.values.integra_flujo[0]),
				        	parseFloat(self.get_mixed_commission.graphic_commission_mixta_bar_last_month.values.prima_flujo[0]),
				        	parseFloat(self.get_mixed_commission.graphic_commission_mixta_bar_last_month.values.habitat_flujo[0]),
				        	parseFloat(self.get_mixed_commission.graphic_commission_mixta_bar_last_month.values.profuturo_flujo[0])
				        ]
				    }, {
				        name: '% Saldo (anual)',
				        data: [
				        	parseFloat(self.get_mixed_commission.graphic_commission_mixta_bar_last_month.values.integra_saldo[0]),
				        	parseFloat(self.get_mixed_commission.graphic_commission_mixta_bar_last_month.values.prima_saldo[0]),
				        	parseFloat(self.get_mixed_commission.graphic_commission_mixta_bar_last_month.values.habitat_saldo[0]),
				        	parseFloat(self.get_mixed_commission.graphic_commission_mixta_bar_last_month.values.profuturo_saldo[0])
				        ]
				    }];
  				}

  				if (self.options.type == 'month') {
  					self.chartOptions.chart.type = 'line';
  					self.chartOptions.xAxis.labels.rotation = -90;

  					series_data_title_tmp = 'Evolución de la comisión mixta';

  					self.chartOptions.xAxis.categories = self.get_mixed_commission.graphic_commission_mixta_lines_month.dates;

  					self.chartOptions.plotOptions.line = {
			        	pointPadding: 0.2,
            			borderWidth: 0
			        };

  					series_data_tmp = [{
				        name: 'Comisión mensual de la remuneración',
				        data: self.get_mixed_commission.graphic_commission_mixta_lines_month.values.promedio_flujo
				    }, {
				        name: 'Comisión anual sobre el saldo del fondo',
				        data: self.get_mixed_commission.graphic_commission_mixta_lines_month.values.promedio_saldo
				    }];
  				}

  				self.chartOptions.title.text = series_data_title_tmp;

	  			self.chartOptions.series = series_data_tmp;
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