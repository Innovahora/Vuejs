<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicCommissionOnFlow',
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
			        type: 'category',
			        labels: {
			        	//rotation: -90,
			            style: {
			                fontSize: '13px',
			                fontFamily: 'Verdana, sans-serif'
			            }
			        }
			    },
			    yAxis: {
			        min: 0,
			        title: false
			    },
			    legend: {
			        enabled: false
			    },
			    tooltip: {
			        //pointFormat: '{series.name}: <b>{point.y}%</b>'
		        	formatter: function () {
						/*if(this.series.data[this.point.category-1]==undefined || this.series.data[this.point.category+1]==undefined){
							return this.point.name+'<br>Porcentaje: <strong>'+(parseFloat(this.y).toFixed(2)).toLocaleString('en-EN')+'%</strong>';
						}else{
							if(this.series.data[this.point.category-1].y==this.series.data[this.point.category].y){
								return false
							}else{*/
								return this.point.name+'<br>Porcentaje: <strong>'+(parseFloat(this.y).toFixed(2)).toLocaleString('en-EN')+'%</strong>';
							/*}
						}*/

				    }
			    },
			    plotOptions: {
			        column: {
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
  	props: ['options'],
    methods: {
  	},
  	computed: {
		...mapGetters({
	      get_commission_on_flow: 'getCommissionOnFlow',
	      event_watch_commission_on_flow: 'eventWatchCommissionOnFlow'
	    }),
	    ...mapState({
	      getCommissionOnFlow: state => state.get_commission_on_flow,
	      eventWatchCommissionOnFlow: state => state.event_watch_commission_on_flow
	    })
  	},
  	watch: {
  		get_commission_on_flow() {
  			let self = this;
  			if ((Object.keys(self.get_commission_on_flow).length > 0 && self.get_commission_on_flow != null) || Object.keys(self.get_commission_on_flow).length > 0 && self.get_commission_on_flow != null) {
  				let series_data_title_tmp = '',
  					series_data_subtitle_tmp = '',
  					series_data_tmp = [],
  					series_data = [];

  				if (self.options.type == 'year') {
  					self.chartOptions.chart.type = 'column';

  					series_data_title_tmp = 'Comisión sobre flujo';
  					series_data_subtitle_tmp = self.get_commission_on_flow.graphic_commission_on_flow_bar_last_month.dates[0];
					
					let data_tmp = [];

					$.each(self.get_commission_on_flow.graphic_commission_on_flow_bar_last_month.values, function(index, val) {
						data_tmp.push([(index.charAt(0).toUpperCase() + index.slice(1)).replace(/_/g, ' '), parseFloat(val[0])]);
  					});
					
  					series_data_tmp = [{
				        name: 'Porcentaje',
				        data: data_tmp,
				        dataLabels: {
				            enabled: false,
				            rotation: -90,
				            color: '#FFFFFF',
				            align: 'right',
				            // format: '{point.y:.1f}',
				            formatter: function () {
						        return parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+'%';
						    },
				            y: 0,
				            style: {
				                fontSize: '13px',
				                fontFamily: 'Verdana, sans-serif'
				            }
				        }
				    }];
  				}

  				if (self.options.type == 'month') {
  					self.chartOptions.chart.type = 'line';
  					self.chartOptions.xAxis.labels.rotation = -90;

  					series_data_title_tmp = 'Comisión sobre flujo';
  					series_data_subtitle_tmp = 'Promedio simple del SPP';

  					let data_tmp = [];

  					$.each(self.get_commission_on_flow.graphic_commission_on_flow_lines_month.dates, function(index, val) {
  						//data_tmp.push([val, self.get_commission_on_flow.graphic_commission_on_flow_lines_month.values.promedio[index]]);
						if(self.get_commission_on_flow.graphic_commission_on_flow_lines_month.values.promedio[index-1]==undefined || self.get_commission_on_flow.graphic_commission_on_flow_lines_month.values.promedio[index+1]==undefined){
							data_tmp[index] = {
								y:self.get_commission_on_flow.graphic_commission_on_flow_lines_month.values.promedio[index],
								name: val,
								marker: {
									//enabled: true,
									enabled: false,
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
							if(data_tmp[index-1].y==self.get_commission_on_flow.graphic_commission_on_flow_lines_month.values.promedio[index]){
								data_tmp[index] = {
									y:self.get_commission_on_flow.graphic_commission_on_flow_lines_month.values.promedio[index],
									name: val,
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
								data_tmp[index] = {
									y:self.get_commission_on_flow.graphic_commission_on_flow_lines_month.values.promedio[index],
									name: val, 
									marker: {
										//enabled: true,
										enabled: false,
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
  					series_data_tmp = [{
				        name: 'Porcentaje',
				        data: data_tmp,
				        dataLabels: {
				            enabled: true,
				            //rotation: -90,
				            color: '#000',
				            align: 'center',
				            format: '{point.y:.2f}',
				            y: 30,
				            style: {
				                fontSize: '13px',
				                fontFamily: 'Verdana, sans-serif'
				            }
				        }
					}];
					
  				}

  				self.chartOptions.title.text = series_data_title_tmp;
  				self.chartOptions.subtitle.text = series_data_subtitle_tmp;

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