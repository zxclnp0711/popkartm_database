import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/normalize.css'
// import Vant from 'vant'
import axios from 'axios'
// import 'vant/lib/index.css'
import {
  NavBar,
  Icon,
  Popup,
  Collapse,
  CollapseItem,
  CellGroup,
  Field,
  Row,
  Col,
  Button,
  Tag,
  Loading,
  Toast,
  Progress
} from 'vant'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(NavBar).use(Icon).use(Popup).use(Collapse).use(CollapseItem).use(CellGroup).use(Field).use(Row).use(Col).use(Button).use(Tag)
  .use(Loading).use(Toast).use(Progress)
if (process.env.VUE_APP_MODE === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.VUE_APP_MODE === 'production') {
  axios.defaults.baseURL = 'https://raw.githubusercontent.com/zxclnp0711/popkartm_database/master/public'
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
