import 'normalize.css/normalize.css';
import 'vuetify/dist/vuetify.min.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@/utils/registerServiceWorker';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueToasted from 'vue-toasted';
import VueCookies from 'vue-cookies';
import VueAuth from '@websanova/vue-auth';
//global
import config from '@/config';
import store from '@/store';
import GlobalMixin from "@/mixins/global";
//website
import vuetify from '@/website/plugins/vuetify';
import webApp from '@/website/index';
import router from '@/website/router';
import './website/plugins'

if (!window.VueComp) window.VueComp = {
  Others: [],
  Config: config
}
window.Pusher = require('pusher-js');
window._ = require('lodash');

const websiteEl = document.getElementById('website');
if (websiteEl) {
  window.axios = axios;
  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  Vue.use(VueAxios, window.axios)
  Vue.axios.defaults.baseURL = '/api';

  Vue.use(VueToasted)
  Vue.use(VueCookies);
  Vue.mixin(GlobalMixin);
  Vue.config.productionTip = false;

  Vue.router = router;
  Vue.use(VueAuth, config.auth().VueAuth);

  window._VueWebApp = new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(webApp),
  }).$mount('#website');

  axios.interceptors.request.use(function (config) {
    window._VueWebApp.$store.dispatch('system/fireRequest', config)
    return config;
  }, function (error) {
    window._VueWebApp.$store.dispatch('system/addResponse', error.response)
    return Promise.reject(error);
  });

  axios.interceptors.response.use(response => {
    window._VueWebApp.$store.dispatch('system/addResponse', response)
    return response;
  }, error => {
    window._VueWebApp.$store.dispatch('system/addResponse', error.response)
    return Promise.reject(error);
  });
}
