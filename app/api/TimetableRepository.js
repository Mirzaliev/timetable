const resource = '/timetable'

export default ($axios) => ({
  all() {
    return $axios.$get(`${resource}`)
  },
  get(id) {
    return $axios.$get(`${resource}?id=${id}`)
  }
})
