<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelFundEvolution',
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
        
      	this.$store.dispatch('exportDataFundEvolution', payload);
	    }
  	},
  	computed: {
		...mapGetters({
	      export_fund_evolution: 'exportFundEvolution',
	      event_watch_fund_evolution: 'eventWatchFundEvolution'
	    }),
	    ...mapState({
	      exportFundEvolution: state => state.export_fund_evolution,
	      eventWatchFundEvolution: state => state.event_watch_fund_evolution
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_fund_evolution() {
  			switch(this.event_watch_fund_evolution) {
  				case 'export_'+this.options.period:
			      window.open(this.export_fund_evolution, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>