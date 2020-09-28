<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelPensionersPensionSystem',
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
        
      	this.$store.dispatch('exportDataPensionersPensionSystem', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_pensioners_pension_system: 'exportPensionersPensionSystem',
        event_watch_pensioners_pension_system: 'eventWatchPensionersPensionSystem'
      }),
      ...mapState({
        exportPensionersPensionSystem: state => state.export_pensioners_pension_system,
        eventWatchPensionersPensionSystem: state => state.event_watch_pensioners_pension_system
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_pensioners_pension_system() {
  			switch(this.event_watch_pensioners_pension_system) {
  				case 'export_'+this.options.period:
			      	window.open(this.export_pensioners_pension_system, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>