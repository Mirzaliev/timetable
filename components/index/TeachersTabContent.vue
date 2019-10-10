<template>
  <div class="teachers-tab-wrapper tab-content-wrapper">
    <tab-content-slider :content="sliders"></tab-content-slider>
    <div class="tab-content__hint">
      Сортировка по букве: A
    </div>
    <div class="teachers-wrapper">
      <div class="teacher-list tab-content_flexGrid">
        <nuxt-link
          v-for="(teacher, index) in teachers"
          :key="index"
          to="/"
          class="tab-content__btn"
          >{{ teacher }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeachersTabContent',
  components: {
    tabContentSlider: () =>
      import('~/components/index/UIElements/TabContentSlider.vue')
  },
  data() {
    return {
      sliders: [
        'А',
        'Б',
        'В',
        'Г',
        'Д',
        'Е',
        'Ё',
        'Ж',
        'З',
        'И',
        'Й',
        'К',
        'Л',
        'М',
        'Н',
        'О',
        'П',
        'Р',
        'С',
        'Т',
        'У',
        'Ф',
        'Х',
        'Ц',
        'Ч',
        'Ш',
        'Щ',
        'Э',
        'Ю',
        'Я'
      ],
      teachers: [
        'Гончарова Светлана Николаевна',
        'Стрюков Михаил Борисович',
        'Котельникова Евгения Владимировна',
        'Рукавишникова Ирина Валерьевна',
        'Улезько Сергей Иванович',
        'Напалкова Ирина Георгиевна',
        'Николаев Александр Викторович',
        'Баринов Эмиль Эдуардович',
        'Полуботкооо Аннннна Александровнааааа',
        'Романенко Николай Гаврилович',
        'Алифанова Елена Николаевна',
        'Романова Татьяна Федоровна',
        'Семенюта Ольга Гетовна'
      ]
    }
  }
}
</script>

<style lang="sass">
.searchPage
  .teachers-wrapper
    position: relative
    .teacher-list
      .tab-content__btn
        display: flex!important
        align-items: center
        justify-content: center
        white-space: normal!important
        line-height: 1.2!important
        flex-basis: 49.25%
        &:nth-child(even)
          margin-right: 0
</style>
