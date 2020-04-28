import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new Router({
  routes: [
    {
      path: '/',
      name: "home",
      component: Home
    },
    {
      path: '/about',
      name: "about",
      component: () => import('./views/About')
    }
  ]
})

new Vue({
  router,
  render: h =>h(Home)
}).$mount('#app')
