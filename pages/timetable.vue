<template>
  <div class="tt-nav">
    <div class="tt-title">
      <span class="tt-title_hint">Расписание группы</span> ПИ-811
    </div>
    <div class="tt-toolbar">
      <dropdown
        :options="arrayOfObjects"
        :selected="object"
        :placeholder="'Select an Item'"
        :close-on-outside-click="false"
        @updateOption="methodToRunOnSelect"
      ></dropdown>
    </div>
    <div class="timetable">
      <div class="timetable-lesson-number">
        <div class="timetable-lsNumDiv">1</div>
        <div class="timetable-lsNumDiv">2</div>
        <div class="timetable-lsNumDiv">3</div>
        <div class="timetable-lsNumDiv">4</div>
      </div>
      <div class="timetable-lesson">
        <VueSlickCarousel :arrows="false" :dots="false">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import dropdown from 'vue-dropdowns/Dropdown.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    dropdown,
    VueSlickCarousel
  },
  data() {
    return {
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
  &-lesson-number
    width: 5%
    background-color: red
    display: flex
    flex-direction: column
    justify-content: space-between
  &-lsNumDiv
    background: #ccc
    height: 100%
    margin: 5px
  &-lesson
    height: 600px
    width: 100%
</style>
