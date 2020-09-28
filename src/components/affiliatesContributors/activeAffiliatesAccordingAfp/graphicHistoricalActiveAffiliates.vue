<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicHistoricalActiveAffiliates',
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
			        text: 'Afiliados activos según AFP'
				},
				subtitle: {
					text:''
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
			        data: [/* {
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
			            name: 'Afiliados SNP',
			            y: 0
			        } */]
			    }]
		    }
	    }
  	},
    methods: {
	    /* imgDefaultUser(event) {
	    	event.target.src = img_user;
	    } */
  	},
  	computed: {
		...mapGetters({
	      get_active_affiliates_according_afp: 'getActiveAffiliatesAccordingAfp'/* ,
	      event_watch_active_affiliates_according_afp: 'eventWatchActiveAffiliatesAccordingAfp' */
	    }),
	    ...mapState({
	      getActiveAffiliatesAccordingAfp: state => state.get_active_affiliates_according_afp/* ,
	      eventWatchActiveAffiliatesAccordingAfp: state => state.event_watch_active_affiliates_according_afp */
	    })
  	},
  	created() {
  		// console.log(this.get_active_affiliates_according_afp.graphic_historical_active_affiliates.habitat);
  	},
  	watch: {
  		/* event_watch_active_affiliates_according_afp() {
  			
  		}, */
  		get_active_affiliates_according_afp() {
  			let self = this;
  			if (Object.keys(self.get_active_affiliates_according_afp).length > 0 && self.get_active_affiliates_according_afp != null) {
				self.chartOptions.title.text = 'Afiliados activos según AFP';
				self.chartOptions.subtitle.text = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.date

  				let series_data_tmp = [{
		            name: 'Integra',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.integra/* ,
		            sliced: true,
		            selected: true */
		        }, {
		            name: 'Habitat',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.habitat
		        }, {
		            name: 'Prima',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.prima
		        }, {
		            name: 'Profuturo',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.profuturo
		        }, {
		            name: 'Horizonte',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.horizonte
		        }, {
		            name: 'Union vida',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.union_vida
		        }, {
		            name: 'Union',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.union
		        }, {
		            name: 'Nueva vida',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.nueva_vida
		        }, {
		            name: 'El roble',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.el_roble
		        }, {
		            name: 'Providencia',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.providencia
		        }, {
		            name: 'Megafondo',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.megafondo
		        }/*, {
		            name: 'Afiliados SNP',
		            y: self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.sin_afp
		        }*/],
		        series_data = [];

	  			/* self.chartOptions.series[0].data[0].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.integra;
	  			self.chartOptions.series[0].data[1].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.habitat;
	  			self.chartOptions.series[0].data[2].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.prima;
	  			self.chartOptions.series[0].data[3].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.profuturo;
	  			self.chartOptions.series[0].data[4].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.horizonte;
	  			self.chartOptions.series[0].data[5].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.union_vida;
	  			self.chartOptions.series[0].data[6].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.union;
	  			self.chartOptions.series[0].data[7].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.nueva_vida;
	  			self.chartOptions.series[0].data[8].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.el_roble;
	  			self.chartOptions.series[0].data[9].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.providencia;
	  			self.chartOptions.series[0].data[10].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.megafondo;
	  			self.chartOptions.series[0].data[11].y = self.get_active_affiliates_according_afp.graphic_historical_active_affiliates.sin_afp; */

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
				        series_data.push({
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