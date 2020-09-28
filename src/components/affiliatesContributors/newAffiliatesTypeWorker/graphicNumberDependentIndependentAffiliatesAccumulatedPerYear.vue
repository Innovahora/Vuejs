<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicNumberDependentIndependentAffiliatesAccumulatedPerYear',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
		        chart: {
			        type: 'column'
			    },
			    title: {
			        text: 'Número de nuevos afiliados por tipo de trabajador - Acumulado por año'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        categories: [],
			        crosshair: true
			    },
			    yAxis: {
				   	title: false
				},
			    tooltip: {
			        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			            '<td style="padding:0"><b>{point.y}</b></td></tr>',
			        footerFormat: '</table>',
			        shared: true,
			        useHTML: true
			    },
			    plotOptions: {
			        column: {
			            pointPadding: 0.2,
			            borderWidth: 0,
			            stacking: 'normal'
			        }
			    },
			    series: [{
			        name: 'Dependientes',
			        data: []

			    }, {
			        name: 'Independientes',
			        data: []

			    }]
		    }
	    }
  	},
    methods: {
  	},
  	computed: {
  		...mapGetters({
	      get_new_affiliates_type_worker: 'getNewAffiliatesTypeWorker'
	    }),
	    ...mapState({
	      getNewAffiliatesTypeWorker: state => state.get_new_affiliates_type_worker
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_new_affiliates_type_worker() {
  			if (Object.keys(this.get_new_affiliates_type_worker).length > 0 && this.get_new_affiliates_type_worker != null) {
	  			this.chartOptions.xAxis.categories = this.get_new_affiliates_type_worker.graphic_new_affiliates_accumulated_per_year.dates;
	  			this.chartOptions.series[0].data = this.get_new_affiliates_type_worker.graphic_new_affiliates_accumulated_per_year.values.dependent;
	  			this.chartOptions.series[1].data = this.get_new_affiliates_type_worker.graphic_new_affiliates_accumulated_per_year.values.independent;
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>