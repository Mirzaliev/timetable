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
        swipe: false,
        arrows: false
      }
    }
  }
}
</script>

<style></style>
