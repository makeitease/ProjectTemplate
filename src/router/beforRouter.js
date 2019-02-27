import router from "./index"
import {
  getRouter
} from './getDynamicRouter'
const whiteList = ["/"]; // 设置路由白名单,不经过钩子函数 默认'./'为登陆页面
//设置路由钩子,控制url(页面显示)
sessionStorage.token = 11111
var aa = [{
  path: '/user',
  name: 'HelloWorld',
  children: [{
    path: '/user',
    name: 'HelloWorld',
    component: resolve => require(['@/views/table/showTable'], resolve),

  }]
}]
sessionStorage.menu = JSON.stringify(aa)
var isAdd = true;
router.beforeEach((to, from, next) => {
  console.log("路由钩子开始==>")
  if (sessionStorage.token) { //判断是否含有权限字段(是否登陆过)
    if (sessionStorage.router) { //判断后台是否返回权限路由
      console.log(to.path)
      var nextPath = to

      console.log("已加载路由和token信息" + to.path)
      if (to.path == '/') { //满足以上两个条件时打开网站,直接进入首页
        next("/home")
      } else {
        console.log("正常跳转")
        next()
        // router.addRoutes(JSON.parse(sessionStorage.router))
        // router.replace(path)
        // router.options.routes = router.options.routes.concat(JSON.parse(sessionStorage.router))
        // next({
        //   ...to,
        //   replace: true
        // })


      }
    } else {
      let newRouter = getRouter(JSON.parse(sessionStorage.menu))
      sessionStorage.router = JSON.stringify(newRouter)
      router.options.routes = router.options.routes.concat(newRouter)
      router.addRoutes(newRouter) // 动态添加可访问路由表
      next({
        ...to,
        replace: true
      })

      console.log(router.options.routes)
    }

  } else {
    if (whiteList.indexOf(to.path) != '-1') {
      console.log(whiteList.indexOf(to.path))
      next()
    } else {
      next('/')
    }
  }
})
