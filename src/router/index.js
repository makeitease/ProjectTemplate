import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layoutMain'

Vue.use(Router)
/*
  路由统一使用路由懒加载方法,减少项目加载时间
*/
let baseRouter = [{
  path: '/',
  name: 'login',
  component: resolve => require(['@/views/login'], resolve)
}];
export const dynamicRouter = [{
  path: '/login',
  name: 'login1',
  component: resolve => require(['@/views/login'], resolve)
}, {
  path: '/user',
  name: 'HelloWorld',
  redirect: '/user',
  component: Layout,
  children: [{
    path: '/home',
    name: 'HelloWorl',
    component: resolve => require(['@/views/table/showTable'], resolve),

  }, {
    path: '/user',
    name: 'Hello',
    component: resolve => require(['@/views/table/showTable'], resolve),

  }]
}]
export const allNo = {
  path: '*',
  name: '404',
  component: resolve => require(['@/components/404'], resolve)
}
export default new Router({
  routes: baseRouter
})
