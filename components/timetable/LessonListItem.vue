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

<style lang="sass">
.lessons-list-item
  .slick-slider , .slick-list, .slick-track, .slick-slide, .slick-slide > div
    height: 100%
  .slick-slider .slick-slide
    padding: 0!important
  .lessons-lesson
    display: flex!important
    &:focus
      outline: none!important

</style>
