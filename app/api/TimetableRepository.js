const resource = '/timetable'

export default ($axios) => ({
  /**
   *
   * @return {Promise<any>}
   */
  all() {
    return $axios.$get(`${resource}`)
  },
  /**
   *
   * @param id
   * @param week
   * @return {Promise<any>}
   */
  get(id, week = 'even') {
    return $axios.$get(`${resource}?groupId=${id}&week=${week}`)
  }
})
