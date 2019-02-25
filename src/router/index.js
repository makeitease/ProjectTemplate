import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(["@/views/login/index"], resolve)
  }, {
    path: '/home',
    name: 'home',
    component: Layout,
    children: [{
      path: '/home',
      name: 'HelloWorld',
      component: resolve => require(["@/views/home/index"], resolve)
    }]
  }]
})
