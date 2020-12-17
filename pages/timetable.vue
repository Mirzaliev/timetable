<template>
  <div class="timetable-wrapper">
    <div class="tt-nav">
      <div class="tt-title">
        <span class="tt-title_hint">Расписание группы</span> ПИ-811
      </div>
      <div class="tt-toolbar">
        <client-only placeholder="Загрузка">
          <dropdown
            :options="arrayOfObjects"
            :selected="object"
            :placeholder="'Select an Item'"
            :close-on-outside-click="false"
            @updateOption="methodToRunOnSelect"
          ></dropdown>
        </client-only>
      </div>
    </div>
    <div class="timetable">
      <div class="timetable-lessons-numbers">
        <div class="timetable-lessons__number">1</div>
        <div class="timetable-lessons__number">2</div>
        <div class="timetable-lessons__number">3</div>
      </div>
      <div class="timetable-lessons-wrapper lessons">
        <VueSlickCarousel v-bind="settingSlick">
          <LessonsDays></LessonsDays>
          <LessonsDays></LessonsDays>
          <LessonsDays></LessonsDays>
          <LessonsDays></LessonsDays>
          <LessonsDays></LessonsDays>
          <LessonsDays></LessonsDays>
          <LessonsDays></LessonsDays>
          <LessonsDays></LessonsDays>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import dropdown from 'vue-dropdowns/Dropdown.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import LessonsDays from '~/components/timetable/LessonsDays.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    dropdown,
    LessonsDays,
    VueSlickCarousel
  },
  data() {
    return {
      settingSlick: {
        speed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchThreshold: 1,
        infinite: false
      },
      arrayOfObjects: [
        {
          name: 'dsfdsfdsf'
        },
        {
          name: 'dsfdsfdsf11'
        }
      ],
      object: {
        name: 'Object Name'
      },
      key: ''
    }
  },

  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload
    }
  }
}
</script>

<style lang="sass">
.timetable
  margin: 0 10px
  display: flex
  &-lessons-numbers
    width: 3%
    /*background-color: red*/
    display: flex
    flex-direction: column
    justify-content: space-between
    margin-top: 1.2em + 0.8em
  &-numbers
    /*background: #ccc*/
    height: 100%
    margin: 5px
  &-lessons__number
    display: flex
    align-items: center
    height: 130px
    background: #ccc
  &-lessons-wrapper
    width: 97%
    .slick-slider .slick-slide
      padding-right: 0.888rem
      &:first-child
        padding-left: 0.5rem
      > div:focus
        outline: none
.lh-1
  line-height: 1
.lh_12
  line-height: 1.2
</style>
