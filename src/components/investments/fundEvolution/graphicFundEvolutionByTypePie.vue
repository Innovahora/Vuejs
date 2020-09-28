<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicFundEvolutionByTypePie',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        chart: {
			        plotBackgroundColor: null,
			        plotBorderWidth: null,
			        plotShadow: false,
			        type: 'pie',
			    },
			    credits: {
				    enabled: false
				},
			    title: {
			        text: ''
			    },
			    subtitle: {
			        text: ''
			    },
			    tooltip: {
			        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br>Total: <b>S/. {point.y}</b>'
			    },
			    plotOptions: {
			        pie: {
			            allowPointSelect: true,
			            cursor: 'pointer',
			            dataLabels: {
			                // enabled: true,
			                enabled: false,
			                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
			            },
			            showInLegend: true
			        }
			    },
			    series: [{
			        name: 'Porcentajes',
			        colorByPoint: true,
			        data: []
			    }]
		    }
	    }
  	},
  	props: ['options'],
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
  	watch: {
  		get_fund_evolution() {
  			let self = this;
  			if (Object.keys(self.get_fund_evolution).length > 0 && self.get_fund_evolution != null) {
  				let series_data_title_tmp = '',
  					series_data_subtitle_tmp = '',
  					series_data_tmp = [],
  					series_data = [],
					date_format = self.get_fund_evolution.graphic_fund_evolution_pie[0].dates.split('-'),
					date_format_real = self.get_fund_evolution.graphic_fund_evolution_pie[0].dates;

				// series_data_title_tmp = 'Monto del fondo de pensiones por tipo de fondo '+date_format_real/* +date_format[1] */;
				series_data_title_tmp = 'Fondo de pensiones por tipo de fondo';
				series_data_subtitle_tmp = date_format_real;

				series_data_tmp = [{
		            name: 'Fondo 0',
		            y: self.get_fund_evolution.graphic_fund_evolution_pie[0][0].tipo_0
		        }, {
		            name: 'Fondo 1',
		            y: self.get_fund_evolution.graphic_fund_evolution_pie[0][1].tipo_1
		        }, {
		            name: 'Fondo 2',
		            y: self.get_fund_evolution.graphic_fund_evolution_pie[0][2].tipo_2
		        }, {
		            name: 'Fondo 3',
		            y: self.get_fund_evolution.graphic_fund_evolution_pie[0][3].tipo_3
		        }];

  				self.chartOptions.title.text = series_data_title_tmp;
  				self.chartOptions.subtitle.text = series_data_subtitle_tmp;

	  			$.map(series_data_tmp, function(item, index) {
	  				if (item.y != 0) {
				        series_data.push({
				            name: item.name,
				            y: parseInt(item.y)
				        });
	  				}
	  			});

	  			self.chartOptions.series[0].data = series_data;
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