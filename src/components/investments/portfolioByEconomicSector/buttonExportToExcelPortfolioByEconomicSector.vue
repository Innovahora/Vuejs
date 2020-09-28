<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelPortfolioByEconomicSector',
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
          start_date: this.options.query.start_date
        };
        
      	this.$store.dispatch('exportDataPortfolioByEconomicSector', payload);
	    }
  	},
  	computed: {
		...mapGetters({
	      export_portfolio_by_economic_sector: 'exportPortfolioByEconomicSector',
	      event_watch_portfolio_by_economic_sector: 'eventWatchPortfolioByEconomicSector'
	    }),
	    ...mapState({
	      exportPortfolioByEconomicSector: state => state.export_portfolio_by_economic_sector,
	      eventWatchPortfolioByEconomicSector: state => state.event_watch_portfolio_by_economic_sector
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_portfolio_by_economic_sector() {
  			switch(this.event_watch_portfolio_by_economic_sector) {
  				case 'export_'+this.options.period:
			      window.open(this.export_portfolio_by_economic_sector, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>