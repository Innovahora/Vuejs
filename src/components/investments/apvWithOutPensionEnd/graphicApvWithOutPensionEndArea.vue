<template>
	<div class="text-no-capitalize">
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicApvWithOutPensionEndArea',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        chart: {
			        type: 'area'
			    },
			    title: {
			        text: 'Aportes voluntarios sin fin previsional por tipo de fondo'
			    },
			    subtitle: {
			        text: '(En miles de S/)'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        categories: [],
			        /* labels: {
			            rotation: -90
			        } */
			    },
			    yAxis: {
				   	title: false
				},
				tooltip: {
			        // pointFormat: '{series.name}: Total: <b>S/. {point.y}</b>',
			        formatter: function () {
				        return this.x+'-'+this.series.userOptions.name+': <br>Porcentaje: <strong>'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+'%</strong>'+'<br>Monto: <strong>S/.'+parseFloat(this.series.options.amount[this.point.index]).toLocaleString('en-EN')+'</strong>';
				    }
			    },
			    plotOptions: {
			        area: {
			            dataLabels: {
			                enabled: false
			            },
			            enableMouseTracking: true,
			            stacking: 'percent',
			            lineColor: '#ffffff',
			            lineWidth: 1,
			            marker: {
			                lineWidth: 1,
			                lineColor: '#ffffff'
			            }
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
	      get_apv_with_out_pension_end: 'getApvWithOutPensionEnd',
	      event_watch_apv_with_out_pension_end: 'eventWatchApvWithOutPensionEnd'
	    }),
	    ...mapState({
	      getApvWithOutPensionEnd: state => state.get_apv_with_out_pension_end,
	      eventWatchApvWithOutPensionEnd: state => state.event_watch_apv_with_out_pension_end
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_apv_with_out_pension_end() {
  			let self = this;
  			
  			if (Object.keys(self.get_apv_with_out_pension_end).length > 0 && self.get_apv_with_out_pension_end != null) {
  				let dates = [];

  				$.each(self.get_apv_with_out_pension_end.graphic_apv_pension_without_purpose_stacked, function(index, val) {
  					if (index == 'dates') {
  						$.each(val, function(index_a, val_a) {
	  						let date_format = val_a.split('-');
	  						dates.push(date_format[1]);
  						});
  					}
  				});
  				
  				self.chartOptions.xAxis.categories = dates;

  				self.chartOptions.series = [{
			        name: 'Fondo 0',
					data: self.get_apv_with_out_pension_end.graphic_apv_pension_without_purpose_stacked.total_tipo_0.porcentaje,
					amount: self.get_apv_with_out_pension_end.graphic_apv_pension_without_purpose_stacked.total_tipo_0.monto
			    }, {
			        name: 'Fondo 1',
					data: self.get_apv_with_out_pension_end.graphic_apv_pension_without_purpose_stacked.total_tipo_1.porcentaje,
					amount: self.get_apv_with_out_pension_end.graphic_apv_pension_without_purpose_stacked.total_tipo_1.monto
			    }, {
			        name: 'Fondo 2',
					data: self.get_apv_with_out_pension_end.graphic_apv_pension_without_purpose_stacked.total_tipo_2.porcentaje,
					amount: self.get_apv_with_out_pension_end.graphic_apv_pension_without_purpose_stacked.total_tipo_2.monto
			    }, {
			        name: 'Fondo 3',
					data: self.get_apv_with_out_pension_end.graphic_apv_pension_without_purpose_stacked.total_tipo_3.porcentaje,
					amount: self.get_apv_with_out_pension_end.graphic_apv_pension_without_purpose_stacked.total_tipo_3.monto
			    }];
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>