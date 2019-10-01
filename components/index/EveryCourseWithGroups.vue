<template>
  <div class="course">
    <div class="course-info">
      <span class="course__number">{{ course.course }}</span>
      <span>КУРС</span>
    </div>
    <div class="course-groups tab-content_flexGrid">
      <a
        v-for="(group, index) in course.groups"
        :key="index"
        href="#"
        class="tab-content__btn"
        >{{ group.name }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'EveryCourseWithGroups',
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.groups-tab-wrapper
  .course
    display: flex
    margin-bottom: 2.5rem
    &:last-child
      margin-bottom: 0
    &-info
      font-family: $bold
      font-size: 1.5em
      color: black
      margin-right: 1.5rem
      line-height: 1.1
    &__number
      display: block
      font-size: 1.8em
      text-align: center
    &-groups
</style>
