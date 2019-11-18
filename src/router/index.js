import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News/News.vue'
import Map from '../views/Map/Map.vue'
import BigEvent from '../views/BigEvent/BigEvent.vue'
import VehicleChronology from '../views/VehicleChronology/VehicleChronology.vue'
import Vehicle from '../views/Vehicle/Vehicle.vue'
import Role from '../views/Role/Role.vue'
import VehicleDetail from '../views/Vehicle/VehicleDetail/VehicleDetail.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  redirect: '/news',
  children: [{
    path: '/news',
    name: 'news',
    component: News
  }, {
    path: '/map',
    name: 'map',
    component: Map
  }, {
    path: '/bigevent',
    name: 'bigevent',
    component: BigEvent
  }, {
    path: '/vehiclechronology',
    name: 'vehiclechronology',
    component: VehicleChronology
  }, {
    path: '/vehicle',
    name: 'vehicle',
    component: Vehicle
  }, {
    path: '/role',
    name: 'role',
    component: Role
  }, {
    path: '/vehicledetail',
    name: 'vehicledetail',
    component: VehicleDetail
  }]
}]

const router = new VueRouter({
  routes
})

export default router
