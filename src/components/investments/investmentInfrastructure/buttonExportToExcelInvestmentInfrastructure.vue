<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelInvestmentInfrastructure',
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
        
      	this.$store.dispatch('exportDataInvestmentInfrastructure', payload);
	    }
  	},
  	computed: {
		...mapGetters({
	      export_active_investment_infrastructure: 'exportInvestmentInfrastructure',
	      event_watch_active_investment_infrastructure: 'eventWatchInvestmentInfrastructure'
	    }),
	    ...mapState({
	      exportInvestmentInfrastructure: state => state.export_active_investment_infrastructure,
	      eventWatchInvestmentInfrastructure: state => state.event_watch_active_investment_infrastructure
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_active_investment_infrastructure() {
  			switch(this.event_watch_active_investment_infrastructure) {
  				case 'export_'+this.options.period:
			      window.open(this.export_active_investment_infrastructure, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>