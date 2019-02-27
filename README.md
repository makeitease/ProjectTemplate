# demo

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

src 下文件夹作用
api:所有和接口调用的方法存放地址
assets:所有静态资源存放地址
components:所有组件存放地址
router:所有路由设置的存放地址
utils:所有公用方法的存放地址
views:所有页面的存放地址,页面根据功能模块依次建立文件夹区分

本项目功能包括 axios 的封装以及权限验证(api 下 index.js);根据动态菜单挑选动态路由(router 下 getDynamicRouter.js)并实现挂载动态路由,以及添加路由钩子控制网址,添加白名单,以及刷新后动态路由的再次挂载问题(beforRouter.js);同时添加一些公用方法,例如基本的验证方法,判断以及数字转换的方法等等(utils 下 mainMethods.js)
