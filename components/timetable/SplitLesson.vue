<template>
  <VueSlickCarousel v-bind="settingSlick">
    <Lesson></Lesson>
    <Lesson></Lesson>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Lesson from '~/components/timetable/Lesson.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
export default {
  name: 'SplitLesson',
  components: {
    VueSlickCarousel,
    Lesson
  },
  data() {
    return {
      settingSlick: {
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 1,
        infinite: false,
        swipeToSlide: false,
        swipe: false
      }
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
    .slick-arrows
      border: 0
    .slick-prev, .slick-next
      &:before
        color: black
        opacity: 1
    .slick-prev

    .slick-next
</style>
