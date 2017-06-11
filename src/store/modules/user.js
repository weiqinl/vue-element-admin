import * as types from '../types.js'

// initial state
const state = {
  user: {}
}

// getters
const getters = {
  getUser = state => state.getUser
}

//actions
const actions = {
  getUser({ commit, state }, user) {
    commit(types.GETUSER, user)
  }
}

// mutations
const mutations = {
  [types.GETUSER](state, user) {
    state.user = user
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
