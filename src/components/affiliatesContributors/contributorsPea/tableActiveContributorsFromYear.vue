<template>
	<div>
		<table class="table table-sm table-bordered">
	      <thead>
	        <tr>
	          <th class="text-center" rowspan="2" style="vertical-align: middle">Fecha</th>
	          <th class="text-center" colspan="2">SPP</th>
	          <th class="text-center" colspan="2">SNP</th>
	          <th class="text-center" rowspan="2" style="vertical-align: middle">PEA</th>
	        </tr>
	        <tr>
	          <th class="text-center">Afiliados</th>
	          <th class="text-center">Cotizantes</th>
	          <th class="text-center">Afiliados</th>
	          <th class="text-center">Cotizantes</th>
	        </tr>
	      </thead>
	      <tbody>
	        <!-- <tr v-for="(response, index) in get_contributors_pea.table_contributors_affiliates_pea_year" :key="index"> -->
	        <tr v-for="(response, index) in get_contributors_pea.table_contributors_affiliates_pea_from_year" :key="index">
	          <td class="text-center">{{ response.date }}</td>
	          <td class="text-center">{{ response.affiliates_spp.toLocaleString('en-EN') }}</td>
	          <td class="text-center">{{ response.contributors_spp.toLocaleString('en-EN') }}</td>
	          <td class="text-center">{{ response.affiliates_snp.toLocaleString('en-EN') }}</td>
	          <td class="text-center">{{ response.contributors_snp.toLocaleString('en-EN') }}</td>
	          <td class="text-center">{{ response.pea.toLocaleString('en-EN') }}</td>
	        </tr>
	      </tbody>
	    </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableActiveContributorsFromYear',
    components: {
  	},
    data () {
	    return {
	    	
	    }
  	},
    methods: {
  	},
  	computed: {
		...mapGetters({
	      get_contributors_pea: 'getContributorsPea',
	      event_error_watch: 'eventErrorWatch'
	    }),
	    ...mapState({
	      getContributorsPea: state => state.get_contributors_pea,
	      eventErrorWatch: state => state.event_error_watch
	    })
  	},
  	created() {
  	},
  	watch: {
  	},
  	mounted() {
  	}
}
</script>