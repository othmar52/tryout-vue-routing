import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Module1View from '../views/Module1View.vue'
import Module2View from '../views/Module2View.vue'
import Module1Configurator from '../components/Module1Configurator'
import Module1Show from '../components/Module1Show'

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
    component: Module1View,
    children: [
      {
        path: '',
        name: 'Module1Configurator',
        component: Module1Configurator
      },
      {
        path: ':moduleConf',
        name: 'Module1Show',
        component: Module1Show
      }
    ]
  },
  {
    path: '/module2',
    name: 'Module2Configurator',
    component: Module2View,
    children: [
      {
        path: ':moduleConf',
        name: 'Module2Show',
        component: Module2View
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
