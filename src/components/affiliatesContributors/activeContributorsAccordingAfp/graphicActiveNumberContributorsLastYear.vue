<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicActiveContributors',
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
			    title: {
			        text: 'Número de cotizantes al SPP y SNP'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        categories: []
			    },
			    yAxis: {
				   	title: false
				},
			    plotOptions: {
			        line: {
						/*
			            dataLabels: {
			                enabled: true
			            },*/
			            enableMouseTracking: true
			        }
			    },
			    series: [{
			        name: 'SPP',
			        data: []
			    }, {
			        name: 'SNP',
			        data: []
			    }]
		    }
	    }
  	},
    methods: {
  	},
  	computed: {
  		...mapGetters({
	      get_active_contributors_according_afp: 'getActiveContributorsAccordingAfp'
	    }),
	    ...mapState({
	      getActiveContributorsAccordingAfp: state => state.get_active_contributors_according_afp
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_active_contributors_according_afp() {
  			let self = this;
  			if (Object.keys(self.get_active_contributors_according_afp).length > 0 && self.get_active_contributors_according_afp != null) {
  				self.chartOptions.xAxis.categories = self.get_active_contributors_according_afp.graphic_active_contributors_year.dates;
  				self.chartOptions.series[0].data = self.get_active_contributors_according_afp.graphic_active_contributors_year.values.total_SPP;
  				self.chartOptions.series[1].data = self.get_active_contributors_according_afp.graphic_active_contributors_year.values.total_SNP;

  				$.map(self.chartOptions.series[0].data, function(item, index) {
	  				if (item == 0) {
	  					delete self.chartOptions.series[0].data[index];
	  				}
	  			});

	  			$.map(self.chartOptions.series[1].data, function(item, index) {
	  				if (item == 0) {
	  					delete self.chartOptions.series[1].data[index];
	  				}
	  			});
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