<template>
	<div class="title-cap">
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicInvestmentLimitsEvolutionInside',
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
			        text: null
			    },
			    tooltip: {
			        // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br>Total: <b>{point.y}</b>'
			        pointFormat: '<b>Porcentaje: <b>{point.y}%</b>'
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
	      get_investment_limits: 'getInvestmentLimits',
	      event_watch_investment_limits: 'eventWatchInvestmentLimits'
	    }),
	    ...mapState({
	      getInvestmentLimits: state => state.get_investment_limits,
	      eventWatchInvestmentLimits: state => state.event_watch_investment_limits
	    })
  	},
  	watch: {
  		get_investment_limits() {
  			let self = this;
  			if (Object.keys(self.get_investment_limits).length > 0 && self.get_investment_limits != null) {
  				let series_data_title_tmp = '',
  					series_data_tmp = [],
  					series_data = [];

  				if (self.options.type == 'year') {
  					//let date_format = self.get_investment_limits.graphic_InvestmentLimits_pie_year.dates.split('-');

  					series_data_title_tmp = /*'Inversión según origen '+*/self.get_investment_limits.graphic_InvestmentLimits_pie_year.dates;

  					series_data_tmp = [{
			            name: 'Local',
			            y: self.get_investment_limits.graphic_InvestmentLimits_pie_year.values.local
			        }, {
			            name: 'Exterior',
			            y: self.get_investment_limits.graphic_InvestmentLimits_pie_year.values.exterior
			        }];
  				}

  				if (self.options.type == 'month') {
  					series_data_title_tmp = /*'Inversión según origen '+*/self.get_investment_limits.graphic_InvestmentLimits_pie_last_month.dates[0];

  					series_data_tmp = [{
			            name: 'Local',
			            y: self.get_investment_limits.graphic_InvestmentLimits_pie_last_month.values.local[0]
			        }, {
			            name: 'Exterior',
			            y: self.get_investment_limits.graphic_InvestmentLimits_pie_last_month.values.exterior[0]
			        }];

			        // self.options.data.title = 'Inversión según origen: '+series_data_title_tmp;
			        self.options.data.title = 'Inversión según origen';
  				}

  				self.chartOptions.title.text = series_data_title_tmp;

	  			$.map(series_data_tmp, function(item, index) {
	  				if (item.y != 0) {
				        series_data.push({
				            name: item.name,
				            y: parseFloat(item.y)
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
	.title-both-pie {
		text-align: center;
		color: #333;
		font-family: "Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif;
		margin-bottom: 16px;
	}
</style>