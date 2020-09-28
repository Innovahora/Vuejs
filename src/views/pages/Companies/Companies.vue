<template>
	<div>
	  	<div class="row">
	      	<div class="col-12">
	    		<h1 class="h3 mb-3" align="center">Empresas</h1>
	    	</div>
	    </div>
	    <div class="row">
	      	<div class="col-12">
		    	<TableCompanies></TableCompanies>
	    	</div>
	    </div>
	</div>
</template>

<script>
// import {getTypeUser, authLogout} from '@/utils/auth';
import TableCompanies from '@/components/companies/tableCompanies';
export default {
  name: 'companies',
  components: {
  	TableCompanies
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  created () {
    // alert(getTypeUser());
  }
}

/* NOMENCLATURA
sortBy
filterByDataXYZ
orderBy
searchTableXYZ
showData
clickDataXYZ
getXYZ
NOMENCLATURA */
</script>