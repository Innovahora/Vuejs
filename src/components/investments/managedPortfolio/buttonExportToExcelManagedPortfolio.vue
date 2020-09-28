<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelManagedPortfolio',
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
        
      	this.$store.dispatch('exportDataManagedPortfolio', payload);
	    }
  	},
  	computed: {
		...mapGetters({
	      export_managed_portfolio: 'exportManagedPortfolio',
	      event_watch_managed_portfolio: 'eventWatchManagedPortfolio'
	    }),
	    ...mapState({
	      exportManagedPortfolio: state => state.export_managed_portfolio,
	      eventWatchManagedPortfolio: state => state.event_watch_managed_portfolio
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_managed_portfolio() {
  			switch(this.event_watch_managed_portfolio) {
  				case 'export_'+this.options.period:
			      window.open(this.export_managed_portfolio, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>