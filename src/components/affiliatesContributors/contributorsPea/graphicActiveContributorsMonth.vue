<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicActiveContributorsMonth',
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
			        text: this.options.chart.title.text
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        type: 'category',
			        labels: {
			            // rotation: -45,
			            style: {
			                fontSize: '13px',
			                fontFamily: 'Verdana, sans-serif'
			            }
			        }
			    },
			    yAxis: {
				   	title: false
				},
			    legend: {
			        enabled: false
			    },
			    tooltip: {
			        pointFormat: 'Porcentaje en '+this.options.chart.tooltip.pointFormat.year+': <b>{point.y:.1f} %</b>'
			    },
			    series: [{
			        name: 'Population',
			        data: this.options.chart.series.data,
			        dataLabels: {
			            enabled: true,
			            // rotation: -90,
			            color: '#FFFFFF',
			            align: 'right',
			            format: '{point.y:.1f} %', // one decimal
			            y: 10, // 10 pixels down from the top
			            style: {
			                fontSize: '13px',
			                fontFamily: 'Verdana, sans-serif'
			            }
			        }
			    }]
		    }
	    }
  	},
  	props: ['options'],
    methods: {
  	},
  	computed: {
  	},
  	created() {
  	},
  	watch: {
  	},
  	mounted() {
  		// console.log(this.options.chart.title.text);
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