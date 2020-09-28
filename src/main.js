import Vue from 'vue'
import App from './App.vue'
import sync  from 'vuex-router-sync'
import router from './router'
import VueRouterPermissions from 'vue-router-permissions'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from './config'
import VueLocalStorage from 'vue-localstorage'
//import jQuery from "jquery";
import setupAxios from './utils/interceptors'
//import Bootstrap from "bootstrap/dist/js/bootstrap"
//import AppJS from "../src/assets/js/app"
//import AppJS from "../src/assets/js/app"

import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'

require('babel-regenerator-runtime');
import VueHtml2Canvas from 'vue-html2canvas';
import HighchartsVue from 'highcharts-vue';
import VueAnalytics from 'vue-analytics';

global.jQuery = jQuery
global.$ = jQuery

Vue.use(VueRouterPermissions, router)
Vue.use(VueAxios, axios)
Vue.use(VueLocalStorage)
Vue.use(VueHtml2Canvas)
Vue.use(HighchartsVue)

Vue.config.productionTip = false
Vue.axios.defaults.baseURL = config.base_url

Vue.use(VueAnalytics, {
  id: 'UA-120295200-1',
  router
});

$(function() {
  const simpleBarEnabled =
    document.getElementsByClassName('js-simplebar').length > 0;
  const simpleBarInstance = simpleBarEnabled
    ? new SimpleBar(document.getElementsByClassName('js-simplebar')[0])
    : null;

  /* Sidebar toggle behaviour */
  $('.sidebar-toggle').on('click', function() {
    $('.sidebar')
      .toggleClass('toggled')
      // Triger resize after animation
      .one('transitionend', function() {
        setTimeout(function() {
          window.dispatchEvent(new Event('resize'));
        }, 100);
      });
  });
  $('#app').tooltip({
    selector: '[data-toggle="tooltip"]'
  })
  /*$('#app').popover({
    selector: '[data-toggle="popover"]',
    html: true
  })
  $('*[data-toggle="popover"]').popover({
    container: '#app'
  });

  $('#app').popover({
    selector: '[data-toggle="popover"]',
    // container: 'body',
    html: true,
    sanitize: false,
    content: function () {
      return $(this).next('.popper-content').html()
    }
  });*/

  const active = $('.sidebar .active');

  if (active.length && active.parent('.collapse').length) {
    const parent = active.parent('.collapse');

    parent.prev('a').attr('aria-expanded', true);
    parent.addClass('show');
  }

  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  $('body').on('click', function (e) {
      $('[data-toggle=popover]').each(function () {
          if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
              $(this).popover('hide');
          }
      });
  });

  $('#navbarContent .navbar-nav li.nav-item link, #navbarContent .navbar-nav li.nav-item a').on('click', function (e) {
    $('.popover').popover('hide');
  });
});

setupAxios()
/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */
// PERMISSIONS
import {getTypeUser, getReadOnly} from '@/utils/auth'
// alert(':::' + getTypeUser()+(getReadOnly() != '' ? '-'+getReadOnly() : ''));
// alert(getTypeUser()+(getTypeUser() == 'afp' ? (getReadOnly() !== '' ? '-'+getReadOnly() : '') : ''));
let authenticate = Promise.resolve({ role: getTypeUser()+(getTypeUser() == 'afp' ? (getReadOnly() !== '' ? '-'+getReadOnly() : '') : '') });
authenticate.then(user => { 
  Vue.prototype.$user.set(user);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});
// !PERMISSIONS


