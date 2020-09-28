<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicNumberDependentIndependentAffiliates',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        chart: {
			        zoomType: 'xy'
			    },
			    title: {
			        text: 'Número de nuevos afiliados al SPP, por tipo de trabajador'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: [{
			    	// categories: ['ene-2019', 'feb-2019', 'mar-2019', 'abr-2019', 'may-2019', 'jun-2019', 'jul-2019'],
			        categories: [],
			        crosshair: true
			    }],
			    yAxis: [{ // Primary yAxis
			        labels: {
			            format: '{value}',
			            style: {
			                // color: Highcharts.getOptions().colors[1]
			            }
			        },
			        title: {
			            text: '',
			            style: {
			                // color: Highcharts.getOptions().colors[1]
			            }
			        }
			    }, { // Secondary yAxis
			        title: {
			            text: '',
			            style: {
			                // color: Highcharts.getOptions().colors[0]
			            }
			        },
			        labels: {
			            format: '{value}',
			            style: {
			                // color: Highcharts.getOptions().colors[0]
			            }
			        },
			        opposite: true
			    }],
			    tooltip: {
			        shared: true
			    },
			    legend: {
			        verticalAlign: 'bottom'
			    },
			    series: [{
			        name: 'Dependientes',
			        type: 'column',
			        yAxis: 1,
			        // data: [16466, 16467, 15874, 16467, 16467, 16467],
			        data: [],
			        tooltip: {
			            valueSuffix: ''
			        }

			    }, {
			        name: 'Independientes',
			        type: 'spline',
			        // data: [5228, 5229, 5230, 5231, 5532, 5532, 3464],
			        data: [],
			        /*tooltip: {
			            valueSuffix: 'S/.'
			        }*/
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
  				this.chartOptions.xAxis[0].categories = this.get_new_affiliates_type_worker.graphic_new_affiliates_dates;
  				this.chartOptions.series[0].data = this.get_new_affiliates_type_worker.graphic_new_affiliates.dependent;
				this.chartOptions.series[1].data = this.get_new_affiliates_type_worker.graphic_new_affiliates.independent;
				
				let min_value, min_values = [];
				min_value = Math.min.apply(null, this.chartOptions.series[0].data);
				min_values.push(min_value);
				min_value = Math.min.apply(null, this.chartOptions.series[1].data);
				min_values.push(min_value);

				let min_y = Math.min.apply(null, min_values);
				this.chartOptions.yAxis.min = min_y;
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