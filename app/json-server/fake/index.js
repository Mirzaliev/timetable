const json = {
  id: 1,
  group: '311-ПИ',
  week: 'even',
  typeOfTraining: 'undergrad',
  days: [
    {
      id: '1 ',
      date: '14 Декабря',
      name: 'Понедельник',
      lessons: [
        {
          number: 1,
          time: '10:10-11:40',
          list: [
            {
              name: 'Дискретная математика',
              teacher: 'ст.пр.Рачинскаяааааяяяяя Н.В.',
              fullNameTeacher: 'ст.пр.Рачинскаяааааяяяяя Нинна Владиславовна',
              typeLesson: 'практика',
              classroom: 'ауд.300'
            }
          ]
        },
        {
          number: 2,
          time: '10:10-11:40',
          list: [
            {
              name:
                'Безопасность жизнедеятельности и Элективные дисциплины ( модули) по физической культуре',
              teacher: 'доц.Чувенков А.Ф.',
              fullNameTeacher: 'доц.Чувенков Артем Фикретович',
              typeLesson: 'практика',
              classroom: 'ауд.359'
            },
            {
              name:
                '2Безопасность жизнедеятельности и Элективные дисциплины ( модули) по физической культуре',
              teacher: 'доц.Чувенков А.Ф.',
              fullNameTeacher: 'доц.Чувенков Артем Фикретович',
              typeLesson: 'практика',
              classroom: 'ауд.200'
            }
          ]
        },
        {
          number: 4,
          time: '10:10-11:40',
          list: [
            {
              name: 'Дискретная математика',
              teacher: 'ст.пр.Рачинскаяааааяяяяя Н.В.',
              fullNameTeacher: 'ст.пр.Рачинскаяааааяяяяя Нинна Владиславовна',
              typeLesson: 'практика',
              classroom: 'ауд.359'
            }
          ]
        }
      ]
    },
    {
      id: '2 ',
      date: '15 Декабря',
      name: 'Вторник',
      lessons: [
        {
          number: 1,
          time: '10:10-11:40',
          list: [
            {
              name: 'Объектно- ориентированное программирование',
              teacher: 'ст.пр.Рачинскаяааааяяяяя Н.В.',
              fullNameTeacher: 'ст.пр.Рачинскаяааааяяяяя Нинна Владиславовна',
              typeLesson: 'практика',
              classroom: 'ауд.669'
            }
          ]
        },
        {
          number: 3,
          time: '10:10-11:40',
          list: [
            {
              name:
                'Элективные дисциплины ( модули) по физической культуре и спорту',
              teacher: 'ст.пр.Рачинскаяааааяяяяя Н.В.',
              fullNameTeacher: 'ст.пр.Рачинскаяааааяяяяя Нинна Владиславовна',
              typeLesson: 'практика',
              classroom: 'ауд.669'
            }
          ]
        },
        {
          number: 4,
          time: '10:10-11:40',
          list: [
            {
              name:
                'Безопасность жизнедеятельности и Элективные дисциплины ( модули) по физической культуре',
              teacher: 'проф.Сахарова Л.В.',
              fullNameTeacher: 'проф.Сахарова Лидия Васильевна',
              typeLesson: 'практика',
              classroom: 'ауд.300'
            }
          ]
        }
      ]
    },
    {
      id: '3 ',
      date: '16 Декабря',
      name: 'Среда',
      lessons: [
        {
          number: 1,
          time: '10:10-11:40',
          list: [
            {
              name: 'Дискретная математика',
              teacher: 'проф.Сахарова Л.В.',
              fullNameTeacher: 'проф.Сахарова Лидия Васильевна',
              typeLesson: 'лекция',
              classroom: 'ауд.359'
            }
          ]
        }
      ]
    },
    {
      id: '4 ',
      date: '17 Декабря',
      name: 'Четверг',
      lessons: [
        {
          number: 2,
          time: '10:10-11:40',
          list: [
            {
              name:
                'Элективные дисциплины ( модули) по физической культуре и спорту',
              teacher: 'ст.пр.Рачинскаяааааяяяяя Н.В.',
              fullNameTeacher: 'ст.пр.Рачинскаяааааяяяяя Нинна Владиславовна',
              typeLesson: 'лабораторная',
              classroom: 'ауд.300'
            }
          ]
        },
        {
          number: 3,
          time: '10:10-11:40',
          list: [
            {
              name:
                'Безопасность жизнедеятельности и Элективные дисциплины ( модули) по физической культуре',
              teacher: 'доц.Чувенков А.Ф.',
              fullNameTeacher: 'доц.Чувенков Артем Фикретович',
              typeLesson: 'практика',
              classroom: 'ауд.300'
            }
          ]
        },
        {
          number: 4,
          time: '10:10-11:40',
          list: [
            {
              name:
                'Элективные дисциплины ( модули) по физической культуре и спорту',
              teacher: 'проф.Сахарова Л.В.',
              fullNameTeacher: 'проф.Сахарова Лидия Васильевна',
              typeLesson: 'лекция',
              classroom: 'ауд.669'
            }
          ]
        }
      ]
    },
    {
      id: '5 ',
      date: '18 Декабря',
      name: 'Пятница',
      lessons: [
        {
          number: 1,
          time: '10:10-11:40',
          list: [
            {
              name: 'Дискретная математика',
              teacher: 'ст.пр.Рачинскаяааааяяяяя Н.В.',
              fullNameTeacher: 'ст.пр.Рачинскаяааааяяяяя Нинна Владиславовна',
              typeLesson: 'практика',
              classroom: 'ауд.669'
            }
          ]
        },
        {
          number: 2,
          time: '10:10-11:40',
          list: [
            {
              name:
                'Элективные дисциплины ( модули) по физической культуре и спорту',
              teacher: 'доц.Чувенков А.Ф.',
              fullNameTeacher: 'доц.Чувенков Артем Фикретович',
              typeLesson: 'практика',
              classroom: 'ауд.359'
            }
          ]
        },
        {
          number: 5,
          time: '10:10-11:40',
          list: [
            {
              name: 'Дискретная математика',
              teacher: 'проф.Сахарова Л.В.',
              fullNameTeacher: 'проф.Сахарова Лидия Васильевна',
              typeLesson: 'лекция',
              classroom: 'ауд.669'
            }
          ]
        }
      ]
    },
    {
      id: '6 ',
      date: '19 Декабря',
      name: 'Суббота',
      lessons: [
        {
          number: 1,
          time: '10:10-11:40',
          list: [
            {
              name: 'Дискретная математика',
              teacher: 'проф.Сахарова Л.В.',
              fullNameTeacher: 'проф.Сахарова Лидия Васильевна',
              typeLesson: 'лекция',
              classroom: 'ауд.300'
            }
          ]
        }
      ]
    },
    {
      id: 7,
      date: '20 Декабря',
      name: 'Воскресенье',
      lessons: [
        {
          number: 4,
          time: '10:10-11:40',
          list: [
            {
              name:
                'Элективные дисциплины ( модули) по физической культуре и спорту',
              teacher: 'ст.пр.Рачинскаяааааяяяяя Н.В.',
              fullNameTeacher: 'ст.пр.Рачинскаяааааяяяяя Нинна Владиславовна',
              typeLesson: 'лекция',
              classroom: 'ауд.300'
            }
          ]
        },
        {
          number: 5,
          time: '10:10-11:40',
          list: [
            {
              name:
                'Элективные дисциплины ( модули) по физической культуре и спорту',
              teacher: 'ст.пр.Рачинскаяааааяяяяя Н.В.',
              fullNameTeacher: 'ст.пр.Рачинскаяааааяяяяя Нинна Владиславовна',
              typeLesson: 'лекция',
              classroom: 'ауд.300'
            }
          ]
        },
        {
          number: 7,
          time: '10:10-11:40',
          list: [
            {
              name: 'Дискретная математика',
              teacher: 'проф.Сахарова Л.В.',
              fullNameTeacher: 'проф.Сахарова Лидия Васильевна',
              typeLesson: 'лекция',
              classroom: 'ауд.300'
            }
          ]
        },
        {
          number: 11,
          time: '10:10-11:40',
          list: [
            {
              name: 'Объектно- ориентированное программирование',
              teacher: 'ст.пр.Рачинскаяааааяяяяя Н.В.',
              fullNameTeacher: 'ст.пр.Рачинскаяааааяяяяя Нинна Владиславовна',
              typeLesson: 'лекция',
              classroom: 'ауд.300'
            }
          ]
        }
      ]
    }
  ]
}

const days = json.days
for (let di = 0; di < days.length; di++) {
  let differenceBetweenLessonNumbers = 0
  let lastLessonNumber = 0
  for (let li = 0; li < days[di].lessons.length; li++) {
    differenceBetweenLessonNumbers =
      days[di].lessons[li].number - lastLessonNumber

    if (differenceBetweenLessonNumbers > 1) {
      if (differenceBetweenLessonNumbers > 2) {
        for (let k = 1; k <= differenceBetweenLessonNumbers - 1; k++) {
          json.days[di].lessons.splice(li + k - 1, 0, {
            number: li + k,
            key: `aa ${li + k - 1}`
          })
        }
      } else {
        json.days[di].lessons.splice(li, 0, { number: li + 1, key: 'jj' })
      }
    }

    lastLessonNumber = days[di].lessons[li].number
    /* Вывод */
    if (di === 0 && li === 0) {
      console.log(days)
    }
  }
}
//https://js.do/code/545672
