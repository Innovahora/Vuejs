<template>
	<div class="my-custom-highchart" v-on:mouseleave="mouseLeaveSPP" v-on:mouseover="mouseOverSPP">
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicAveragePensionSpp',
    components: {
	  	highcharts: Chart 
	},
	props: ['active_spp'],
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
	      		chart: {
					type: 'line',
					style: {
						//'height':'450px',
						'background-color':'#FFFFFF'
					},
					height: 400,
					events:{
						load: function() {
							let description = this.renderer.text('Incluye a todos los pensionistas', 10, this.chartHeight+5)
							.css({
								color: '#a0a0a0',
								fontSize: '11px',
								//'font-style': 'italic'
							})
							.add();
						}
					}
			    },
			    credits: {
				    enabled: false
				},
			    title: {
			        text: 'Pensión promedio mensual del SPP'
			    },
			    xAxis: {
			        categories: []
			    },
			    yAxis: {
			        title: {
			            text: ''
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
			        name: 'Jubilación',
			        data: []
			    }, {
			        name: 'Invalidez',
			        data: []
			    }, {
			        name: 'Sobrevivencia',
			        data: []
			    }]
		    }
	    }
  	},
    methods: {
		mouseOverSPP(){
			this.$emit('update:active_spp', true)
		},
		mouseLeaveSPP(){
			this.$emit('update:active_spp', false)
		}
  	},
  	computed: {
		...mapGetters({
	      get_average_pension_spp: 'getAveragePensionSpp'
	    }),
	    ...mapState({
	      getAveragePensionSpp: state => state.get_average_pension_spp
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_average_pension_spp() {
			let self = this;
  			if (Object.keys(this.get_average_pension_spp).length > 0 && this.get_average_pension_spp != null) {
				for (let i = 0; i < this.get_average_pension_spp.graphic_average_pension_spp_values.retirement.length; i++) {
					this.get_average_pension_spp.graphic_average_pension_spp_values.retirement[i] = parseInt(this.get_average_pension_spp.graphic_average_pension_spp_values.retirement[i]);
					this.get_average_pension_spp.graphic_average_pension_spp_values.disability[i] = parseInt(this.get_average_pension_spp.graphic_average_pension_spp_values.disability[i]);
					this.get_average_pension_spp.graphic_average_pension_spp_values.survival[i] = parseInt(this.get_average_pension_spp.graphic_average_pension_spp_values.survival[i]);
				}
				this.chartOptions.xAxis.categories = this.get_average_pension_spp.graphic_average_pension_dates;
				for (let i = 0; i < this.chartOptions.xAxis.categories.length; i++) {
					let date_tmp = this.chartOptions.xAxis.categories[i].split('-');
					this.chartOptions.xAxis.categories[i] = date_tmp[1];
				}  
	  			this.chartOptions.series[0].data = this.get_average_pension_spp.graphic_average_pension_spp_values.retirement;
	  			this.chartOptions.series[1].data = this.get_average_pension_spp.graphic_average_pension_spp_values.disability;
				this.chartOptions.series[2].data = this.get_average_pension_spp.graphic_average_pension_spp_values.survival;
				
				let series_tmp, dates_tmp = [];
				$.each(self.chartOptions.series[0].data, function(index, val) {
					if(self.chartOptions.series[0].data[index]!=0 && self.chartOptions.series[1].data[index]!=0 && self.chartOptions.series[2].data[index]!=0){
						dates_tmp.push(self.chartOptions.xAxis.categories[index]);
					}
				});
				self.chartOptions.xAxis.categories = dates_tmp;
				$.each(self.chartOptions.series, function(index, val) {
					let series_tmp = [];
					$.each(val.data, function(index_a, val_a) {
						if(val_a!=undefined && val_a!=0 && val_a!=null){
							series_tmp.push(val_a);
						}
					});
					self.chartOptions.series[index].data = series_tmp;
				});
				
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>