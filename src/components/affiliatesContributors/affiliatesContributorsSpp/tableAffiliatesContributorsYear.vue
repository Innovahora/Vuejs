<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center">Fecha</th>
                <th class="text-center">Afiliados</th>
                <th class="text-center">Cotizantes</th>
                <th class="text-center">Cotizantes/Afiliados</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(response, index) in get_affiliates_contributors_spp.table_affiliates_contributors" :key="index"> -->
              <tr v-for="(response, index) in response_data.table_affiliates_contributors" :key="index">
                <td class="text-center">{{ response.date }}</td>
                <td class="text-center">{{ response.affiliates.toLocaleString('en-EN') }}</td>
                <td class="text-center">{{ response.contributors.toLocaleString('en-EN') }}</td>
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
    name: 'tableAffiliatesContributorsYear',
    components: {
  	},
    data () {
	    return {
        response_data: {
          table_affiliates_contributors: [],
          table_affiliates_contributors_validate: {}
        }
      	/* data_response : [{
          	date: 'dic-2016',
          	affiliates: 846555,
          	contributors: 1033682
        },
        {
          	date: 'dic-2017',
          	affiliates: 868941,
          	contributors: 1040939
        },
        {
          	date: 'dic-2018',
          	affiliates: 835895,
          	contributors: 1026644
        },
        {
          	date: 'dic-2019',
          	affiliates: 891938,
          	contributors: 1092822
        }] */
	    }
  	},
    props: ['options'],
    methods: {
  	},
  	computed: {
      ...mapGetters({
        get_affiliates_contributors_spp: 'getAffiliatesContributorsSpp',
        event_watch_affiliates_contributors_spp: 'eventWatchAffiliatesContributorsSpp'
      }),
      ...mapState({
        getAffiliatesContributorsSpp: state => state.get_affiliates_contributors_spp,
        eventWatchAffiliatesContributorsSpp: state => state.event_watch_affiliates_contributors_spp
      })
  	},
  	created() {
  	},
  	watch: {
      event_watch_affiliates_contributors_spp() {
        switch(this.event_watch_affiliates_contributors_spp) {
          case 'get':
              // response_data
              if (this.options.period == 'year') {
                this.response_data.table_affiliates_contributors = this.get_affiliates_contributors_spp.table_affiliates_contributors_from_year;
                this.response_data.table_affiliates_contributors_validate = this.get_affiliates_contributors_spp.table_affiliates_contributors_validate_year;
                
              }

              if (this.options.period == 'month') {
                this.response_data.table_affiliates_contributors = this.get_affiliates_contributors_spp.table_affiliates_contributors_from_month;
                this.response_data.table_affiliates_contributors_validate = this.get_affiliates_contributors_spp.table_affiliates_contributors_validate_month;
              }
          break;
        }
      }
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