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
        meta: ['首页'],
    }, {
        path: '/login',
        name: 'login',
        component: Login,
        meta: ['登录'],
    }, {
        path: '/home',
        name: 'home',
        component: Index,
        meta: ['首页'],
        children: [{
            path: '',
            name: 'home',
            component: Home,
            meta: ['Home'],
        }]
    }, {
        path: '/tables',
        name: 'tables',
        redirect: '/tables/basic',
        component: Index,
        meta: ['表格'],
        children: tables
    }, {
        path: '*',
        redirect: 'index'
    }]
})
