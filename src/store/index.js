import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters'
import user from './modules/user.js'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  token = null
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    user
  },
  strict: debug
})
