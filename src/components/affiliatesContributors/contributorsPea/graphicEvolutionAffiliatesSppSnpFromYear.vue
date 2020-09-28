<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicEvolutionAffiliatesSppSnpFromYear',
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
			        text: ''
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
				tooltip: {
			        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
			        shared: true
			    },
			    plotOptions: {
			        column: {
			            stacking: 'percent'
			        }
			    },
			    series: [{
			        name: '',
			        data: []
			    }, {
			        name: '',
			        data: []
			    }, {
			        name: '',
			        data: []
			    }]
		    }
	    }
  	},
  	props: ['options'],
    methods: {
  	},
  	computed: {
		...mapGetters({
	      get_contributors_pea: 'getContributorsPea',
	      event_error_watch: 'eventErrorWatch'
	    }),
	    ...mapState({
	      getContributorsPea: state => state.get_contributors_pea,
	      eventErrorWatch: state => state.event_error_watch
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_contributors_pea() {
  			if (Object.keys(this.get_contributors_pea).length > 0 && this.get_contributors_pea != null) {
  				if (this.options.type == 'affiliates') {
  					this.chartOptions.title.text = 'Evolución de afiliados SPP y SNP';
					this.chartOptions.xAxis.categories = this.get_contributors_pea.graphic_evolution_affiliates.dates;
					for (let i = 0; i < this.chartOptions.xAxis.categories.length; i++) {
						let date_tmp = this.chartOptions.xAxis.categories[i].split('-');
						this.chartOptions.xAxis.categories[i] = date_tmp[1];
					}
	  				this.chartOptions.series[0].name = 'Afiliados SPP/PEA';
	  				this.chartOptions.series[1].name = 'Afiliados SNP/PEA';
	  				this.chartOptions.series[2].name = 'PEA no afiliada';

	  				this.chartOptions.series[0].data = this.get_contributors_pea.graphic_evolution_affiliates.values.affiliates_spp_pea;
	  				this.chartOptions.series[1].data = this.get_contributors_pea.graphic_evolution_affiliates.values.affiliates_snp_pea;
	  				this.chartOptions.series[2].data = this.get_contributors_pea.graphic_evolution_affiliates.values.not_affiliates_pea;
  				}

  				if (this.options.type == 'contributors') {
  					this.chartOptions.title.text = 'Evolución de cotizantes SPP y SNP';
	  				this.chartOptions.xAxis.categories = this.get_contributors_pea.graphic_evolution_contributors.dates;
					for (let i = 0; i < this.chartOptions.xAxis.categories.length; i++) {
						let date_tmp = this.chartOptions.xAxis.categories[i].split('-');
						this.chartOptions.xAxis.categories[i] = date_tmp[1];
					}
	  				this.chartOptions.series[0].name = 'Cotizantes SPP/PEA';
	  				this.chartOptions.series[1].name = 'Cotizantes SNP/PEA';
	  				this.chartOptions.series[2].name = 'PEA no cotizante';

	  				this.chartOptions.series[0].data = this.get_contributors_pea.graphic_evolution_contributors.values.contributors_spp_pea;
	  				this.chartOptions.series[1].data = this.get_contributors_pea.graphic_evolution_contributors.values.contributors_snp_pea;
	  				this.chartOptions.series[2].data = this.get_contributors_pea.graphic_evolution_contributors.values.not_contributors_pea;
  				}
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>