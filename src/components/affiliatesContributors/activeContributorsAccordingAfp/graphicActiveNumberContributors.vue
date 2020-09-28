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
		        chart: {
			        type: 'line'
			    },
			    title: {
			        text: 'Cantidad de cotizantes activos'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        // categories: ['2016', '2017', '2019', '2020']
			        categories: []
			    },
			    yAxis: {
				   	title: false
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
			        name: 'Integra',
			        // data: [110, 250, 170, 190]
			        data: []
			    }, {
			        name: 'Habitat',
			        // data: [300, 250, 100, 230]
			        data: []
			    }, {
			        name: 'Prima',
			        // data: [290, 130, 90, 200]
			        data: []
			    }, {
			        name: 'Profuturo',
			        // data: [100, 200, 300, 50]
			        data: []
			    }, {
		            name: 'Horizonte',
		            y: 0
		        }, {
		            name: 'Union vida',
		            y: 0
		        }, {
		            name: 'Union',
		            y: 0
		        }, {
		            name: 'Nueva vida',
		            y: 0
		        }, {
		            name: 'El roble',
		            y: 0
		        }, {
		            name: 'Providencia',
		            y: 0
		        }, {
		            name: 'Megafondo',
		            y: 0
		        }, {
		            name: 'Cotizantes SNP',
		            y: 0
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
  				self.chartOptions.xAxis.categories = self.get_active_contributors_according_afp.graphic_active_number_contributors.date;
  				self.chartOptions.series[0].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.integra;
  				self.chartOptions.series[1].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.habitat;
  				self.chartOptions.series[2].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.prima;
  				self.chartOptions.series[3].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.profuturo;
  				self.chartOptions.series[4].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.horizonte;
  				self.chartOptions.series[5].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.union_vida;
  				self.chartOptions.series[6].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.union;
  				self.chartOptions.series[7].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.nueva_vida;
  				self.chartOptions.series[8].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.el_roble;
  				self.chartOptions.series[9].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.providencia;
  				self.chartOptions.series[10].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.megafondo;
  				self.chartOptions.series[11].data = self.get_active_contributors_according_afp.graphic_active_number_contributors.sin_afp;

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