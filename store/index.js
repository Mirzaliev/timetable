export const state = () => ({
  height: 0
})
export const actions = {
  WINDOW_SIZE_CHANGED({ commit }, _height) {
    console.log(_height)
    commit('SET_WINDOW_SIZE_CHANGED', _height)
  }
}
export const mutations = {
  SET_WINDOW_SIZE_CHANGED(state, _height) {
    state.height = _height
  }
}
export const getters = {
  getWindowHeight(state) {
    return state.height + 'px'
  }
}
