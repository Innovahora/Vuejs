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
			        plotBackgroundColor: null,
			        plotBorderWidth: null,
			        plotShadow: false,
			        type: 'pie'
			    },
			    credits: {
				    enabled: false
				},
			    title: {
			        text: 'Distribución de cotizantes activos según AFP'
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
			        name: 'Porcentajes',
			        colorByPoint: true,
			        data: [/*{
			            name: 'Integra',
			            y: 0,
			            sliced: true,
			            selected: true
			        }, {
			            name: 'Habitat',
			            y: 0
			        }, {
			            name: 'Prima',
			            y: 0
			        }, {
			            name: 'Profuturo',
			            y: 0
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
			        }*/]
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
				self.chartOptions.title.text = 'Cotizantes activos según AFP';
				self.chartOptions.subtitle.text = self.get_active_contributors_according_afp.graphic_active_contributors.date;

  				let series_data_tmp = [{
		            name: 'Integra',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.integra/*,
		            sliced: true,
		            selected: true*/
		        }, {
		            name: 'Habitat',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.habitat
		        }, {
		            name: 'Prima',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.prima
		        }, {
		            name: 'Profuturo',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.profuturo
		        }, {
		            name: 'Horizonte',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.horizonte
		        }, {
		            name: 'Union vida',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.union_vida
		        }, {
		            name: 'Union',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.union
		        }, {
		            name: 'Nueva vida',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.nueva_vida
		        }, {
		            name: 'El roble',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.el_roble
		        }, {
		            name: 'Providencia',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.providencia
		        }, {
		            name: 'Megafondo',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.megafondo
		        }/*, {
		            name: 'Cotizantes SNP',
		            y: self.get_active_contributors_according_afp.graphic_active_contributors.sin_afp
		        }*/],
		        series_data = [];
	  			/* self.chartOptions.series[0].data[0].y = self.get_active_contributors_according_afp.graphic_active_contributors.integra;
	  			self.chartOptions.series[0].data[1].y = self.get_active_contributors_according_afp.graphic_active_contributors.habitat;
	  			self.chartOptions.series[0].data[2].y = self.get_active_contributors_according_afp.graphic_active_contributors.prima;
	  			self.chartOptions.series[0].data[3].y = self.get_active_contributors_according_afp.graphic_active_contributors.profuturo;
	  			self.chartOptions.series[0].data[4].y = self.get_active_contributors_according_afp.graphic_active_contributors.horizonte;
	  			self.chartOptions.series[0].data[5].y = self.get_active_contributors_according_afp.graphic_active_contributors.union_vida;
	  			self.chartOptions.series[0].data[6].y = self.get_active_contributors_according_afp.graphic_active_contributors.union;
	  			self.chartOptions.series[0].data[7].y = self.get_active_contributors_according_afp.graphic_active_contributors.nueva_vida;
	  			self.chartOptions.series[0].data[8].y = self.get_active_contributors_according_afp.graphic_active_contributors.el_roble;
	  			self.chartOptions.series[0].data[9].y = self.get_active_contributors_according_afp.graphic_active_contributors.providencia;
	  			self.chartOptions.series[0].data[10].y = self.get_active_contributors_according_afp.graphic_active_contributors.megafondo;
	  			self.chartOptions.series[0].data[11].y = self.get_active_contributors_according_afp.graphic_active_contributors.sin_afp; */

	  			// $.map(self.chartOptions.series[0].data, function(item, index) {
	  			$.map(series_data_tmp, function(item, index) {
	  				/* if (item.y == 0) {
	  					delete self.chartOptions.series[0].data[index];
	  				} */
	  				if (item.y != 0) {
	  					/* self.chartOptions.series[0].data.push({
				            name: item.name,
				            y: item.y
				        }); */
				        series_data.push ({
				            name: item.name,
				            y: item.y
				        });
	  				}
	  			});

	  			self.chartOptions.series[0].data = series_data;
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