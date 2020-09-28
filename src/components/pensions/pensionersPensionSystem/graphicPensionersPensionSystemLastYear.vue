<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicPensionersPensionSystemLastYear',
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
			        text: 'Pensionistas'
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
			            name: 'SNP',
			            y: 0/* ,
			            sliced: true,
			            selected: true */
			        }, {
			            name: 'SPP',
			            y: 0
			        }, {
			            name: 'Pensión 65',
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
	    	get_pensioners_pension_system: 'getPensionersPensionSystem'
	    }),
	    ...mapState({
	    	getPensionersPensionSystem: state => state.get_pensioners_pension_system
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_pensioners_pension_system() {
  			if (Object.keys(this.get_pensioners_pension_system).length > 0 && this.get_pensioners_pension_system != null) {
				this.chartOptions.title.text = 'Pensionistas';
				this.chartOptions.subtitle.text = this.get_pensioners_pension_system.graphic_pensioners_pension_last_year_month['date']
	  			this.chartOptions.series[0].data[0].y = this.get_pensioners_pension_system.graphic_pensioners_pension_last_year_month['snp'];
	  			this.chartOptions.series[0].data[1].y = this.get_pensioners_pension_system.graphic_pensioners_pension_last_year_month['spp'];
	  			this.chartOptions.series[0].data[2].y = this.get_pensioners_pension_system.graphic_pensioners_pension_last_year_month['65'];
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