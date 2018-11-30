import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import store from './store'


import dataAnalysis from './components/dataAnalysis.vue';
import todayWeather from './components/todayWeather.vue';

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

//code for router
const routes = [{
    path: "/dataAnalysis",
    component: dataAnalysis
  },
  {
    path: "/todayWeather",
    component: todayWeather
  }
]
const router = new VueRouter({
  routes // short for `routes: routes`  
})
new Vue({
  router: router,
  render: h => h(App),
  store
}).$mount('#app')