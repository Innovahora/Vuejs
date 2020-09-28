<template>
	<div class="my-custom-highchart" v-on:mouseleave="mouseLeaveSNP" v-on:mouseover="mouseOverSNP">
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicAveragePensionSnp',
    components: {
	  	highcharts: Chart 
  	},
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
							let description = this.renderer.text('No incluye a aquellos que no tienen pensión por no cumplir', 10, this.chartHeight+5)
							.css({
								color: '#a0a0a0',
								fontSize: '11px',
								//'font-style': 'italic'
							})
							.add();
							let description_br = this.renderer.text('con la condición de 20 años mínimo de aporte', 10, this.chartHeight+20)
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
			        text: 'Pensión promedio mensual del SNP'
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
		mouseOverSNP(){
			this.$emit('update:active_snp', true)
		},
		mouseLeaveSNP(){
			this.$emit('update:active_snp', false)
		}
  	},
  	computed: {
		...mapGetters({
	      get_average_pension_snp: 'getAveragePensionSnp'
	    }),
	    ...mapState({
	      getAveragePensionSnp: state => state.get_average_pension_snp
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_average_pension_snp() {
			let self = this;
  			if (Object.keys(self.get_average_pension_snp).length > 0 && self.get_average_pension_snp != null) {
				for (let i = 0; i < self.get_average_pension_snp.graphic_average_pension_snp_values.retirement.length; i++) {
					self.get_average_pension_snp.graphic_average_pension_snp_values.retirement[i] = parseInt(self.get_average_pension_snp.graphic_average_pension_snp_values.retirement[i]);
					self.get_average_pension_snp.graphic_average_pension_snp_values.disability[i] = parseInt(self.get_average_pension_snp.graphic_average_pension_snp_values.disability[i]);
					self.get_average_pension_snp.graphic_average_pension_snp_values.survival[i] = parseInt(self.get_average_pension_snp.graphic_average_pension_snp_values.survival[i]);
				}
	  			self.chartOptions.xAxis.categories = self.get_average_pension_snp.graphic_average_pension_dates;
	  			self.chartOptions.series[0].data = self.get_average_pension_snp.graphic_average_pension_snp_values.retirement;
	  			self.chartOptions.series[1].data = self.get_average_pension_snp.graphic_average_pension_snp_values.disability;
				self.chartOptions.series[2].data = self.get_average_pension_snp.graphic_average_pension_snp_values.survival;
				
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