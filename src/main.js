// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './directive' // 自定义指令

import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/iconfont/iconfont.js'

Vue.use(ELEMENT)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
