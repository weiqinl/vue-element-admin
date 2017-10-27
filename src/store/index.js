import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import app from './modules/app.js'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  modules: {
    app,
    user
  },
  strict: debug
})
