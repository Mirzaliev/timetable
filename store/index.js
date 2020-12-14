export const state = () => ({
  searchPageWrapHeight: 0,
  size: null,
  error: [],
  faculties: []
})
export const mutations = {
  setSearchPageWrapHeight(state, height) {
    state.searchPageWrapHeight = height
  },
  SET_SIZE(state, size) {
    state.size = size
  },
  SET_FACULTIES(state, faculties) {
    state.faculties = faculties
  }
}
export const actions = {
  // При загрузке приложения
  async nuxtServerInit({ commit }) {
    // Загружаем факультеты
    const data = await this.$axios.$get('/faculties')
    commit('SET_FACULTIES', data)
  },
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
  getSearchPageWrapHeight: (s) => s.searchPageWrapHeight,
  GET_FACULTIES: (s) => s.faculties
}
