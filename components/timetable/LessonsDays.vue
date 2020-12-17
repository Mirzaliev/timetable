<template>
  <div class="lessons-day">
    <div class="lessons-day-info">
      <span class="lessons-day__name">Понедельник</span>
      <span class="lessons-day__date">12 декабря</span>
    </div>
    <div class="lessons-list">
      <LessonListItem></LessonListItem>
      <LessonListItem></LessonListItem>
      <LessonListItem></LessonListItem>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonsDays',
  components: {
    LessonListItem: () => import('~/components/timetable/LessonListItem.vue')
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
