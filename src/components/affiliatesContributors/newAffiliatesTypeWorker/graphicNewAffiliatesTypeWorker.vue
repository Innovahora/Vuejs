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
			        text: 'Nuevos afiliados por tipo de trabajador'
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
			        data: [{
			            name: 'Dependientes',
			            y: 0,
			            sliced: true,
			            selected: true
			        }, {
			            name: 'Independientes',
			            y: 0
			        }]
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
				this.chartOptions.title.text = 'Nuevos afiliados por tipo de trabajador';
				//this.chartOptions.subtitle.text = this.get_new_affiliates_type_worker.graphic_new_affiliates_dates[this.get_new_affiliates_type_worker.graphic_new_affiliates_dates.length-1];
				let date = (this.get_new_affiliates_type_worker.graphic_new_affiliates_dates[this.get_new_affiliates_type_worker.graphic_new_affiliates_dates.length-1]).split("-");
				this.chartOptions.subtitle.text = date[1];
  				this.chartOptions.series[0].data[0].y = this.get_new_affiliates_type_worker.graphic_new_affiliates_values.dependent;
  				this.chartOptions.series[0].data[1].y = this.get_new_affiliates_type_worker.graphic_new_affiliates_values.independent;
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