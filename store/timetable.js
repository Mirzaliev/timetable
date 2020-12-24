import AddingEmptyLessons from '~/app/helpers/AddingEmptyLessons'
const state = () => ({
  timetable: {},
  groupId: 0
})
/**
 *
 * @type {{setTimetable(*, *): void}}
 */
const mutations = {
  setTimetable(state, timetable) {
    state.timetable = timetable
  },
  setGroupId(state, groupId) {
    state.groupId = groupId
  }
}

const actions = {
  /**
   *
   * @param commit
   * @param groupId
   * @param week
   * @return {Promise<void>}
   */
  async getTimetable({ commit }, { groupId, week }) {
    const data = await this.$apiRepository.timetable
      .get(groupId, week)
      .then((data) => {
        return new AddingEmptyLessons(data).adding()
      })
    console.log('data', groupId)
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
