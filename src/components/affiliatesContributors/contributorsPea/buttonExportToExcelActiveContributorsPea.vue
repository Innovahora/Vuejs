<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelActiveContributorsPea',
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

        this.$store.dispatch('exportDataContributorsPea', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_contributors_pea: 'exportContributorsPea',
        event_watch_contributors_pea: 'eventWatchContributorsPea'
      }),
      ...mapState({
        exportContributorsPea: state => state.export_contributors_pea,
        eventWatchContributorsPea: state => state.event_watch_contributors_pea
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_contributors_pea() {
  			switch(this.event_watch_contributors_pea) {
  				case 'export_'+this.options.period:
			      	window.open(this.export_contributors_pea, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>