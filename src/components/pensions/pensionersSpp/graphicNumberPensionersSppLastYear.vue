<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicNumberPensionersSppLastYear',
    components: {
	  	// CreateNew
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        chart: {
			        plotBackgroundColor: null,
			        plotBorderWidth: null,
			        plotShadow: false,
			        type: 'pie'
			    },
			    credits: {
				    enabled: false
				},
			    title: {
			        text: 'Distribución de pensionistas según tipo de jubilación'
				},
				subtitle: {
			        text: ''
			    },
			    tooltip: {
			        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br>Total: <b>{point.y}</b>'
			    },
			    plotOptions: {
			        pie: {
			            allowPointSelect: true,
			            cursor: 'pointer',
			            dataLabels: {
			                // enabled: true,
			                enabled: false,
			                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
			            },
			            showInLegend: true
			        }
			    },
			    series: [{
			        name: 'Porcentaje',
			        colorByPoint: true,
			        data: [{
			            name: 'Sobrevivencia',
			            y: 0/* ,
			            sliced: true,
			            selected: true */
			        }, {
			            name: 'Jubilación',
			            y: 0
			        }, {
			            name: 'Invalidez',
			            y: 0
			        }]
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
				this.chartOptions.title.text = 'Pensionistas según tipo de beneficio';
				this.chartOptions.subtitle.text = this.get_pensioners_spp.graphic_pensioners_from_last_year_month.date
	  			this.chartOptions.series[0].data[0].y = this.get_pensioners_spp.graphic_pensioners_from_last_year_month.values.survival;
	  			this.chartOptions.series[0].data[1].y = this.get_pensioners_spp.graphic_pensioners_from_last_year_month.values.retirement;
	  			this.chartOptions.series[0].data[2].y = this.get_pensioners_spp.graphic_pensioners_from_last_year_month.values.disability;
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