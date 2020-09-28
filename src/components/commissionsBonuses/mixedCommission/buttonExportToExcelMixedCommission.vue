<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelMixedCommission',
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
        
      	this.$store.dispatch('exportDataMixedCommission', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_mixed_commission: 'exportMixedCommission',
        event_watch_mixed_commission: 'eventWatchMixedCommission'
      }),
      ...mapState({
        exportMixedCommission: state => state.export_mixed_commission,
        eventWatchMixedCommission: state => state.event_watch_mixed_commission
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_mixed_commission() {
  			switch(this.event_watch_mixed_commission) {
  				case 'export_'+this.options.period:
			      window.open(this.export_mixed_commission, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>