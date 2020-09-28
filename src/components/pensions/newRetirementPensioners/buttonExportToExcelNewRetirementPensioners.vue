<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelNewRetirementPensioners',
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
        
      	this.$store.dispatch('exportDataNewRetirementPensioners', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_new_retirement_pensioners: 'exportNewRetirementPensioners',
        event_watch_new_retirement_pensioners: 'eventWatchNewRetirementPensioners'
      }),
      ...mapState({
        exportNewRetirementPensioners: state => state.export_new_retirement_pensioners,
        eventWatchNewRetirementPensioners: state => state.event_watch_new_retirement_pensioners
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_new_retirement_pensioners() {
  			switch(this.event_watch_new_retirement_pensioners) {
  				case 'export_'+this.options.period:
			      	window.open(this.export_new_retirement_pensioners, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>