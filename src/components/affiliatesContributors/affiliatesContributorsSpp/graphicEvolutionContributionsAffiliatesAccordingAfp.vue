<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicEvolutionContributionsAffiliatesAccordingAfp',
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
			        text: 'Evolución de afiliados y cotizantes del SPP'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        // categories: ['dic-2016', 'dic-2017', 'dic-2018', 'dic-2019'],
			        categories: [],
			        crosshair: true
			    },
			    yAxis: {
				   	title: false
				},
			    tooltip: {
			        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
			        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			            '<td style="padding:0"><b>{point.y}</b></td></tr>',
			        footerFormat: '</table>',
			        shared: true,
			        useHTML: true
			    },
			    plotOptions: {
			        column: {
			            pointPadding: 0.2,
			            borderWidth: 0
			        }
			    },
			    series: [{
			        name: 'Afiliados',
			        // data: [846555, 868941, 835895, 891938]
			        data: []

			    }, {
			        name: 'Cotizantes',
			        // data: [1033682, 1040939, 1026644, 1092822]
			        data: []

			    }]
		    }
	    }
  	},
    methods: {
  	},
  	computed: {
  		...mapGetters({
	        get_affiliates_contributors_spp: 'getAffiliatesContributorsSpp'
      	}),
      	...mapState({
	        getAffiliatesContributorsSpp: state => state.get_affiliates_contributors_spp
      	})
  	},
  	created() {
  	},
  	watch: {
  		get_affiliates_contributors_spp() {
  			if (Object.keys(this.get_affiliates_contributors_spp).length > 0 && this.get_affiliates_contributors_spp != null) {
	  			this.chartOptions.xAxis.categories = this.get_affiliates_contributors_spp.graphic_affiliates_contributors_dates;
	  			this.chartOptions.series[0].data = this.get_affiliates_contributors_spp.graphic_affiliates_contributors_values.affiliates;
	  			this.chartOptions.series[1].data = this.get_affiliates_contributors_spp.graphic_affiliates_contributors_values.contributors;
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>