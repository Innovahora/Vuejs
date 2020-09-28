<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelInsurancePremiumRateNumberSecond',
    components: {
  	},
    data () {
	    return {
	    }
  	},
  	props: ['options'],
    methods: {
	    exportMonthToExcel() {
	    	let payload = {
          period: this.options.period,
          start_date: this.options.query.start_date,
          end_date: this.options.query.end_date
        };
        
      	this.$store.dispatch('exportDataInsurancePremiumRateNumberSecond', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_insurance_premium_rate_number_second: 'exportInsurancePremiumRateNumberSecond',
        event_watch_insurance_premium_rate_number_second: 'eventWatchInsurancePremiumRateNumberSecond'
      }),
      ...mapState({
        exportInsurancePremiumRateNumberSecond: state => state.export_insurance_premium_rate_number_second,
        eventWatchInsurancePremiumRateNumberSecond: state => state.event_watch_insurance_premium_rate_number_second
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_insurance_premium_rate_number_second() {
  			switch(this.event_watch_insurance_premium_rate_number_second) {
  				case 'export_'+this.options.period:
			      window.open(this.export_insurance_premium_rate_number_second, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>