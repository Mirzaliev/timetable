<template>
  <div class="lessons-day">
    <div class="lessons-day-info">
      <span class="lessons-day__name lh-1">{{ day.name }}</span>
      <span class="lessons-day__date lh-1">{{ day.date }}</span>
    </div>
    <div class="lessons-list">
      <LessonsThisDay
        v-for="lessons in day.lessons"
        :key="lessons.id"
        :lessons-this-day="lessons"
      ></LessonsThisDay>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonsDays',
  components: {
    LessonsThisDay: () => import('~/components/timetable/LessonsThisDay.vue')
  },
  props: {
    day: {
      type: Object,
      required: true
    }
  },
  methods: {
    spliceLessons() {
      const j = this.day.lessons.splice(1, 0, { sdfsdfsdf: 'sdfsdfdsf' })
      console.log(j)
      return j
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.timetable-lessons-wrapper
  .lessons-day
    font-size: 1em
    &-info
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 0.8em
    &__name
      display: block
      font-size: 1.2em
      font-family: $bold
    &__date
      font-size: 0.8em
  .lessons-list, .lessons-day
    &:focus
      outline: none!important
</style>
