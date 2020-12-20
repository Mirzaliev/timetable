const state = () => ({
  timetable: {}
})

const mutations = {
  setTimetable(state, { timetable }) {
    state.timetable = timetable
  }
}

const actions = {
  async getTimetable(ctx, groupId) {
    const { status, data } = await this.$apiRepository.timetable.all()
    console.log(data)
    if (status === 200 && data) {
      //   const { data } = data
      ctx.commit('setTimetable', data)
    } else {
      // Handle error here
    }
  }
}

export default {
  state,
  mutations,
  actions
}
