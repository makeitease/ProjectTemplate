// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import {
  Button,
  Cell,
  Field
} from 'mint-ui'



import {
  post,
  get
} from './api/index'
import {
  jsBridge
} from './utils/mainMethods'
Vue.component(Field.name, Field);
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.config.productionTip = false
Vue.prototype.$jsBridge = jsBridge;
Vue.prototype.$post = post
Vue.prototype.$get = get

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
