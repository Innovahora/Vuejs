<template>
  <div>
    <div class="row">
      <div class="col-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <img class="d-block w-100" :src="img_portada" alt="Introducción">
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <br>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-12">
                <h1><a href="#" class="card-link">Introducción</a></h1>
                <hr>
                <p class="text-justify">Las AFP, en cumplimiento de su rol de inversionistas institucionales y con la finalidad de velar por los intereses de los afiliados al Sistema Privado de Pensiones (SPP), promueven la participación de un número razonable de directores independientes en las empresas donde invierten los fondos de pensiones, conforme a las Prácticas de Buen Gobierno Corporativo, con el objeto de que puedan aportar una visión imparcial que contribuya a la toma de decisiones adecuadas al interior de las sociedades.</p>
                <p class="text-justify">La Plataforma de Directores Independientes de las AFP, es un portal web creado con la finalidad de que sus usuarios puedan acceder a la información actualizada sobre los directores independientes nominados por las mismas en las empresas donde invierten los fondos de pensiones. Es administrada por la Asociación de AFP (AAFP) y su uso está destinado principalmente a las AFP, la AAFP y, en su oportunidad, a la empresa consultora encargada de la búsqueda y selección de directores independientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters  } from 'vuex';
import img_portada from '../../../src/assets/imagen_portada_texto.jpg';
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      companies: [],
      query: {
        company_name: ''
      },
      img_portada: img_portada
    }
  },
  methods: {
    
  },
  computed: {
    
  },
  created () {
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
<style>
  
</style>