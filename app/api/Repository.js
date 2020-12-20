import TimetableRepository from './TimetableRepository'

export default ($axios) => ({
  timetable: TimetableRepository($axios)
})
