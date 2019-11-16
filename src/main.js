import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/normalize.css'
import Vant from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Vant)
if (process.env.VUE_APP_MODE === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.VUE_APP_MODE === 'production') {
  axios.defaults.baseURL = 'https://zxclnp0711.github.io/popkartm_database/dist/'
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')