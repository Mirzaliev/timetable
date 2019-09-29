<template>
  <section class="index-section searchPage">
    <div class="searchPage-container">
      <div class="searchPage-search-wrap">
        <form action="GET" class="searchPage-form">
          <div class="searchPage__title">ПОИСК</div>
          <v-select
            label="name"
            :filterable="false"
            :options="options"
            @input="changeRoute"
            @search="onSearch"
          >
            <template slot="no-options">
              По запросу ничего не найдено...
            </template>
            <template slot="option" slot-scope="option">
              {{ option.full_name }}
            </template>
            <template slot="open-indicator">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="vs__actions_icon"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 512 512"
              >
                <g>
                  <path
                    d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
                  />
                </g>
              </svg>
            </template>
          </v-select>
          <span class="searchPage-form__hint"
            >22Например: ПИ, Иванова, Андр, ауд, 382, 811..</span
          >
        </form>
        <div class="searchPage-hintDown">
          <span class="searchPage-hintDown__hint">Или так</span>
          <svg-icon name="down-arrow" />
        </div>
      </div>
      <div class="searchPage-tabs-wrap">
        <tabs></tabs>
      </div>
    </div>
  </section>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
    tabs: () => import('~/components/index/Tabs.vue')
  },
  data() {
    return {
      visible: false,
      options: [],
      json: {}
    }
  },
  methods: {
    changeRoute(person) {
      this.json = person
    },
    onSearch(search, loading) {
      loading(true)
      this.search(loading, search, this)
    },
    // eslint-disable-next-line no-undef
    search: (loading, search, vm) => {
      fetch(
        `https://api.github.com/search/repositories?q=${escape(search)}`
      ).then((res) => {
        res.json().then((json) => (vm.options = json.items))
        loading(false)
      })
    }
  }
}
</script>

<style lang="sass">
@import "../assets/sass/vars"
@import "~vue-select/src/scss/vue-select.scss"
.searchPage
  position: relative
  width: 100%
  &-container
    width: 40%
    margin: 0 auto
    padding: 0 1rem
  &-search-wrap
    display: flex
    flex-direction: column
  &-tabs-wrap
    margin: 3rem 0
  &-form
    display: flex
    flex: 1
    flex-direction: column
    justify-content: center
    &__hint
      display: block
      font-size: .9em
      color: $grey-for-text
      line-height: 2
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
      padding-left: 1.2rem
  &-hintDown
    text-align: center
    &__hint
      display: block
    .sprite-icons
      width: 1rem
      height: 1rem
      animation: fadeInDown 2s ease infinite
.searchPage
  &__title
    width: 100%
    font-family: $medium
    font-size: 3.3em
    line-height: 1.1
    text-align: center
    word-wrap: break-word
    white-space: nowrap
    margin-bottom: 2.8rem
.searchPage
  .v-select
    position: relative
    width: 100%
    .vs__dropdown-toggle
      display: flex
      border-radius: 24px
      box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28)
      border-color: rgba(223,225,229,0)
      z-index: 3
      height: 47px
      margin: 0 auto
      padding: 0 1.2rem 0 1.2rem
    .vs__selected-options
      // padding-left: 1.2rem
    .vs__search
      background: white
      padding: 0
      margin: 0
      word-wrap: break-word
      font-size: 1.2em
      font-family: inherit
    .vs__selected
      padding: 0
      margin: 0
      font-family: inherit
    .vs__actions
      padding: 0
      margin: 0
      .vs__clear
        visibility: hidden
        opacity: 0
        display: none!important
      &_icon
        width: 1.1rem
        fill: $grey-for-text
      .vs__spinner
        font-size: 4px
        border-top: 0.5em solid rgba(100, 100, 100, 0.1)
        border-right: 0.5em solid rgba(100, 100, 100, 0.1)
        border-bottom: 0.5em solid rgba(100, 100, 100, 0.1)
        border-left: 0.5em solid $accent
  .vs--loading
    .vs__actions
      svg.vs__actions_icon
        display: none
.searchPage .vs--open
  .vs__dropdown-menu
    overflow-y: hidden
    border: 0
    border-bottom-left-radius: 24px
    border-bottom-right-radius: 24px
    box-shadow: 0 4px 6px 0 rgba(32,33,36,0.28)
  .vs__no-options
    padding-bottom: 0!important
  .vs__dropdown-option
    padding: .3rem 1.2rem
    word-break: break-word
    text-overflow: ellipsis
    &:last-child
      margin-bottom: 1rem
    &--highlight
      background-color: $accent
  .vs__actions_icon
    fill: $accent
  .vs__dropdown-toggle
    border-radius: 24px 24px 0 0
@import "../assets/sass/components/bounce-animate"
@import "../assets/sass/pages/index-media"
</style>
