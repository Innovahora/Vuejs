<template>
	<div>
		<table class="table table-sm table-bordered">
      <thead>
        <tr>
          <th class="text-center" rowspan="2" style="vertical-align: middle">Fecha</th>
          <th class="text-center" colspan="3">SPP</th>
        </tr>
        <tr>
          <th class="text-center">Jubilación</th>
          <th class="text-center">Invalidez</th>
          <th class="text-center">Sobrevivencia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(response, index) in get_average_pension_spp.table_average_pension" :key="index">
          <td class="text-center">{{ response.date }}</td>
          <td class="text-center">{{ response.retirement.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.disability.toLocaleString('en-EN') }}</td>
          <td class="text-center">{{ response.survival.toLocaleString('en-EN') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableAveragePensionSpp',
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
	      get_average_pension_spp: 'getAveragePensionSpp'
	    }),
	    ...mapState({
	      getAveragePensionSpp: state => state.get_average_pension_spp
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