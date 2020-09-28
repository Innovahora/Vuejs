<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicNewRetirementPensionersPerMonth',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
	      		chart: {
			        type: 'line'
			    },
			    credits: {
				    enabled: false
				},
			    title: {
			        text: 'Nuevos pensionistas por tipo - Mensual'
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
			    series: [{
			        name: 'Jubilación legal',
			        data: []
			    }, {
			        name: 'Jubilación anticipada - Régimen ordinario',
			        data: []
			    }, {
			        name: 'Jubilación anticipada por riesgo - Régimen extraordinario',
			        data: []
			    }, {
			        name: 'Jubilación anticipada - Régimen genérico',
			        data: []
			    }, {
			        name: 'Régimen especial de jubilación - Anticipada para desempleados',
			        data: []
			    }, {
			        name: 'Jubilación adelantada del decreto ley N° 19990',
			        data: []
			    }, {
			        name: 'Pensión mínima 27617',
			        data: []
			    }, {
			        name: 'Pensión mínima 28991',
			        data: []
			    }, {
			        name: 'REJA 28991',
			        data: []
			    }, {
			        name: 'REJA 29426',
			        data: []
			    }, {
			        name: 'Jubilación anticipada por enfermedad terminal o cáncer',
			        data: []
			    }]
		    }
	    }
  	},
    methods: {
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
  			if (Object.keys(this.get_new_retirement_pensioners).length > 0 && this.get_new_retirement_pensioners != null) {
	  			this.chartOptions.xAxis.categories = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_dates;
	  			this.chartOptions.series[0].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.regular_early;
	  			this.chartOptions.series[1].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.ordinary_regime;
	  			this.chartOptions.series[2].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.extraordinary_regime;
	  			this.chartOptions.series[3].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.generic_regime;
	  			this.chartOptions.series[4].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.subcategory_legal_retirement;
	  			this.chartOptions.series[5].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.advanced;
	  			this.chartOptions.series[6].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.subcategory_minimum_pension_27617;
	  			this.chartOptions.series[7].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.subcategory_minimum_pension_28991;
	  			this.chartOptions.series[8].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.especial_regime_28991;
	  			this.chartOptions.series[9].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.especial_regime_29426;
	  			this.chartOptions.series[10].data = this.get_new_retirement_pensioners.graphic_retirement_pensioners_month.graphic_retirement_pensioners_values.terminal_disease;
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>