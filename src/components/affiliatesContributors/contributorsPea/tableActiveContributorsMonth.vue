<template>
	<div>
		<table class="table table-sm table-bordered">
            <thead>
              <tr>
                <th class="text-center">AFP</th>
                <th class="text-center">Afiliados</th>
                <th class="text-center">Cotizantes</th>
                <th class="text-center">PEA</th>
                <th class="text-center">Cotizantes / PEA</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in options" :key="index">
                <td class="text-center">{{ response.afp.toLocaleString('en-EN') }}</td>
                <td class="text-center">{{ response.affiliates.toLocaleString('en-EN') }}</td>
                <td class="text-center">{{ response.contributors.toLocaleString('en-EN') }}</td>
                <td class="text-center">{{ parseInt(response.pea).toLocaleString('en-EN') }}</td>
                <td class="text-center">{{ response.contributors_pea.toLocaleString('en-EN') }}%</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import config from '../../config';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tableActiveContributorsMonth',
    components: {
  	},
    data () {
	    return {
	      	
	    }
  	},
  	props: ['options'],
    methods: {
	    imgDefaultUser(event) {
	    	event.target.src = img_user;
	    }
  	},
  	computed: {
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