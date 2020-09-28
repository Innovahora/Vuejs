<template>
	<div>
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicNumberDependentIndependentAffiliatesAccumulatedPerYear',
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
			        // text: 'Gráfico comparativo del último año - SPP/SNP'
			        text: 'Pensión promedio por tipo de beneficio, SPP y SNP'
				},
				subtitle:{
					text: ''
				},
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        categories: ['Jubilación', 'Invalidez', 'Sobrevivencia'],
			        // categories: ['SPP', 'SNP'],
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
			        name: 'SPP',
			        data: []

			    }, {
			        name: 'SNP',
			        data: []

			    }]
			    /* series: [{
			        name: 'Jubilación',
			        data: []

			    }, {
			        name: 'Invalidez',
			        data: []

			    }, {
			        name: 'Sobrevivencia',
			        data: []

			    }] */
		    }
	    }
  	},
    methods: {
  	},
  	computed: {
  		...mapGetters({
	    	get_average_pension_benefit_type: 'getAveragePensionBenefitType'
	    }),
	    ...mapState({
	    	getAveragePensionBenefitType: state => state.get_average_pension_benefit_type
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_average_pension_benefit_type() {
			var data_response = this.get_average_pension_benefit_type;
  			if (Object.keys(data_response).length > 0 && data_response != null) {
  				let data_series_spp = [],
  					data_series_snp = [],
  					first_date = this.get_average_pension_benefit_type.table_average_pension_from_year[0].date,
  					last_date = this.get_average_pension_benefit_type.table_average_pension_from_year[this.get_average_pension_benefit_type.table_average_pension_from_year.length-1].date;

				  this.chartOptions.title.text = 'Pensión promedio por tipo de beneficio, SPP y SNP';
				  this.chartOptions.subtitle.text = last_date;

  				data_series_spp.push(parseInt(data_response.graphic_average_pension_spp_values.retirement[data_response.graphic_average_pension_spp_values.retirement.length-1]));
  				data_series_spp.push(parseInt(data_response.graphic_average_pension_spp_values.disability[data_response.graphic_average_pension_spp_values.disability.length-1]));
  				data_series_spp.push(parseInt(data_response.graphic_average_pension_spp_values.survival[data_response.graphic_average_pension_spp_values.survival.length-1]));
  				this.chartOptions.series[0].data = data_series_spp;

  				data_series_snp.push(parseInt(data_response.graphic_average_pension_snp_values.retirement[data_response.graphic_average_pension_snp_values.retirement.length-1]));
  				data_series_snp.push(parseInt(data_response.graphic_average_pension_snp_values.disability[data_response.graphic_average_pension_snp_values.disability.length-1]));
  				data_series_snp.push(parseInt(data_response.graphic_average_pension_snp_values.survival[data_response.graphic_average_pension_snp_values.survival.length-1]));
  				this.chartOptions.series[1].data = data_series_snp;
  				/* this.chartOptions.series[0].data.push(data_response.graphic_average_pension_spp_values.retirement[data_response.graphic_average_pension_spp_values.retirement.length-1]);
  				this.chartOptions.series[0].data.push(data_response.graphic_average_pension_spp_values.disability[data_response.graphic_average_pension_spp_values.disability.length-1]);
  				this.chartOptions.series[0].data.push(data_response.graphic_average_pension_spp_values.survival[data_response.graphic_average_pension_spp_values.survival.length-1]);

  				this.chartOptions.series[1].data.push(data_response.graphic_average_pension_snp_values.retirement[data_response.graphic_average_pension_snp_values.retirement.length-1]);
  				this.chartOptions.series[1].data.push(data_response.graphic_average_pension_snp_values.disability[data_response.graphic_average_pension_snp_values.disability.length-1]);
  				this.chartOptions.series[1].data.push(data_response.graphic_average_pension_snp_values.survival[data_response.graphic_average_pension_snp_values.survival.length-1]); */

  				/* this.chartOptions.series[0].data.push(data_response.graphic_average_pension_spp_values.retirement[data_response.graphic_average_pension_spp_values.retirement.length-1]);
  				this.chartOptions.series[0].data.push(data_response.graphic_average_pension_snp_values.retirement[data_response.graphic_average_pension_snp_values.retirement.length-1]);

  				this.chartOptions.series[1].data.push(data_response.graphic_average_pension_spp_values.disability[data_response.graphic_average_pension_spp_values.disability.length-1]);
  				this.chartOptions.series[1].data.push(data_response.graphic_average_pension_snp_values.disability[data_response.graphic_average_pension_snp_values.disability.length-1]);

  				this.chartOptions.series[2].data.push(data_response.graphic_average_pension_spp_values.survival[data_response.graphic_average_pension_spp_values.survival.length-1]);
  				this.chartOptions.series[2].data.push(data_response.graphic_average_pension_snp_values.survival[data_response.graphic_average_pension_snp_values.survival.length-1]); */

  				/* this.chartOptions.series[0].data = Array(data_response.graphic_average_pension_spp_values.retirement[data_response.graphic_average_pension_spp_values.retirement.length-1], data_response.graphic_average_pension_snp_values.retirement[data_response.graphic_average_pension_snp_values.retirement.length-1]);
  				this.chartOptions.series[1].data = Array(data_response.graphic_average_pension_spp_values.disability[data_response.graphic_average_pension_spp_values.disability.length-1], data_response.graphic_average_pension_snp_values.disability[data_response.graphic_average_pension_snp_values.disability.length-1]);
  				this.chartOptions.series[2].data = Array(data_response.graphic_average_pension_spp_values.survival[data_response.graphic_average_pension_spp_values.survival.length-1], data_response.graphic_average_pension_snp_values.survival[data_response.graphic_average_pension_snp_values.survival.length-1]); */
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>