export default class AddingEmptyLessons {
  /**
   * This class adds blank lessons between lessons if there is a queue
   * difference between them. This is for easy presentation. For example,
   * if the first lessons are 1 and the next 3, then the class adds an
   * object with number 2 between them
   *--------------------------------------------------------------------
   * Этот класс добавляет  пустые уроки между уроками, если между ними
   * есть разница очереди. Это для удобного представления. Например,
   * если первый уроки 1 а следующий 3, то класс добавляет между ними
   * объект с номером 2
   *
   * @param timetable
   */
  constructor(timetable) {
    this.timetable = timetable
    this.differenceBetweenLessonNumbers = 0
    this.lastLessonNumber = 0
  }
  /**
   * Main function
   * @param {Object} timetable
   * @returns {Object}
   */
  adding() {
    this.throughEveryDayWithLessons(this.timetable[0].days)
    return this.timetable
  }

  /**
   * @return null
   * @param {Object} days
   */
  throughEveryDayWithLessons(days) {
    for (let di = 0; di < days.length; di++) {
      this.differenceBetweenLessonNumbers = 0
      this.lastLessonNumber = 0
      this.throughEveryLessons(days[di].lessons, di)
    }
  }

  /**
   * @return null
   * @param {Object} daysLessons
   * @param {Number} di (iterator from for in func throughEveryDayWithLessons  )
   */
  throughEveryLessons(daysLessons, di) {
    for (let li = 0; li < daysLessons.length; li++) {
      // console.log(days[di].lessons.length)
      this.differenceBetweenLessonNumbers =
        daysLessons[li].number - this.lastLessonNumber

      if (this.differenceBetweenLessonNumbers > 1) {
        if (this.differenceBetweenLessonNumbers > 2) {
          this.addFewEmptyLessonsToIndex(di, li)
        } else {
          this.spliceEmptyLessonsToIndex(di, li, li + 1)
        }
      }
      this.lastLessonNumber = daysLessons[li].number
    }
  }

  /**
   *
   * @return null
   * @param {Number} di (iterator from for in func throughEveryDayWithLessons  )
   * @param {Number} li (iterator from for in func throughEveryLessons  )
   */
  addFewEmptyLessonsToIndex(di, li) {
    for (let k = 1; k <= this.differenceBetweenLessonNumbers - 1; k++) {
      this.spliceEmptyLessonsToIndex(di, li + k - 1, li + k)
    }
  }
  /**
   *
   * @return null
   * @param {Number} di
   * @param {String} spliceIndex
   * @param {String} numberLesson
   */
  spliceEmptyLessonsToIndex(di, spliceIndex, numberLesson) {
    this.timetable[0].days[di].lessons.splice(spliceIndex, 0, {
      number: numberLesson,
      key: 'jj'
    })
  }
}
