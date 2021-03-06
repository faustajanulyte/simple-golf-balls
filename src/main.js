import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// import BootstrapVue from 'bootstrap-vue'

import './assets/css/global.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './assets/css/bootstrap-custom.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
