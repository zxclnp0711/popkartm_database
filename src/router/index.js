import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue')
const News = () => import('../views/News/News.vue')
const Map = () => import('../views/Map/Map.vue')
const BigEvent = () => import('../views/BigEvent/BigEvent.vue')
const VehicleChronology = () => import('../views/VehicleChronology/VehicleChronology.vue')
const Vehicle = () => import('../views/Vehicle/Vehicle.vue')
const Role = () => import('../views/Role/Role.vue')
const VehicleDetail = () => import('../views/Vehicle/VehicleDetail/VehicleDetail.vue')

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
