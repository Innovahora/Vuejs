<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicActiveContributorsFromYear',
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
			    plotOptions: {
			        column: {
			            stacking: 'percent'
			        }
			    },
			    series: [{
			        name: 'Afiliados',
			        data: []
			    }, {
			        name: 'Cotizantes',
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
  				if (this.options.type == 'spp') {
  					this.chartOptions.title.text = 'SPP';
	  				this.chartOptions.xAxis.categories = this.get_contributors_pea.graphic_spp_year.dates;
	  				this.chartOptions.series[0].data = this.get_contributors_pea.graphic_spp_year.values.affiliates;
	  				this.chartOptions.series[1].data = this.get_contributors_pea.graphic_spp_year.values.contributors;
  				}

  				if (this.options.type == 'snp') {
  					this.chartOptions.title.text = 'SNP';
	  				this.chartOptions.xAxis.categories = this.get_contributors_pea.graphic_snp_year.dates;
	  				this.chartOptions.series[0].data = this.get_contributors_pea.graphic_snp_year.values.affiliates;
	  				this.chartOptions.series[1].data = this.get_contributors_pea.graphic_snp_year.values.contributors;
  				}
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>