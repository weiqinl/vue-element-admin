import * as types from './types.js'

export const login = ({ commit }, data) => {
  commit(types.LOGIN, data)
}

export const logout = ({ commit }, data) => {
  commit(types.LOGOUT)
}
