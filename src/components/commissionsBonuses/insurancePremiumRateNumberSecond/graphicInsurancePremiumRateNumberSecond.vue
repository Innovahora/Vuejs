<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicInsurancePremiumRateNumberSecond',
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
				        return this.x+'<br>'+this.series.userOptions.name+': <strong>'+parseFloat(this.y).toFixed(2).toLocaleString('en-EN')+'%</strong>';
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
	      get_insurance_premium_rate_number_second: 'getInsurancePremiumRateNumberSecond',
	      event_watch_insurance_premium_rate_number_second: 'eventWatchInsurancePremiumRateNumberSecond'
	    }),
	    ...mapState({
	      getInsurancePremiumRateNumberSecond: state => state.get_insurance_premium_rate_number_second,
	      eventWatchInsurancePremiumRateNumberSecond: state => state.event_watch_insurance_premium_rate_number_second
	    })
  	},
  	watch: {
  		get_insurance_premium_rate_number_second() {
  			let self = this;
  			if ((Object.keys(self.get_insurance_premium_rate_number_second).length > 0 && self.get_insurance_premium_rate_number_second != null) || Object.keys(self.get_insurance_premium_rate_number_second).length > 0 && self.get_insurance_premium_rate_number_second != null) {
  				let series_data_title_tmp = '',
  					series_data_subtitle_tmp = '',
  					series_data_tmp = [],
  					series_data = [];

  				self.chartOptions.chart.type = 'column';

				series_data_title_tmp = 'Comisiones por aportes voluntarios (en AFP de afiliación)';
				series_data_subtitle_tmp = self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].dates[0];
				self.chartOptions.subtitle.text = series_data_subtitle_tmp;

				self.chartOptions.xAxis.categories = ['Integra', 'Profuturo', 'Prima', 'Habitat'];

				self.chartOptions.plotOptions.column = {
		        	pointPadding: 0.2,
	    			borderWidth: 0
		        };

				series_data_tmp = [
					{
				        name: 'Fondo 1',
				        data: [
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].integra.fondo_1[0]),
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].profuturo.fondo_1[0]),
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].prima.fondo_1[0]),
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].habitat.fondo_1[0])
				        ]
				    }, {
				        name: 'Fondo 2',
				        data: [
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].integra.fondo_2[0]),
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].profuturo.fondo_2[0]),
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].prima.fondo_2[0]),
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].habitat.fondo_2[0])
				        ]
				    }, {
				        name: 'Fondo 3',
				        data: [
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].integra.fondo_3[0]),
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].profuturo.fondo_3[0]),
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].prima.fondo_3[0]),
				        	parseFloat(self.get_insurance_premium_rate_number_second.graphic_commission_voluntary_bar_month[0].habitat.fondo_3[0])
				        ]
				    }
			    ];

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