<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center">Fecha</th>
                <th class="text-center">Cotizantes/Afiliados</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in get_affiliates_contributors_spp.table_affiliates_contributors" :key="index">
                <td class="text-center">{{ response.date }}</td>
                <td class="text-center">{{ response.contributors_affiliates.toLocaleString('en-EN') }}%</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableAffiliatesContributorsYearPercents',
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
        get_affiliates_contributors_spp: 'getAffiliatesContributorsSpp'
      }),
      ...mapState({
        getAffiliatesContributorsSpp: state => state.get_affiliates_contributors_spp
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

<style>
	.section-new_title {
		margin-bottom: 0px !important;
		margin-right: 60px;
	}
	.section-new_user_name {
	    margin-bottom: 0.5rem;
    	font-weight: 400;
    	font-size: 12px;
    	line-height: 1.2;
    	color: #17a2b8;
	}
</style>