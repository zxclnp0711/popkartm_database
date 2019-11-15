import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/normalize.css'
import Vant, {
  Lazyload
} from 'vant'
import axios from 'axios'
import 'vant/lib/index.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Lazyload)
Vue.use(Vant)
if (process.env.VUE_APP_MODE === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.VUE_APP_MODE === 'production') {
  axios.defaults.baseURL = 'http://39.98.162.159:8049'
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
