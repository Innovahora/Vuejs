<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelApvWithPensionPurpose',
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
        
      	this.$store.dispatch('exportDataApvWithPensionPurpose', payload);
	    }
  	},
  	computed: {
		...mapGetters({
	      export_apv_with_pension_purpose: 'exportApvWithPensionPurpose',
	      event_watch_apv_with_pension_purpose: 'eventWatchApvWithPensionPurpose'
	    }),
	    ...mapState({
	      exportApvWithPensionPurpose: state => state.export_apv_with_pension_purpose,
	      eventWatchApvWithPensionPurpose: state => state.event_watch_apv_with_pension_purpose
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_apv_with_pension_purpose() {
  			switch(this.event_watch_apv_with_pension_purpose) {
  				case 'export_'+this.options.period:
			      window.open(this.export_apv_with_pension_purpose, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>