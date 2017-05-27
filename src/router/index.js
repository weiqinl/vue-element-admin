import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home.vue'
import Login from '../views/login.vue'

import tables from './tables.js'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        redirect: 'home',
    }, {
        path: '/login',
        name: 'login',
        component: Login,
    }, {
        path: '/home',
        component: Index,
        children: [{
            path: '',
            component: Home,
            meta: ['Dashboard1'],
        }]
    }, {
        path: '/tables',
        name: 'tables',
        redirect: 'tables/basic',
        component: Index,
        children: tables
    }, {
        path: '*',
        redirect: 'home'
    }]
})
