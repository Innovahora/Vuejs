<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicInsurancePremiumRateNumberFirst',
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
			            rotation: -90
			        },
			        crosshair: true
			    },
				yAxis: {
			        min: 0,
			        title: false
			    },
			    legend: {
			    	enabled: false
			    },
			    plotOptions: {
			    	line: {
			        	pointPadding: 0.2,
						borderWidth: 0
			        }
			    },
			    tooltip: {
		            formatter: function () {
						/*if(this.series.data[this.point.x-1]==undefined || this.series.data[this.point.x+1]==undefined){
							return this.x+'<br>'+this.series.userOptions.name+': <strong>'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+'%</strong>';
						}else{
							if(this.series.data[this.point.x-1].y==this.series.data[this.point.x].y){
								return false
							}else{*/
								return this.x+'<br>'+this.series.userOptions.name+': <strong>'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+(this.series.userOptions.name=='Porcentaje' ? '%' : '')+'</strong>';
							/*}
						}*/
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
	      get_insurance_premium_rate_number_first: 'getInsurancePremiumRateNumberFirst',
	      event_watch_insurance_premium_rate_number_first: 'eventWatchInsurancePremiumRateNumberFirst'
	    }),
	    ...mapState({
	      getInsurancePremiumRateNumberFirst: state => state.get_insurance_premium_rate_number_first,
	      eventWatchInsurancePremiumRateNumberFirst: state => state.event_watch_insurance_premium_rate_number_first
	    })
  	},
  	watch: {
  		get_insurance_premium_rate_number_first() {
  			let self = this;
  			if ((Object.keys(self.get_insurance_premium_rate_number_first).length > 0 && self.get_insurance_premium_rate_number_first != null) || Object.keys(self.get_insurance_premium_rate_number_first).length > 0 && self.get_insurance_premium_rate_number_first != null) {
  				let series_data_title_tmp = '',
  					series_data_tmp = [],
  					series_data = [];

  				if (self.options.type == 'year') {
  					series_data_title_tmp = 'Evolución del número de aportes obligatorios al año';

					self.chartOptions.xAxis.categories = self.get_insurance_premium_rate_number_first.graphic_insurance_prima_rate_number_aportes_month.dates;
					  
					let aportes = self.get_insurance_premium_rate_number_first.graphic_insurance_prima_rate_number_aportes_month.values.aportes;
					
  					series_data_tmp = [{
				        name: 'Aportes',
				        data: aportes,
				        dataLabels: {
				            enabled: true,
				            rotation: -90,
				            color: '#000',
				            align: 'right',
				            format: '{point.y:.f}',
				            y: 10,
				            style: {
				                fontSize: '13px',
				                fontFamily: 'Verdana, sans-serif'
				            }
				        }
					}];
					

  				}

  				if (self.options.type == 'month') {
  					series_data_title_tmp = 'Evolución de la tasa de aporte obligatorio<br>(% sobre la remuneración)';

  					self.chartOptions.xAxis.categories = self.get_insurance_premium_rate_number_first.graphic_insurance_prima_rate_number_remuneracion_month.dates;

					for (let i = 0; i < self.get_insurance_premium_rate_number_first.graphic_insurance_prima_rate_number_remuneracion_month.values.remuneracion.length; i++) {
						self.get_insurance_premium_rate_number_first.graphic_insurance_prima_rate_number_remuneracion_month.values.remuneracion[i] = self.get_insurance_premium_rate_number_first.graphic_insurance_prima_rate_number_remuneracion_month.values.remuneracion[i];
					}

  					series_data_tmp = [{
				        name: 'Porcentaje',
				        data: self.get_insurance_premium_rate_number_first.graphic_insurance_prima_rate_number_remuneracion_month.values.remuneracion,
				        dataLabels: {
				            enabled: true,
				            //rotation: -90,
				            color: '#000',
				            align: 'center',
				            format: '{point.y:.f}%',
				            y: 30,
				            style: {
				                fontSize: '13px',
				                fontFamily: 'Verdana, sans-serif'
				            }
				        }
				    }];


  				}
				$.each(series_data_tmp[0].data, function(index, val) {
					if(series_data_tmp[0].data[index-1]==undefined || series_data_tmp[0].data[index+1]==undefined){
						series_data_tmp[0].data[index] = {
							y:parseFloat(val), 
							marker: {
								enabled: true,
								states: {
									hover: {
										//enabled: true,
										enabled: false
									}
								}
							},
							dataLabels: {
								//enabled: true,
								enabled: false
							}
						};
					}else{
						if(series_data_tmp[0].data[index-1].y==val){
							series_data_tmp[0].data[index] = {
								y:parseFloat(val), 
								marker: {
									//enabled: true,
									enabled: false,
									states: {
										hover: {
											enabled: false
										}
									}
								},
								dataLabels: {
									enabled: false
								}
							};
						}else{
							series_data_tmp[0].data[index] = {
								y:parseFloat(val), 
								marker: {
									enabled: true,
									states: {
										hover: {
											//enabled: true,
											enabled: false
										}
									}
								},
								dataLabels: {
									//enabled: true,
									enabled: false
								}
							};
						}
					}
				});

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