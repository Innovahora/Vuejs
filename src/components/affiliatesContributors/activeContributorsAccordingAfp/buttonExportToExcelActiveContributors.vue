<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelActiveContributors',
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
        
    		this.$store.dispatch('exportDataActiveContributorsAccordingAfp', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_active_contributors_according_afp: 'exportActiveContributorsAccordingAfp',
        event_watch_active_contributors_according_afp: 'eventWatchActiveContributorsAccordingAfp'
      }),
      ...mapState({
        exportActiveContributorsAccordingAfp: state => state.export_active_contributors_according_afp,
        eventWatchActiveContributorsAccordingAfp: state => state.event_watch_active_contributors_according_afp
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_active_contributors_according_afp() {
  			switch(this.event_watch_active_contributors_according_afp) {
  				case 'export_'+this.options.period:
			      	window.open(this.export_active_contributors_according_afp, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>