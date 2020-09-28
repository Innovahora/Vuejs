<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelInsurancePremiumRateNumberFirst',
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
        
      	this.$store.dispatch('exportDataInsurancePremiumRateNumberFirst', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_insurance_premium_rate_number_first: 'exportInsurancePremiumRateNumberFirst',
        event_watch_insurance_premium_rate_number_first: 'eventWatchInsurancePremiumRateNumberFirst'
      }),
      ...mapState({
        exportInsurancePremiumRateNumberFirst: state => state.export_insurance_premium_rate_number_first,
        eventWatchInsurancePremiumRateNumberFirst: state => state.event_watch_insurance_premium_rate_number_first
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_insurance_premium_rate_number_first() {
  			switch(this.event_watch_insurance_premium_rate_number_first) {
  				case 'export_'+this.options.period:
			      window.open(this.export_insurance_premium_rate_number_first, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>