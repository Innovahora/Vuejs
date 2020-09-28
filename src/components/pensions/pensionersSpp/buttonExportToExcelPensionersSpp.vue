<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelPensionersSpp',
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

      	this.$store.dispatch('exportDataPensionersSpp', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_pensioners_spp: 'exportPensionersSpp',
        event_watch_pensioners_spp: 'eventWatchPensionersSpp'
      }),
      ...mapState({
        exportPensionersSpp: state => state.export_pensioners_spp,
        eventWatchPensionersSpp: state => state.event_watch_pensioners_spp
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_pensioners_spp() {
  			switch(this.event_watch_pensioners_spp) {
  				case 'export_'+this.options.period:
			      	window.open(this.export_pensioners_spp, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>