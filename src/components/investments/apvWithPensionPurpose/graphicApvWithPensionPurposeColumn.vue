<template>
	<div class="text-no-capitalize">
    	<highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'graphicApvWithPensionPurposeColumn',
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
			        text: 'Evolución de aportes voluntarios con fin previsional por AFP'
			    },
			    subtitle: {
			        text: '(En miles de S/)'
			    },
			    credits: {
				    enabled: false
				},
			    xAxis: {
			        categories: [],
			        /* labels: {
			            rotation: -90
			        } */
			    },
			    yAxis: {
				   	title: false
				},
				tooltip: {
			        // pointFormat: '{series.name}: <b>S/. {point.y}</b>'
			        formatter: function () {
				        return this.x+'<br>'+this.series.userOptions.name+': <strong>S/'+parseFloat(this.y.toFixed(2)).toLocaleString('en-EN')+'</strong>';
				    }
			    },
			    plotOptions: {
			    	column: {
			            stacking: 'normal'
			        },
			        line: {
			            dataLabels: {
			                enabled: false
			            },
			            enableMouseTracking: true
			        }
			    },
			    series: []
		    }
	    }
  	},
    methods: {
  	},
  	computed: {
		...mapGetters({
	      get_apv_with_pension_purpose: 'getApvWithPensionPurpose',
	      event_watch_apv_with_pension_purpose: 'eventWatchApvWithPensionPurpose'
	    }),
	    ...mapState({
	      getApvWithPensionPurpose: state => state.get_apv_with_pension_purpose,
	      eventWatchApvWithPensionPurpose: state => state.event_watch_apv_with_pension_purpose
	    })
  	},
  	created() {
  	},
  	watch: {
  		get_apv_with_pension_purpose() {
  			let self = this;
  			
  			if (Object.keys(self.get_apv_with_pension_purpose).length > 0 && self.get_apv_with_pension_purpose != null) {
  				let dates = [];

  				$.each(self.get_apv_with_pension_purpose.graphic_apv_pension_purpose_bar, function(index, val) {
  					if (index == 'dates') {
  						$.each(val, function(index_a, val_a) {
	  						let date_format = val_a.split('-');
	  						dates.push(date_format[1]);
  						});
  					}
  				});
  				
  				self.chartOptions.xAxis.categories = dates;

  				self.chartOptions.series = [{
			        name: 'Habitat',
			        data: self.get_apv_with_pension_purpose.graphic_apv_pension_purpose_bar.habitat.values
			    }, {
			        name: 'Integra',
			        data: self.get_apv_with_pension_purpose.graphic_apv_pension_purpose_bar.integra.values
			    }, {
			        name: 'Prima',
			        data: self.get_apv_with_pension_purpose.graphic_apv_pension_purpose_bar.prima.values
			    }, {
			        name: 'Profuturo',
			        data: self.get_apv_with_pension_purpose.graphic_apv_pension_purpose_bar.profuturo.values
			    }];
  			}
  		}
  	},
  	mounted() {

  	}
}
</script>