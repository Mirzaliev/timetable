<template>
  <VueSlickCarousel v-bind="settingSlick">
    <Lesson
      v-for="lesson in lessonsForSubgroups.list"
      :key="lesson.id"
      :lesson="assignData(lesson)"
    ></Lesson>
    <template #prevArrow="arrowOption">
      <button class="custom-arrow">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068
			l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019
			l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492
			c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
              />
            </g>
          </g>
        </svg>
      </button>
    </template>
    <template #nextArrow="arrowOption">
      <button class="custom-arrow">
        <svg
          iversion="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                          c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                          l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                          c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
              />
            </g>
          </g>
        </svg>
      </button>
    </template>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Lesson from '~/components/timetable/Lesson.vue'
// optional style for arrows & dots
export default {
  name: 'ClassDivisionIntoSubgroups',
  components: {
    VueSlickCarousel,
    Lesson
  },
  props: {
    lessonsForSubgroups: {
      type: Object,
      required: true
    }
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
  },
  methods: {
    assignData(lesson) {
      return Object.assign(
        {},
        {
          time: this.lessonsForSubgroups.time,
          number: this.lessonsForSubgroups.number
        },
        lesson
      )
    }
  }
}
</script>

<style lang="sass">
.lessons-list-item
  .slick-slider , .slick-list, .slick-track, .slick-slide, .slick-slide > div
    height: 100%
  .slick-slider
    padding: 0!important
    .slick-arrows
      border: 0
    .slick-prev, .slick-next
      top: 85%
      z-index: 9999
      &:before
        color: black
        opacity: 1
        content: ''
    .slick-prev
      left: 90%
      &:before
        //content: '⬅'
    .slick-next
      right: 4%
      &:before
        //content: '➡'
    .slick-disabled
      display: none!important
</style>
