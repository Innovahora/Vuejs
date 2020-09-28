<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicNewRetirementPensionersPerYear',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
	      		chart: {
	      			height: 650,
			        type: 'bar'
			    },
			    credits: {
				    enabled: false
				},
			    title: {
			        text: 'Nuevos pensionistas por tipo - Anual'
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
			                enabled: true
			            },
			            enableMouseTracking: false
			        }
			    },
			    series: []
		    }
	    }
  	},
    methods: {
    	orderList(series = []) {
    		// let list = [389, 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];
    		let list = series,
    			n, 
    			i, 
    			k, 
    			aux;

		    n = list.length;

		    for (k = 1; k < n; k++) {
		        for (i = 0; i < (n - k); i++) {
		        	if (list[3].data == undefined) {
		        		list[3].data = [0];
		        	}

		    		/* console.log(1, list[i].name, list[i].data[0]);
		    		console.log(2, list[i + 1].name, list[i + 1].data[0]); */

		            if (list[i].data[0] < list[i + 1].data[0]) {
		                aux = list[i].data[0];
		                list[i].data[0] = list[i + 1].data[0];
		                list[i + 1].data[0] = aux;
		            }
		        }
		    }
    	}
  	},
  	computed: {
		...mapGetters({
	      get_new_retirement_pensioners: 'getNewRetirementPensioners'
	    }),
	    ...mapState({
	      getNewRetirementPensioners: state => state.get_new_retirement_pensioners
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_new_retirement_pensioners() {
  			let self = this;
  			if (Object.keys(self.get_new_retirement_pensioners).length > 0 && self.get_new_retirement_pensioners != null) {
	  			/* self.chartOptions.xAxis.categories = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_dates;
	  			self.chartOptions.series[0].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.regular_early;
	  			self.chartOptions.series[1].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.ordinary_regime;
	  			self.chartOptions.series[2].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.extraordinary_regime;
	  			self.chartOptions.series[3].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.generic_regime;
	  			self.chartOptions.series[4].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.subcategory_legal_retirement;
	  			self.chartOptions.series[5].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.advanced;
	  			self.chartOptions.series[6].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.subcategory_minimum_pension_27617;
	  			self.chartOptions.series[7].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.subcategory_minimum_pension_28991;
	  			self.chartOptions.series[8].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.especial_regime_28991;
	  			self.chartOptions.series[9].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.especial_regime_29426;
	  			self.chartOptions.series[10].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_year.graphic_retirement_pensioners_values.terminal_disease; */

	  			self.chartOptions.xAxis.categories = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.dates;
	  			/* self.chartOptions.series[0].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.regular_early_total;
	  			self.chartOptions.series[1].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.ordinary_regime_total;
	  			self.chartOptions.series[2].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.extraordinary_regime_total;
	  			self.chartOptions.series[3].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.generic_regime_total;
	  			self.chartOptions.series[4].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.subcategory_legal_retirement_total;
	  			self.chartOptions.series[5].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.advanced_total;
	  			self.chartOptions.series[6].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.subcategory_minimum_pension_27617_total;
	  			self.chartOptions.series[7].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.subcategory_minimum_pension_28991_total;
	  			self.chartOptions.series[8].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.especial_regime_28991_total;
	  			self.chartOptions.series[9].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.especial_regime_29426_total;
	  			self.chartOptions.series[10].data = self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.terminal_disease_total; */

	  			let series = [{
			        name: 'Jubilación legal',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.regular_early_total
			    }, {
			        name: 'Jubilación anticipada - Régimen ordinario',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.ordinary_regime_total
			    }, {
			        name: 'Jubilación anticipada por riesgo - Régimen extraordinario',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.extraordinary_regime_total
			    }, {
			        name: 'Jubilación anticipada - Régimen genérico',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.generic_regime_total
			    }, {
			        name: 'Régimen especial de jubilación - Anticipada para desempleados',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.subcategory_legal_retirement_total
			    }, {
			        name: 'Jubilación adelantada del decreto ley N° 19990',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.advanced_total
			    }, {
			        name: 'Pensión mínima 27617',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.subcategory_minimum_pension_27617_total
			    }, {
			        name: 'Pensión mínima 28991',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.subcategory_minimum_pension_28991_total
			    }, {
			        name: 'REJA 28991',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.especial_regime_28991_total
			    }, {
			        name: 'REJA 29426',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.especial_regime_29426_total
			    }, {
			        name: 'Jubilación anticipada por enfermedad terminal o cáncer',
			        data: self.get_new_retirement_pensioners.graphic_retirement_pensioners_from_last_year.values.terminal_disease_total
			    }];

			    this.orderList(series);

			    self.chartOptions.series = series;


	  			$.map(self.chartOptions.series, function(item, index) {
  					let delete_empty = true;
  					$.map(item.data, function(item_a, index_a) {
  						if (item_a > 0) {
  							delete_empty = false;
  						}
  					});

	  				if (delete_empty) {
	  					delete self.chartOptions.series[index];
	  				}
	  			});
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>