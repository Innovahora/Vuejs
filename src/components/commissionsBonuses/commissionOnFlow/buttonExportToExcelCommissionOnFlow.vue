<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelCommissionOnFlow',
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
        
      	this.$store.dispatch('exportDataCommissionOnFlow', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_commission_on_flow: 'exportCommissionOnFlow',
        event_watch_commission_on_flow: 'eventWatchCommissionOnFlow'
      }),
      ...mapState({
        exportCommissionOnFlow: state => state.export_commission_on_flow,
        eventWatchCommissionOnFlow: state => state.event_watch_commission_on_flow
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_commission_on_flow() {
  			switch(this.event_watch_commission_on_flow) {
  				case 'export_'+this.options.period:
			      window.open(this.export_commission_on_flow, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>