import TimetableRepository from './TimetableRepository'

/**
 *
 * @param {Object} $axios
 * @return {{timetable: {all, get}}}
 */
export default ($axios) => ({
  timetable: TimetableRepository($axios)
})
