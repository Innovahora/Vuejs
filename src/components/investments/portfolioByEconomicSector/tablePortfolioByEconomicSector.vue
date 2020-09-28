<template>
	<div>
		<table class="table table-sm table-bordered overflow-x">
            <thead>
            	<tr>
            		<td colspan="12" class="text-center">
            			<p><strong>Cartera administrada por sector económico y tipo de fondo de pensiones</strong></p>
            			<p class="text-capitalize"><strong>{{ date_title }}</strong></p>
            			<p><strong>(En miles de S/)</strong></p>
            		</td>
            	</tr>
            	<tr>
            		<td colspan="2"></td>
            		<td colspan="2" class="text-center"><strong>Fondo 0</strong></td>
            		<td colspan="2" class="text-center"><strong>Fondo 1</strong></td>
            		<td colspan="2" class="text-center"><strong>Fondo 2</strong></td>
            		<td colspan="2" class="text-center"><strong>Fondo 3</strong></td>
            		<td colspan="2" class="text-center"><strong>Total SPP</strong></td>
            	</tr>
            	<tr>
            		<td colspan="2"></td>
            		<td class="text-center"><strong>Monto</strong></td>
            		<td class="text-center"><strong>%</strong></td>
            		<td class="text-center"><strong>Monto</strong></td>
            		<td class="text-center"><strong>%</strong></td>
            		<td class="text-center"><strong>Monto</strong></td>
            		<td class="text-center"><strong>%</strong></td>
            		<td class="text-center"><strong>Monto</strong></td>
            		<td class="text-center"><strong>%</strong></td>
            		<td class="text-center"><strong>Monto</strong></td>
            		<td class="text-center"><strong>%</strong></td>
            	</tr>
            </thead>
            <tbody>
            	<template v-for="(response, index) in response_data.table_portfolio_by_economic_sector">
            		<template v-if="response.id != 'Total' && response.date == undefined">
            			<tr>
			                <td colspan="2" class="text-left"><strong>{{ response.name }}</strong></td>
			                <td class="text-right"><strong>{{ response.monto_0==0 ? '-' : response.monto_0 }}</strong></td>
			                <td class="text-right"><strong>{{ response.porcentaje_0==0 ? '-' : response.porcentaje_0 }}</strong></td>
			                <td class="text-right"><strong>{{ response.monto_1==0 ? '-' : response.monto_1 }}</strong></td>
			                <td class="text-right"><strong>{{ response.porcentaje_1==0 ? '-' : response.porcentaje_1 }}</strong></td>
			                <td class="text-right"><strong>{{ response.monto_2==0 ? '-' : response.monto_2 }}</strong></td>
			                <td class="text-right"><strong>{{ response.porcentaje_2==0 ? '-' : response.porcentaje_2 }}</strong></td>
			                <td class="text-right"><strong>{{ response.monto_3==0 ? '-' : response.monto_3 }}</strong></td>
			                <td class="text-right"><strong>{{ response.porcentaje_3==0 ? '-' : response.porcentaje_3 }}</strong></td>
			                <td class="text-right"><strong>{{ response.monto_spp==0 ? '-' : response.monto_spp }}</strong></td>
			                <td class="text-right"><strong>{{ response.porcentaje_spp==0 ? '-' : response.porcentaje_spp }}</strong></td>
		              	</tr>
		              	<template v-if="response.data.length > 0" v-for="(response_1, index_1) in response.data">
		              		<tr>
		              			<td colspan="2" class="text-left pl-3">{{ response_1.name }}</td>
				                <td class="text-right">{{ response_1.monto_0 == 0 ? '-' : response_1.monto_0 }}</td>
				                <td class="text-right">{{ response_1.porcentaje_0 == 0 ? '-' : response_1.porcentaje_0 }}</td>
				                <td class="text-right">{{ response_1.monto_1 == 0 ? '-' : response_1.monto_1 }}</td>
				                <td class="text-right">{{ response_1.porcentaje_1 == 0 ? '-' : response_1.porcentaje_1 }}</td>
				                <td class="text-right">{{ response_1.monto_2 == 0 ? '-' : response_1.monto_2 }}</td>
				                <td class="text-right">{{ response_1.porcentaje_2 == 0 ? '-' : response_1.porcentaje_2 }}</td>
				                <td class="text-right">{{ response_1.monto_3 == 0 ? '-' : response_1.monto_3 }}</td>
				                <td class="text-right">{{ response_1.porcentaje_3 == 0 ? '-' : response_1.porcentaje_3 }}</td>
				                <td class="text-right">{{ response_1.monto_spp == 0 ? '-' : response_1.monto_spp }}</td>
				                <td class="text-right">{{ response_1.porcentaje_spp == 0 ? '-' : response_1.porcentaje_spp }}</td>
		              		</tr>
		              		<template v-if="response_1.data.length > 0" v-for="(response_2, index_2) in response_1.data">
		              			<tr>
			              			<td colspan="2" class="text-left pl-4">{{ response_2.name }}</td>
					                <td class="text-right">{{ response_2.monto_0==0 ? '-' : response_2.monto_0 }}</td>
					                <td class="text-right">{{ response_2.porcentaje_0==0 ? '-' : response_2.porcentaje_0 }}</td>
					                <td class="text-right">{{ response_2.monto_1==0 ? '-' : response_2.monto_1 }}</td>
					                <td class="text-right">{{ response_2.porcentaje_1==0 ? '-' : response_2.porcentaje_1 }}</td>
					                <td class="text-right">{{ response_2.monto_2==0 ? '-' : response_2.monto_2 }}</td>
					                <td class="text-right">{{ response_2.porcentaje_2==0 ? '-' : response_2.porcentaje_2 }}</td>
					                <td class="text-right">{{ response_2.monto_3==0 ? '-' : response_2.monto_3 }}</td>
					                <td class="text-right">{{ response_2.porcentaje_3==0 ? '-' : response_2.porcentaje_3 }}</td>
					                <td class="text-right">{{ response_2.monto_spp==0 ? '-' : response_2.monto_spp }}</td>
					                <td class="text-right">{{ response_2.porcentaje_spp==0 ? '-' : response_2.porcentaje_spp }}</td>
			              		</tr>
			              		<template v-if="response_2.data.length > 0" v-for="(response_3, index_3) in response_2.data">
			              			<tr>
				              			<td colspan="2" class="text-left pl-5">{{ response_3.name }}</td>
						                <td class="text-right">{{ response_3.monto_0==0 ? '-' : response_3.monto_0 }}</td>
						                <td class="text-right">{{ response_3.porcentaje_0==0 ? '-' : response_3.porcentaje_0 }}</td>
						                <td class="text-right">{{ response_3.monto_1==0 ? '-' : response_3.monto_1 }}</td>
						                <td class="text-right">{{ response_3.porcentaje_1==0 ? '-' : response_3.porcentaje_1 }}</td>
						                <td class="text-right">{{ response_3.monto_2==0 ? '-' : response_3.monto_2 }}</td>
						                <td class="text-right">{{ response_3.porcentaje_2==0 ? '-' : response_3.porcentaje_2 }}</td>
						                <td class="text-right">{{ response_3.monto_3==0 ? '-' : response_3.monto_3 }}</td>
						                <td class="text-right">{{ response_3.porcentaje_3==0 ? '-' : response_3.porcentaje_3 }}</td>
						                <td class="text-right">{{ response_3.monto_spp==0 ? '-' : response_3.monto_spp }}</td>
						                <td class="text-right">{{ response_3.porcentaje_spp==0 ? '-' : response_3.porcentaje_spp }}</td>
				              		</tr>
			              		</template>
		              		</template>
		              	</template>
            		</template>
            		<template v-if="response.id == 'Total'">
            			<tr>
			                <td colspan="2" class="text-left"><strong>{{ response.name }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_monto_0==0 ? '-' : response.total_monto_0 }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_porcentaje_0==0 ? '-' : response.total_porcentaje_0 }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_monto_1==0 ? '-' : response.total_monto_1 }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_porcentaje_1==0 ? '-' : response.total_porcentaje_1 }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_monto_2==0 ? '-' : response.total_monto_2 }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_porcentaje_2==0 ? '-' : response.total_porcentaje_2 }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_monto_3==0 ? '-' : response.total_monto_3 }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_porcentaje_3==0 ? '-' : response.total_porcentaje_3 }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_monto_spp==0 ? '-' : response.total_monto_spp }}</strong></td>
			                <td class="text-right"><strong>{{ response.total_porcentaje_spp==0 ? '-' : response.total_porcentaje_spp }}</strong></td>
		              	</tr>
            		</template>
            	</template>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import {Chart} from 'highcharts-vue'
export default {
    name: 'tablePortfolioByEconomicSector',
    components: {
  	},
    data () {
	    return {
	    	response_data: {
	    		table_portfolio_by_economic_sector: [],
	    		table_portfolio_by_economic_sector_validate: {}
	    	},
	    	date_title: 'Fecha'
	    }
  	},
  	props: ['options'],
    methods: {
	    imgDefaultUser(event) {
	    	event.target.src = img_user;
	    }
  	},
  	computed: {
		...mapGetters({
	      get_portfolio_by_economic_sector: 'getPortfolioByEconomicSector',
	      event_watch_portfolio_by_economic_sector: 'eventWatchPortfolioByEconomicSector'
	    }),
	    ...mapState({
	      getPortfolioByEconomicSector: state => state.get_portfolio_by_economic_sector,
	      eventWatchPortfolioByEconomicSector: state => state.event_watch_portfolio_by_economic_sector
	    })
  	},
  	created() {
  	},
  	watch: {
  		event_watch_portfolio_by_economic_sector() {
  			let self = this;
  			switch(self.event_watch_portfolio_by_economic_sector) {
  				case 'get':
		      		self.response_data.table_portfolio_by_economic_sector = self.get_portfolio_by_economic_sector.table_economic_sector_month;
		      		self.response_data.table_portfolio_by_economic_sector_validate = self.get_portfolio_by_economic_sector.table_economic_sector_validate_month;

			      	$.each(self.response_data.table_portfolio_by_economic_sector, function(index, val) {
			      		if (val.id != 'Total' && val.date == undefined) {
			      			val.monto_0 = (String(val.monto_0).substr(0, 1) == '.') ? parseFloat('0'+val.monto_0) : parseFloat(val.monto_0);
			      			val.porcentaje_0 = (String(val.porcentaje_0).substr(0, 1) == '.') ? parseFloat('0'+val.porcentaje_0) : parseFloat(val.porcentaje_0);

			      			val.monto_1 = (String(val.monto_1).substr(0, 1) == '.') ? parseFloat('0'+val.monto_1) : parseFloat(val.monto_1);
			      			val.porcentaje_1 = (String(val.porcentaje_1).substr(0, 1) == '.') ? parseFloat('0'+val.porcentaje_1) : parseFloat(val.porcentaje_1);

			      			val.monto_2 = (String(val.monto_2).substr(0, 1) == '.') ? parseFloat('0'+val.monto_2) : parseFloat(val.monto_2);
			      			val.porcentaje_2 = (String(val.porcentaje_2).substr(0, 1) == '.') ? parseFloat('0'+val.porcentaje_2) : parseFloat(val.porcentaje_2);

			      			val.monto_3 = (String(val.monto_3).substr(0, 1) == '.') ? parseFloat('0'+val.monto_3) : parseFloat(val.monto_3);
			      			val.porcentaje_3 = (String(val.porcentaje_3).substr(0, 1) == '.') ? parseFloat('0'+val.porcentaje_3) : parseFloat(val.porcentaje_3);

			      			val.monto_spp = (String(val.monto_spp).substr(0, 1) == '.') ? parseFloat('0'+val.monto_spp) : parseFloat(val.monto_spp);
			      			val.porcentaje_spp = (String(val.porcentaje_spp).substr(0, 1) == '.') ? parseFloat('0'+val.porcentaje_spp) : parseFloat(val.porcentaje_spp);

			      			self.response_data.table_portfolio_by_economic_sector[index].monto_0 = parseFloat(val.monto_0.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].porcentaje_0 = parseFloat(val.porcentaje_0.toFixed(2)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].monto_1 = parseFloat(val.monto_1.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].porcentaje_1 = parseFloat(val.porcentaje_1.toFixed(2)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].monto_2 = parseFloat(val.monto_2.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].porcentaje_2 = parseFloat(val.porcentaje_2.toFixed(2)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].monto_3 = parseFloat(val.monto_3.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].porcentaje_3 = parseFloat(val.porcentaje_3.toFixed(2)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].monto_spp = parseFloat(val.monto_spp.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].porcentaje_spp = parseFloat(val.porcentaje_spp.toFixed(2)).toLocaleString('en-EN');

							if (val.data.length > 0) {
				      			$.each(val.data, function(index_a, val_a) {
				      				val_a.monto_0 = (String(val_a.monto_0).substr(0, 1) == '.') ? parseFloat('0'+val_a.monto_0) : parseFloat(val_a.monto_0);
					      			val_a.porcentaje_0 = (String(val_a.porcentaje_0).substr(0, 1) == '.') ? parseFloat('0'+val_a.porcentaje_0) : parseFloat(val_a.porcentaje_0);

					      			val_a.monto_1 = (String(val_a.monto_1).substr(0, 1) == '.') ? parseFloat('0'+val_a.monto_1) : parseFloat(val_a.monto_1);
					      			val_a.porcentaje_1 = (String(val_a.porcentaje_1).substr(0, 1) == '.') ? parseFloat('0'+val_a.porcentaje_1) : parseFloat(val_a.porcentaje_1);

					      			val_a.monto_2 = (String(val_a.monto_2).substr(0, 1) == '.') ? parseFloat('0'+val_a.monto_2) : parseFloat(val_a.monto_2);
					      			val_a.porcentaje_2 = (String(val_a.porcentaje_2).substr(0, 1) == '.') ? parseFloat('0'+val_a.porcentaje_2) : parseFloat(val_a.porcentaje_2);

					      			val_a.monto_3 = (String(val_a.monto_3).substr(0, 1) == '.') ? parseFloat('0'+val_a.monto_3) : parseFloat(val_a.monto_3);
					      			val_a.porcentaje_3 = (String(val_a.porcentaje_3).substr(0, 1) == '.') ? parseFloat('0'+val_a.porcentaje_3) : parseFloat(val_a.porcentaje_3);

					      			val_a.monto_spp = (String(val_a.monto_spp).substr(0, 1) == '.') ? parseFloat('0'+val_a.monto_spp) : parseFloat(val_a.monto_spp);
					      			val_a.porcentaje_spp = (String(val_a.porcentaje_spp).substr(0, 1) == '.') ? parseFloat('0'+val_a.porcentaje_spp) : parseFloat(val_a.porcentaje_spp);

					      			self.response_data.table_portfolio_by_economic_sector[index].data[index_a].monto_0 = parseFloat(val_a.monto_0.toFixed(0)).toLocaleString('en-EN');
									self.response_data.table_portfolio_by_economic_sector[index].data[index_a].porcentaje_0 = parseFloat(val_a.porcentaje_0.toFixed(2)).toLocaleString('en-EN');
									self.response_data.table_portfolio_by_economic_sector[index].data[index_a].monto_1 = parseFloat(val_a.monto_1.toFixed(0)).toLocaleString('en-EN');
									self.response_data.table_portfolio_by_economic_sector[index].data[index_a].porcentaje_1 = parseFloat(val_a.porcentaje_1.toFixed(2)).toLocaleString('en-EN');
									self.response_data.table_portfolio_by_economic_sector[index].data[index_a].monto_2 = parseFloat(val_a.monto_2.toFixed(0)).toLocaleString('en-EN');
									self.response_data.table_portfolio_by_economic_sector[index].data[index_a].porcentaje_2 = parseFloat(val_a.porcentaje_2.toFixed(2)).toLocaleString('en-EN');
									self.response_data.table_portfolio_by_economic_sector[index].data[index_a].monto_3 = parseFloat(val_a.monto_3.toFixed(0)).toLocaleString('en-EN');
									self.response_data.table_portfolio_by_economic_sector[index].data[index_a].porcentaje_3 = parseFloat(val_a.porcentaje_3.toFixed(2)).toLocaleString('en-EN');
									self.response_data.table_portfolio_by_economic_sector[index].data[index_a].monto_spp = parseFloat(val_a.monto_spp.toFixed(0)).toLocaleString('en-EN');
									self.response_data.table_portfolio_by_economic_sector[index].data[index_a].porcentaje_spp = parseFloat(val_a.porcentaje_spp.toFixed(2)).toLocaleString('en-EN');

									if (val_a.data.length > 0) {
						      			$.each(val_a.data, function(index_b, val_b) {
						      				val_b.monto_0 = (String(val_b.monto_0).substr(0, 1) == '.') ? parseFloat('0'+val_b.monto_0) : parseFloat(val_b.monto_0);
							      			val_b.porcentaje_0 = (String(val_b.porcentaje_0).substr(0, 1) == '.') ? parseFloat('0'+val_b.porcentaje_0) : parseFloat(val_b.porcentaje_0);

							      			val_b.monto_1 = (String(val_b.monto_1).substr(0, 1) == '.') ? parseFloat('0'+val_b.monto_1) : parseFloat(val_b.monto_1);
							      			val_b.porcentaje_1 = (String(val_b.porcentaje_1).substr(0, 1) == '.') ? parseFloat('0'+val_b.porcentaje_1) : parseFloat(val_b.porcentaje_1);

							      			val_b.monto_2 = (String(val_b.monto_2).substr(0, 1) == '.') ? parseFloat('0'+val_b.monto_2) : parseFloat(val_b.monto_2);
							      			val_b.porcentaje_2 = (String(val_b.porcentaje_2).substr(0, 1) == '.') ? parseFloat('0'+val_b.porcentaje_2) : parseFloat(val_b.porcentaje_2);

							      			val_b.monto_3 = (String(val_b.monto_3).substr(0, 1) == '.') ? parseFloat('0'+val_b.monto_3) : parseFloat(val_b.monto_3);
							      			val_b.porcentaje_3 = (String(val_b.porcentaje_3).substr(0, 1) == '.') ? parseFloat('0'+val_b.porcentaje_3) : parseFloat(val_b.porcentaje_3);

							      			val_b.monto_spp = (String(val_b.monto_spp).substr(0, 1) == '.') ? parseFloat('0'+val_b.monto_spp) : parseFloat(val_b.monto_spp);
							      			val_b.porcentaje_spp = (String(val_b.porcentaje_spp).substr(0, 1) == '.') ? parseFloat('0'+val_b.porcentaje_spp) : parseFloat(val_b.porcentaje_spp);

							      			self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].monto_0 = parseFloat(val_b.monto_0.toFixed(0)).toLocaleString('en-EN');
											self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].porcentaje_0 = parseFloat(val_b.porcentaje_0.toFixed(2)).toLocaleString('en-EN');
											self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].monto_1 = parseFloat(val_b.monto_1.toFixed(0)).toLocaleString('en-EN');
											self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].porcentaje_1 = parseFloat(val_b.porcentaje_1.toFixed(2)).toLocaleString('en-EN');
											self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].monto_2 = parseFloat(val_b.monto_2.toFixed(0)).toLocaleString('en-EN');
											self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].porcentaje_2 = parseFloat(val_b.porcentaje_2.toFixed(2)).toLocaleString('en-EN');
											self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].monto_3 = parseFloat(val_b.monto_3.toFixed(0)).toLocaleString('en-EN');
											self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].porcentaje_3 = parseFloat(val_b.porcentaje_3.toFixed(2)).toLocaleString('en-EN');
											self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].monto_spp = parseFloat(val_b.monto_spp.toFixed(0)).toLocaleString('en-EN');
											self.response_data.table_portfolio_by_economic_sector[index].data[index_a].data[index_b].porcentaje_spp = parseFloat(val_b.porcentaje_spp.toFixed(2)).toLocaleString('en-EN');
						      			});
						      		}
				      			});
				      		}
			      		}

			      		else {
			      			if (val.date != undefined) {
			      				self.date_title = /*'Fecha: '+*/val.date;
			      			}
			      		}

			      		if (val.id == 'Total') {
			      			val.total_monto_0 = (String(val.total_monto_0).substr(0, 1) == '.') ? parseFloat('0'+val.total_monto_0) : parseFloat(val.total_monto_0);
			      			val.total_porcentaje_0 = (String(val.total_porcentaje_0).substr(0, 1) == '.') ? parseFloat('0'+val.total_porcentaje_0) : parseFloat(val.total_porcentaje_0);

			      			val.total_monto_1 = (String(val.total_monto_1).substr(0, 1) == '.') ? parseFloat('0'+val.total_monto_1) : parseFloat(val.total_monto_1);
			      			val.total_porcentaje_1 = (String(val.total_porcentaje_1).substr(0, 1) == '.') ? parseFloat('0'+val.total_porcentaje_1) : parseFloat(val.total_porcentaje_1);

			      			val.total_monto_2 = (String(val.total_monto_2).substr(0, 1) == '.') ? parseFloat('0'+val.total_monto_2) : parseFloat(val.total_monto_2);
			      			val.total_porcentaje_2 = (String(val.total_porcentaje_2).substr(0, 1) == '.') ? parseFloat('0'+val.total_porcentaje_2) : parseFloat(val.total_porcentaje_2);

			      			val.total_monto_3 = (String(val.total_monto_3).substr(0, 1) == '.') ? parseFloat('0'+val.total_monto_3) : parseFloat(val.total_monto_3);
			      			val.total_porcentaje_3 = (String(val.total_porcentaje_3).substr(0, 1) == '.') ? parseFloat('0'+val.total_porcentaje_3) : parseFloat(val.total_porcentaje_3);

			      			val.total_monto_spp = (String(val.total_monto_spp).substr(0, 1) == '.') ? parseFloat('0'+val.total_monto_spp) : parseFloat(val.total_monto_spp);
			      			val.total_porcentaje_spp = (String(val.total_porcentaje_spp).substr(0, 1) == '.') ? parseFloat('0'+val.total_porcentaje_spp) : parseFloat(val.total_porcentaje_spp);

			      			self.response_data.table_portfolio_by_economic_sector[index].total_monto_0 = parseFloat(val.total_monto_0.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].total_porcentaje_0 = parseFloat(val.total_porcentaje_0.toFixed(2)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].total_monto_1 = parseFloat(val.total_monto_1.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].total_porcentaje_1 = parseFloat(val.total_porcentaje_1.toFixed(2)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].total_monto_2 = parseFloat(val.total_monto_2.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].total_porcentaje_2 = parseFloat(val.total_porcentaje_2.toFixed(2)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].total_monto_3 = parseFloat(val.total_monto_3.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].total_porcentaje_3 = parseFloat(val.total_porcentaje_3.toFixed(2)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].total_monto_spp = parseFloat(val.total_monto_spp.toFixed(0)).toLocaleString('en-EN');
							self.response_data.table_portfolio_by_economic_sector[index].total_porcentaje_spp = parseFloat(val.total_porcentaje_spp.toFixed(2)).toLocaleString('en-EN');
						}

			      	});
  				break;
  			}
	    }
  	},
  	mounted() {
  	}
}
</script>

<style>
	table thead tr p {
		margin: 0;
	}
</style>