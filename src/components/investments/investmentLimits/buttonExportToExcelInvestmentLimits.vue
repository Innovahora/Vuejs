<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelInvestmentLimits',
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
        
      	this.$store.dispatch('exportDataInvestmentLimits', payload);
	    }
  	},
  	computed: {
		...mapGetters({
	      export_investment_limits: 'exportInvestmentLimits',
	      event_watch_investment_limits: 'eventWatchInvestmentLimits'
	    }),
	    ...mapState({
	      exportInvestmentLimits: state => state.export_investment_limits,
	      eventWatchInvestmentLimits: state => state.event_watch_investment_limits
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_investment_limits() {
  			switch(this.event_watch_investment_limits) {
  				case 'export_'+this.options.period:
			      window.open(this.export_investment_limits, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>