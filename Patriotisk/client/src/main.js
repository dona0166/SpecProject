// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueHighcharts from 'vue-highcharts'
import VueChart from 'vue-chart-js'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import underscore from 'vue-underscore';

Vue.config.productionTip = false
Vue.use(Vuetify)

Vue.use(VueHighcharts)
Vue.use(VueChart)

sync(store, router)

Vue.use(underscore);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
