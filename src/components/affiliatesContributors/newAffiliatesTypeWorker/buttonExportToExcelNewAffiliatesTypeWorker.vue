<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelNewAffiliatesTypeWorker',
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

        this.$store.dispatch('exportDataNewAffiliatesTypeWorker', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_new_affiliates_type_worker: 'exportNewAffiliatesTypeWorker',
        event_watch_new_affiliates_type_worker: 'eventWatchNewAffiliatesTypeWorker'
      }),
      ...mapState({
        exportNewAffiliatesTypeWorker: state => state.export_new_affiliates_type_worker,
        eventWatchNewAffiliatesTypeWorker: state => state.event_watch_new_affiliates_type_worker
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_new_affiliates_type_worker() {
  			switch(this.event_watch_new_affiliates_type_worker) {
  				case 'export_'+this.options.period:
			      	window.open(this.export_new_affiliates_type_worker, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>