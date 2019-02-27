// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './router/beforRouter'
import 'lib-flexible/flexible' //移动适配
//引入封装的axios方法
import {
  post,
  get
} from './api/index'
import iView from 'iview'; //引入iview组件库
import 'iview/dist/styles/iview.css'; //引入样式
Vue.use(iView);
Vue.config.productionTip = false
/*
  在vue的原型链上绑定封装的get和post方法
*/
Vue.prototype.$post = post;
Vue.prototype.$get = get;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
