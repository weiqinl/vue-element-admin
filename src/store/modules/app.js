import * as types from '../types.js'

// initial state
const state = {
  siderbar: {
    opened: true
  }
}

// getters
const getters = {
  // getSiderbarOpened = state => state.siderbar.opened
}

//actions
const actions = {
  toggle_siderbar({
    commit,
    state
  }) {
    commit(types.TOGGLE_SIDERBAR, state)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_SIDERBAR](state) {
    state.siderbar.opened = !getSiderbarOpened
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
