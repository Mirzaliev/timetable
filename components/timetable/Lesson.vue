<template>
  <div class="lessons-lesson">
    <div class="lessons-lesson-topBlock">
      <span class="lessons-lesson__number lessons-lesson_greyText lh-1">{{
        lesson.number
      }}</span>
      <div class="lessons-lesson__name">
        {{ lesson.name }}
      </div>
      <span class="lessons-lesson__teacher lessons-lesson_greyText lh-1">{{
        lesson.teacher
      }}</span>
    </div>
    <div class="lessons-lesson-footerBlock lh-1">
      <span class="lessons-lesson__label" :class="lessonsTypeClass">{{
        lessonType
      }}</span>
      <span class="lessons-lesson__label lessons-lesson__label_classroom">{{
        lesson.classroom
      }}</span>
      <span class="lessons-lesson__label lessons-lesson__label_time">{{
        lesson.time
      }}</span>
    </div>
    <a class="lessons-lesson__view" @click.prevent="handlerViewLesson()"></a>
  </div>
</template>

<script>
export default {
  name: 'Lesson',
  props: {
    lesson: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      lessonType: this.lesson.typeLesson
    }
  },
  computed: {
    lessonsTypeClass() {
      switch (this.lessonType) {
        case 'практика':
          return 'lessons-lesson__label_practice'
        case 'лабораторная':
          return 'lessons-lesson__label_laboratory'
        case 'лекция':
          return 'lessons-lesson__label_lecture'
        default:
          return 'lessons-lesson__label_practice'
      }
    }
  },
  methods: {
    handlerViewLesson() {
      console.log(this.lesson)
    }
  }
  // Надо добавить проверку  display: -webkit-box
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.lessons-lesson
  display: flex!important
  flex-direction: column
  height: 100%
  padding: 0.5em
  &:focus
    outline: none!important
  &__number
    display: none
  &__name
    display: block
    display: -webkit-box
    line-height: 1.1
    color: $accent
    font-family: $medium
    text-overflow: ellipsis
    //white-space: nowrap
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    overflow: hidden
    max-width: 100%
    max-height: 2.5rem
    margin: 0.33rem 0
  &__teacher
    //
  &-topBlock
    display: flex
    flex-direction: column
    flex: 1 0 auto
  &-footerBlock
    display: flex
    flex: 0 0 auto
  &__label
    display: block
    color: white
    font-size: 0.8em
    padding: 0.4em 0.6em
    margin-right: 0.5em
    border-radius: 5px
    &_practice
      background-color: $pink
    &_lecture
      background-color: $success
    &_laboratory
      background-color: $warning
    &_classroom
      background-color: $danger
    &_time
      border: $color-for-border 1px solid
      color: $text
  &_greyText
    font-size: 0.88em
    color: $grey-for-text
  &__view
    position: absolute
    display: block
    border: 0
    outline: 0
    padding: 0
    margin: 0
    top: 0.5em
    right: 0.5em
    cursor: pointer
    &:after
      content: '\2807'
      color: $grey-for-text
      font-size: 22px
</style>
