import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Module1View from '../views/Module1View.vue'
import Module2View from '../views/Module2View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/module1',
    name: 'Module1Configurator',
    component: Module1View
  },
  {
    path: '/module1/:moduleConf',
    name: 'Module1Show',
    component: Module1View
  },
  {
    path: '/module2',
    name: 'Module2Configurator',
    component: Module2View
  },
  {
    path: '/module2/:moduleConf',
    name: 'Module2Show',
    component: Module2View
  }
]

const router = new VueRouter({
  routes
})

export default router
