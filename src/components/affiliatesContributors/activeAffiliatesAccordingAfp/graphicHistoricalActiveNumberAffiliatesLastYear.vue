<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicHistoricalActiveNumberAffiliatesLastYear',
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
			        text: 'Número de afiliados al SPP y SNP'
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
			        	allowPointSelect: true,
			            cursor: 'pointer'/* ,
			            dataLabels: {
			                enabled: true
			            },
			            enableMouseTracking: false */
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
	      	get_active_affiliates_according_afp: 'getActiveAffiliatesAccordingAfp'
	    }),
	    ...mapState({
	      	getActiveAffiliatesAccordingAfp: state => state.get_active_affiliates_according_afp
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_active_affiliates_according_afp() {
  			let self = this;
  			if (Object.keys(self.get_active_affiliates_according_afp).length > 0 && self.get_active_affiliates_according_afp != null) {
  				self.chartOptions.xAxis.categories = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates_from_year.dates;
  				self.chartOptions.series[0].data = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates_from_year.values.total_SPP;
  				self.chartOptions.series[1].data = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates_from_year.values.total_SNP;

  				$.map(self.chartOptions.series[0].data, function(item, index) {
	  				if (item == 0) {
	  					// delete self.chartOptions.series[0].data[index];
	  					self.chartOptions.series[0].data[index] = null;
	  				}
	  			});

	  			$.map(self.chartOptions.series[1].data, function(item, index) {
	  				if (item == 0) {
	  					// delete self.chartOptions.series[1].data[index];
	  					self.chartOptions.series[1].data[index] = null;
	  				}
	  			});
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>