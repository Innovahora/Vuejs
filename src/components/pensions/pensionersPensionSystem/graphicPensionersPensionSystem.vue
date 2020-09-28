<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicPensionersPensionSystem',
    components: {
	  	highcharts: Chart 
  	},
    data () {
	    return {
	      	chartOptions: {
				colors: ['#3c5eaa','#00af87', '#fcaa35', '#b7bf32'],
		        chart: {
			        type: 'column'
			    },
			    title: {
			        // text: 'Historial de pensionistas'
			        text: ''
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
					categories: [],
					labels: {
			            // rotation: -45,
			            style: {
			                fontSize: '10px',
			            }
			        }
			    },
			    yAxis: {
				   	title: false
				},
				tooltip: {},
			    plotOptions: {
			        /* line: {
			            dataLabels: {
			                enabled: true
			            },
			            enableMouseTracking: false
			        }
			        column: {
			            stacking: 'percent'
			        } */
			    },
			    series: [/* {
			        // name: 'Pensionistas SNP',
			        name: 'Total de Pensionistas del SNP',
			        data: []
			    }, {
			        // name: 'Pensionistas SPP',
			        name: 'Total de Pensionistas del SPP',
			        data: []
			    }, {
			        name: 'Pensión 65',
			        data: []
			    } */]
		    }
	    }
  	},
  	props: ['options'],
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
  				if (this.options.type == 'normal') {
  					this.chartOptions.title.text = 'Total de pensionistas del SPP y SNP';
  					this.chartOptions.xAxis.categories = this.get_pensioners_pension_system.graphic_pensioners_pension.dates;
  					this.chartOptions.plotOptions.column = {
			            stacking: 'percent'
			        };
  					this.chartOptions.series = [
	  					{
					        name: 'SNP',
					        data: this.get_pensioners_pension_system.graphic_pensioners_pension.values.snp
					    }, {
					        name: 'SPP',
					        data: this.get_pensioners_pension_system.graphic_pensioners_pension.values.spp
					    }
				    ];
	  				
	  				/* this.chartOptions.series[0].data = this.get_pensioners_pension_system.graphic_pensioners_pension.values.snp;
	  				this.chartOptions.series[1].data = this.get_pensioners_pension_system.graphic_pensioners_pension.values.spp; */
	  				// this.chartOptions.series[2].data = this.get_pensioners_pension_system.graphic_pensioners_pension.values['65'];
	  			}

	  			if (this.options.type == 'percent') {
			        this.chartOptions.title.text = 'Cobertura pensionaria población adulta mayor';
  					this.chartOptions.xAxis.categories = this.get_pensioners_pension_system.graphic_pensioners_pension.dates;

  					this.chartOptions.tooltip = {
  						pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			        	shared: true
			        };
  					this.chartOptions.plotOptions.column = {
			            stacking: 'percent'
			        };
  					this.chartOptions.series = [
	  					{
					        name: 'Pensión 65',
					        data: this.get_pensioners_pension_system.graphic_pensioners_pension.values['65']
					    }, 
	  					{
					        name: 'SNP',
					        data: this.get_pensioners_pension_system.graphic_pensioners_pension.values.snp
					    }, {
					        name: 'SPP',
					        data: this.get_pensioners_pension_system.graphic_pensioners_pension.values.spp
					    }, {
					        name: 'Sin cobertura',
					        data: this.get_pensioners_pension_system.graphic_pensioners_pension.values.pobsnp
					    }
				    ];
	  			}
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>