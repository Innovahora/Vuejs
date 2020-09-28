<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelAveragePensionBenefitType',
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
        
      	this.$store.dispatch('exportDataAveragePensionBenefitType', payload);
	    }
  	},
  	computed: {
		  ...mapGetters({
        export_average_pension_benefit_type: 'exportAveragePensionBenefitType',
        event_watch_average_pension_benefit_type: 'eventWatchAveragePensionBenefitType'
      }),
      ...mapState({
        exportAveragePensionBenefitType: state => state.export_average_pension_benefit_type,
        eventWatchAveragePensionBenefitType: state => state.event_watch_average_pension_benefit_type
      })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_average_pension_benefit_type() {
  			switch(this.event_watch_average_pension_benefit_type) {
  				case 'export_'+this.options.period:
			      	window.open(this.export_average_pension_benefit_type, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>