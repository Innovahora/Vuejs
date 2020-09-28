<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelApvWithOutPensionEnd',
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
        
      	this.$store.dispatch('exportDataApvWithOutPensionEnd', payload);
	    }
  	},
  	computed: {
		...mapGetters({
	      export_apv_with_out_pension_end: 'exportApvWithOutPensionEnd',
	      event_watch_apv_with_out_pension_end: 'eventWatchApvWithOutPensionEnd'
	    }),
	    ...mapState({
	      exportApvWithOutPensionEnd: state => state.export_apv_with_out_pension_end,
	      eventWatchApvWithOutPensionEnd: state => state.event_watch_apv_with_out_pension_end
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_apv_with_out_pension_end() {
  			switch(this.event_watch_apv_with_out_pension_end) {
  				case 'export_'+this.options.period:
			      window.open(this.export_apv_with_out_pension_end, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>