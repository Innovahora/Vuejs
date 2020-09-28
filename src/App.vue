<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
//@import "./assets/styles/styles.scss";
body{
  background: #fbfbfb;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #384751;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  overflow-x: hidden;
}

.wrapper {  
  &.login{
    height: 100vh;
  }
}

.box{
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  padding: 30px;
  h3{
    margin-bottom: 1em;
  }
}

.box-layout-height{
  height: calc(100vh - 180px);
}

.form-small{
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

.button-actions{
  button{
    margin-left: 1em;
  }
}

.pull-left{
  float: left;
}

.pull-right{
  float: right;
}

.spinner-border {
  width: 1rem;
  height: 1rem;
}

.card .card-header {
  background-color: #1b5c9b;
  color: #fff;
}

.card .card-header * {
  text-transform: uppercase;
  color: #fff;
}

main.content h1.h3.mb-3 {
  text-transform: uppercase;
  color: #1b5c9b;
}

table.table {
  table-layout: fixed;
}

.table-into {
  width: 100%;
}

.table-into tbody tr td { 
  padding: 5px !important;
}

.sidebar-link, a.sidebar-link {
  padding: 0.75rem 12px;
}

.modal-body {
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
}

.table-responsive>table {
  min-width: 1290px;
}

.card > .dataTables_wrapper .table.dataTable td:first-child, .card > .dataTables_wrapper .table.dataTable th:first-child, .card > .table td:first-child, .card > .table th:first-child, .card > .table-responsive .table td:first-child, .card > .table-responsive .table th:first-child, .card > .table-responsive-sm .table td:first-child, .card > .table-responsive-sm .table th:first-child, .card > .table-responsive-md .table td:first-child, .card > .table-responsive-md .table th:first-child, .card > .table-responsive-lg .table td:first-child, .card > .table-responsive-lg .table th:first-child, .card > .table-responsive-xl .table td:first-child, .card > .table-responsive-xl .table th:first-child {
  padding-left: 0.3rem;
}

.card > .dataTables_wrapper .table.dataTable td:last-child, .card > .dataTables_wrapper .table.dataTable th:last-child, .card > .table td:last-child, .card > .table th:last-child, .card > .table-responsive .table td:last-child, .card > .table-responsive .table th:last-child, .card > .table-responsive-sm .table td:last-child, .card > .table-responsive-sm .table th:last-child, .card > .table-responsive-md .table td:last-child, .card > .table-responsive-md .table th:last-child, .card > .table-responsive-lg .table td:last-child, .card > .table-responsive-lg .table th:last-child, .card > .table-responsive-xl .table td:last-child, .card > .table-responsive-xl .table th:last-child {
  padding-right: 0.3rem;
}

.tab.tab-style-a .nav-tabs .nav-link.active {
  border: solid 1px #e5e9f2;
  border-bottom: 0px;
}

.tab.tab-style-a .tab-content {
  border-top: 1px solid #e5e9f2;
}

.highcharts-container {
  border: solid 1px #e5e9f2;
  border-radius: 0.2rem;
}
.mycollapse-enter {
  transition: opacity .5s;
}
.mycollapse-leave {
  opacity: 0
}
.overflow-x{
  min-width: 1415px;
  overflow-x: auto;
}
.my-custom-highchart .highcharts-container, .my-custom-highchart .highcharts-root{
  height: 470px!important;
}
.highcharts-subtitle tspan, .highcharts-axis-labels.highcharts-xaxis-labels, .title-cap .highcharts-title, .datepicker span.month{
  text-transform: capitalize;
}
.text-no-capitalize .highcharts-subtitle tspan, .text-no-capitalize .highcharts-axis-labels.highcharts-xaxis-labels, .text-no-capitalize .title-cap .highcharts-title{
  text-transform: none!important;
}
</style>
