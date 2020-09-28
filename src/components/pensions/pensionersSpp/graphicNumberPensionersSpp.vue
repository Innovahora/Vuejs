<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicNumberPensionersSpp',
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
			    credits: {
				    enabled: false
				},
			    title: {
			        text: 'Número de pensionistas del SPP'
			    },
			    xAxis: {
			        // categories: ['a', 'b', 'c', 'd', 'e']
			        categories: []
			    },
			    yAxis: {
			        min: 0,
			        title: {
			            text: ''
			        }
			    },
			    tooltip: {
			        // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
			        shared: true
			    },
			    plotOptions: {
			        column: {
			            stacking: 'percent'
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
  	},
  	computed: {
		...mapGetters({
	      get_pensioners_spp: 'getPensionersSpp'
	    }),
	    ...mapState({
	      getPensionersSpp: state => state.get_pensioners_spp
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_pensioners_spp() {
  			if (Object.keys(this.get_pensioners_spp).length > 0 && this.get_pensioners_spp != null) {
	  			this.chartOptions.xAxis.categories = this.get_pensioners_spp.graphic_pensioners_from_year.dates;
	  			this.chartOptions.series[0].data = this.get_pensioners_spp.graphic_pensioners_from_year.values.retirement;
	  			this.chartOptions.series[1].data = this.get_pensioners_spp.graphic_pensioners_from_year.values.disability;
	  			this.chartOptions.series[2].data = this.get_pensioners_spp.graphic_pensioners_from_year.values.survival;
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>