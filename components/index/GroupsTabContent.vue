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
            }
          ]
        },
        {
          course: 2,
          groups: [
            {
              name: 'ПИ-821'
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
            }
          ]
        },
        {
          course: 3,
          groups: [
            {
              name: 'ПИ-821'
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
            }
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
      a
        flex: 0 1 14.2857%
  .selected-faculty
    font-family: $bold
    color: $text
    word-wrap: break-word
    font-size: .99em
    padding: .5rem 0
</style>
