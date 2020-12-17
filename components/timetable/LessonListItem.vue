<template>
  <div class="lessons-list-item">
    <!--      Если урок общий-->
    <Lesson v-if="total"></Lesson>
    <!--     или -->
    <LessonEmpty v-else-if="false"></LessonEmpty>
    <!--     или -->
    <SplitLesson v-else></SplitLesson>
  </div>
</template>

<script>
export default {
  name: 'LessonListItem',
  components: {
    Lesson: () => import('~/components/timetable/Lesson.vue'),
    SplitLesson: () => import('~/components/timetable/SplitLesson.vue'),
    LessonEmpty: () => import('~/components/timetable/LessonEmpty.vue')
  },
  data() {
    return {
      total: false
    }
  }
}
</script>

<style lang="sass">
.lessons-list-item
  height: 130px
  //padding: 0.7em
  margin-bottom: 0.8em
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25)
  border-radius: 5px
  &:last-child
    margin-bottom: 0.1em
</style>
