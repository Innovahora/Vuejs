<template>
	<div>
		<a href="#" class="btn btn-primary" @click.prevent="exportMonthToExcel">{{ options.props.name }}</a>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
export default {
    name: 'buttonExportToExcelCostEffectivenessAnnualizedNominalReturnByFundType',
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
        
      	this.$store.dispatch('exportDataCostEffectiveness', payload);
	    }
  	},
  	computed: {
		...mapGetters({
	      export_cost_effectiveness: 'exportCostEffectiveness',
	      event_watch_cost_effectiveness: 'eventWatchCostEffectiveness'
	    }),
	    ...mapState({
	      exportCostEffectiveness: state => state.export_cost_effectiveness,
	      eventWatchCostEffectiveness: state => state.event_watch_cost_effectiveness
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_cost_effectiveness() {
  			switch(this.event_watch_cost_effectiveness) {
  				case 'export_'+this.options.period:
			      window.open(this.export_cost_effectiveness, '_blank');
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>