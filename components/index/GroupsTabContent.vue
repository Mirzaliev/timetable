<template>
  <div class="groups-tab-wrapper">
    <div class="faculties-wrapper">
      <div class="faculties-list tab-content_flexGrid">
        <a href="#" class="tab-content__btn tab-content__btn_active">МиП</a>
        <a href="#" class="tab-content__btn">КТиИБ</a>
        <a href="#" class="tab-content__btn">КТиИ</a>
        <a href="#" class="tab-content__btn">МиП</a>
        <a href="#" class="tab-content__btn">КТиИБ</a>
        <a href="#" class="tab-content__btn">КТиИ</a>
        <a href="#" class="tab-content__btn">ЮрФак</a>
      </div>
      <div class="selected-faculty">
        Факультет Компьютерных технологий и информационной безопасности
      </div>
    </div>
    <div class="groups-wrapper">
      <course
        v-for="(course, index) in courses"
        :key="index"
        :course="course"
      ></course>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupsTabsContent',
  components: {
    course: () => import('~/components/index/EveryCourseWithGroups.vue')
  },
  data() {
    return {
      courses: [
        {
          course: 1,
          groups: [
            {
              name: '711-ПЕРZS'
            },
            {
              name: '711-ПЕРZS'
            },
            {
              name: '711-ПЕРZS'
            },
            {
              name: '711-ПЕРZS'
            },
            {
              name: '711-ПЕРZS'
            },
            {
              name: '711-ПЕРZS'
            },
            {
              name: '311-ИБ'
            },
            {
              name: '311-ИСТ'
            },
            {
              name: '311-ПМИ'
            },
            {
              name: '311-ПИИ'
            },
            {
              name: '311-ПРИ'
            },
            {
              name: '311-ИБ'
            },
            {
              name: '311-ИБ'
            },
            {
              name: '711-ПЕРZS'
            },
            {
              name: '311-ПМИ'
            },
            {
              name: '311-ПИИ'
            },
            {
              name: '311-ПРИ'
            },
            {
              name: '214-ТОРZS'
            }
          ]
        },
        {
          course: 2,
          groups: [
            {
              name: '211-ОРМ'
            },
            {
              name: '211-РСО'
            },
            {
              name: '211-ТД'
            },
            {
              name: '211-ТОВ'
            },
            {
              name: '211-ТОР'
            },
            {
              name: '211-ТД'
            },
            {
              name: '212-ТОР'
            },
            {
              name: '212-ТД'
            },
            {
              name: '213-ТОР'
            },
            {
              name: '213-ТОР'
            },
            {
              name: '213-ТОРZ'
            },
            {
              name: '213-ТОРZ'
            },
            {
              name: '211-ОРМZ'
            },
            {
              name: '211-УКZ'
            },
            {
              name: '211-РСОZ'
            },
            {
              name: '211-ТОРZS'
            },
            {
              name: '212-ТОРZS'
            },
            {
              name: '213-ТОРZS'
            },
            {
              name: '211-УКZS'
            },
            {
              name: '211-ТДZ'
            },
            {
              name: '211-ТДZS'
            }
          ]
        },
        {
          course: 3,
          groups: [
            { name: '531-ЭК' },
            { name: '532-ЭК' },
            { name: '533-ЭК' },
            { name: '534-ЭК' },
            { name: '535-ЭК' },
            { name: '536-ЭК' },
            { name: '531-ЭКZ' },
            { name: '532-ЭКZ' },
            { name: '533-ЭКZ' },
            { name: '531-ЭКZS' },
            { name: '532-ЭКZS' },
            { name: '533-ЭКZS' },
            { name: '534-ЭКZS' },
            { name: '535-ЭКZS' },
            { name: '536-ЭКZS' },
            { name: '537-ЭКZS' },
            { name: '538-ЭКZS' },
            { name: '539-ЭКZS' },
            { name: '5310-ЭКZS' },
            { name: '5311-ЭКZS' },
            { name: '5312-ЭКZS' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.groups-tab-wrapper
  padding: 2rem 0 3rem 0
  .faculties
    &-wrapper
      margin-bottom: 2rem
    &-list
      .tab-content__btn
        flex: 0 0 13%
        &:last-child
          margin-right: 0
  .selected-faculty
    font-family: $bold
    color: $text
    word-wrap: break-word
    font-size: .99em
    padding: .5rem 0
</style>
