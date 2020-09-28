<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicInvestmentInfrastructureEconomicSector',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5faa','#00af87', '#b7bf32', '#405482', '#fcb335'],
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
					//pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br>Total: <b>{point.y}</b>'
					formatter: function () {
				        return this.point.name+'<br>Porcentaje: <strong>'+parseFloat(this.point.percent).toFixed(6).toLocaleString('en-EN')+'%</strong><br>'+this.series.userOptions.name+': <strong>'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+'</strong>';
				    }
			    },
			    plotOptions: {
			        pie: {
			            allowPointSelect: true,
			            cursor: 'pointer',
			            dataLabels: {
			                // enabled: true,
			                enabled: false,
			                //format: '<b>{point.name}</b>: {point.percentage:.1f} %'
			            },
			            showInLegend: true
			        }
			    },
			    series: [{
			        name: 'Total',
			        colorByPoint: true,
			        data: []
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
  	watch: {
  		get_investment_infrastructure() {
  			let self = this;
  			if (Object.keys(self.get_investment_infrastructure).length > 0 && self.get_investment_infrastructure != null) {
  				let series_data_title_tmp = '',
  					series_data_subtitle_tmp = '',
  					series_data_tmp = [],
  					series_data = [],
  					date_format = self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.dates[0].split('-'),
					date_format_real = self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.dates[0];

				// series_data_title_tmp = 'Inversión en infraestructua por sector económico, '+date_format_real/*date_format[1]*/;
				series_data_title_tmp = 'Inversión de la cartera administrada en infraestructura';
				series_data_subtitle_tmp = date_format_real;

				/* series_data_tmp = [{
		            name: 'Cartera administrada (Millones de S/)',
		            y: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.cartadmin[0]
		        }, {
		            name: 'Infraestructura',
		            y: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.inframonto[0]
		        }]; */
		        series_data_tmp = [
					{
						name: 'Telecomunicaciones',
						y: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.telecomunicaciones_monto[0],
						percent: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.telecomunicaciones_porcentaje[0] * 100
					},
					{
						name: 'Energía',
						y: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.energia_monto[0],
						percent: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.energia_porcentaje[0] * 100
					},
					{
						name: 'Infraestructura de transporte',
						y: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.inftransporte_monto[0],
						percent: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.inftransporte_porcentaje[0] * 100
					}, 
					{
						name: 'Saneamiento',
						y: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.saneamiento_monto[0],
						percent: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.saneamiento_porcentaje[0] * 100
					}, 
					{
						name: 'Salud',
						y: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.salud_monto[0],
						percent: self.get_investment_infrastructure.graphic_Investment_Infrastructure_pie_last_moth.values.salud_porcentaje[0] * 100
					}, 
				];

  				self.chartOptions.title.text = series_data_title_tmp;
  				self.chartOptions.subtitle.text = series_data_subtitle_tmp;

	  			$.map(series_data_tmp, function(item, index) {
	  				if (item.y != 0) {
				        series_data.push({
				            name: item.name,
							y: parseFloat(item.y),
							percent: (item.percent<1 && item.percent>0 ? '0'+String(item.percent) : item.percent ),
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