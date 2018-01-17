import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import buycar from '@/components/buycar'
import loan from '@/components/loan'
import about from '@/components/about'
import login from '@/components/login'
import regin from '@/components/regin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
  },
  {
      path: '/buycar',
      name: 'buycar',
      component: buycar
  },
  {
      path: '/loan',
      name: 'loan',
      component: loan
  },
  {
      path: '/about',
      name: 'about',
      component: about
  },
  {
      path: '/regin',
      name: 'regin',
      component: regin
  },
  {
      path: '/login',
      name: 'login',
      component: login
  }
  ]
})
