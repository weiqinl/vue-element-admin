import * as types from '../types.js'

// initial state
const state = {
  token: null
}

// getters
const getters = {
  // getUser = state => state.getUser
}

//actions
const actions = {
  getUser({
    commit
  }, user) {
    commit(types.GETUSER, user)
  },
  login({
    commit
  }, token) {
    commit(types.LOGIN, token)
  },
  logout({
    commit
  }) {
    commit(types.LOGOUT)
  }
}

// mutations
const mutations = {
  [types.GETUSER](state, user) {
    state.user = user
  },
  [types.LOGIN](state, data) {
    state.token = data
  },
  [types.LOGOUT](state) {
    state.token = null
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
