import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import buycar from '@/components/buycar'
import loan from '@/components/loan'
import about from '@/components/about'
import login from '@/components/login'
import regin from '@/components/regin'
import randomlist from '@/components/randomlist'
import randomdetail from '@/components/randomdetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      {
        path: '/',
        name: 'login',
        component: login
    },
    {
      path: '/index',
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
      path: '/randomlist',
      name: 'randomlist',
      component: randomlist
  },
  {
      path: '/randomdetail',
      name: 'randomdetail',
      component: randomdetail
  }
  ]
})
