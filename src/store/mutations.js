export * as types from './types.js'

export const [types.LOGIN] = (state, data) => {
  state.token = data
}
export const [types.LOGOUT] = (state) => {
  state.token = null
}
