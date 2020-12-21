const state = () => ({
  timetable: {}
})

const mutations = {
  setTimetable(state, timetable) {
    state.timetable = timetable
  }
}

const actions = {
  async getTimetable({ commit }, groupId) {
    const data = await this.$apiRepository.timetable.get(groupId)
    if (data) {
      commit('setTimetable', data)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
