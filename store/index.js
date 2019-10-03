export const state = () => ({
  searchPageWrapHeight: 0,
  size: null
})

export const mutations = {
  setSearchPageWrapHeight(state, height) {
    state.searchPageWrapHeight = height
  },
  setSize(state, size) {
    state.size = size
  }
}

export const actions = {
  calculateSearchPageWrapHeight({ commit }, size) {
    if (!size) {
      return
    }
    const wh = window.innerHeight
    if (size._ww && window.innerWidth !== size._ww) {
      commit('setSearchPageWrapHeight', `${wh - size.hh}px`)
      return
    }
    commit('setSearchPageWrapHeight', `${wh - size.hh}px`)
  }
}

export const getters = {
  getSearchPageWrapHeight: (s) => s.searchPageWrapHeight
}
