<template>
  <div class="lessons-lesson">
    <div class="lessons-lesson-topBlock">
      <span class="lessons-lesson__number lessons-lesson_greyText lh-1"
        >1 урок</span
      >
      <div class="lessons-lesson__name">
        Культура речи и деловое общение и практика обществознания и пустой текст
        какой для верстки
      </div>
      <span class="lessons-lesson__teacher lessons-lesson_greyText lh-1"
        >доц. Полякова А.И</span
      >
    </div>
    <div class="lessons-lesson-footerBlock lh-1">
      <span class="lessons-lesson__label lessons-lesson__label_practice"
        >практика</span
      >
      <span class="lessons-lesson__label lessons-lesson__label_classroom"
        >ауд.201</span
      >
      <span class="lessons-lesson__label lessons-lesson__label_time"
        >10:50-11:40</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lesson'
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
    display: block
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
</style>
