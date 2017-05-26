import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '/components/Hello.vue'
import Hello from '../components/Hello.vue'
import Index from '../views/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path:'/index',
      name: 'index',
      component: Index

    }
  ]
})
