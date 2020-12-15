<template>
  <div class="lessons-lesson">
    <div class="lessons-lesson-topBlock">
      <span class="lessons-lesson__number">1 урок</span>
      <span class="lessons-lesson__name">
        Культура речи и деловое общение
      </span>
      <span class="lessons-lesson__teacher">доц. Полякова А.И</span>
    </div>
    <div class="lessons-lesson-footerBlock">
      <span class="lessons-lesson__label practice">практика</span>
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
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.lessons-list-item
  height: 130px
  //padding: 0.7em
  margin-bottom: 0.8em
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25)
  border-radius: 5px
  &:last-child
    margin-bottom: 0.1em
.lessons-lesson
  display: flex
  flex-direction: column
  height: 100%
  padding: 0.7em
  &__number
    display: none
  &__name
    color: $accent
    font-family: $medium
  &__teacher
    font-size: 0.88em
    color: $grey-for-text
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
    font-size: 0.7em
    padding: 0.1em 0.3em
    margin-right: 0.5em
    border-radius: 5px
    &.practice
      background-color: $pink
    .lecture
      background-color: $success
    .laboratory
      background-color: $warning
    &_classroom
      background-color: $danger
    &_time
      border: $color-for-border 1px solid
      color: $text
</style>
