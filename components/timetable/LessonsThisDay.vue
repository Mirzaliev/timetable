<template>
  <div class="lessons-list-item">
    <LessonEmpty v-if="!lessonsThisDay.list"></LessonEmpty>
    <!--      Если урок общий-->
    <Lesson
      v-else-if="lessonsThisDay.list.length === 1"
      :lesson="assignData"
    ></Lesson>
    <!--или-->
    <ClassDivisionIntoSubgroups
      v-else-if="lessonsThisDay.list.length > 1"
      :lessons-for-subgroups="lessonsThisDay"
    ></ClassDivisionIntoSubgroups>
    <!--     или -->
  </div>
</template>

<script>
export default {
  name: 'LessonsThisDay',
  components: {
    Lesson: () => import('~/components/timetable/Lesson.vue'),
    ClassDivisionIntoSubgroups: () =>
      import('~/components/timetable/ClassDivisionIntoSubgroups.vue'),
    LessonEmpty: () => import('~/components/timetable/LessonEmpty.vue')
  },
  props: {
    lessonsThisDay: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      total: false
    }
  },
  computed: {
    assignData() {
      // console.log(this.lessonsThisDay)
      return Object.assign(
        {},
        {
          time: this.lessonsThisDay.time,
          number: this.lessonsThisDay.number
        },
        this.lessonsThisDay.list[0]
      )
    }
  }
}
</script>

<style lang="sass">
.lessons-list-item
  position: relative
  height: 130px
  //padding: 0.7em
  margin-bottom: 0.8em
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25)
  border-radius: 5px
  &:last-child
    margin-bottom: 0.1em
</style>
