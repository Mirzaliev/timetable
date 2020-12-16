<template>
  <div class="lessons-list-item">
    <!--      Если урок общий-->
    <Lesson v-if="total"></Lesson>
    <!--     Иначе -->
    <SplitLesson v-else></SplitLesson>
  </div>
</template>

<script>
export default {
  name: 'LessonListItem',
  components: {
    Lesson: () => import('~/components/timetable/Lesson.vue'),
    SplitLesson: () => import('~/components/timetable/SplitLesson.vue')
  },
  data() {
    return {
      total: false
    }
  }
}
</script>

<style lang="sass"></style>
