import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import DiagramByChemical from '@/components/DiagramByChemical/Index'
import Diagram from '@/components/DiagramByChemical/Diagram'
import Register from '@/components/Register/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bychemical',
      name: 'DiagramByChemical',
      component: DiagramByChemical
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
