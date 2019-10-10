<template>
  <client-only>
    <vue-tabs>
      <v-tab id="groups" title="Группы">
        <groupsTabsContent></groupsTabsContent>
      </v-tab>

      <v-tab id="teachers" title="Преподаватели">
        <teachersTabsContent></teachersTabsContent>
      </v-tab>

      <v-tab id="classroom" title="Аудитории">
        <class-room-tabs-content></class-room-tabs-content>
      </v-tab>
    </vue-tabs>
  </client-only>
</template>

<script>
import { VueTabs, VTab } from 'vue-nav-tabs/dist/vue-tabs.js'

export default {
  components: {
    VueTabs,
    VTab,
    groupsTabsContent: () => import('~/components/index/GroupsTabContent.vue'),
    teachersTabsContent: () =>
      import('~/components/index/TeachersTabContent.vue'),
    classRoomTabsContent: () =>
      import('~/components/index/ClassRoomTabContent.vue')
  },
  data() {
    return {
      key: ''
    }
  },
  methods: {
    handleScroll(evt, el) {
      console.log('handleScroll')
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
@import '~vue-nav-tabs/themes/vue-tabs.scss'
.searchPage
  .nav-tabs-wrapper
    display: flex
    position: relative
    &:before
      content: ''
      position: absolute
      top: 0
      right: 0
      width: 20px
      height: 90%
      z-index: 2
      background: -webkit-gradient(linear,left top,right top,color-stop(0%,rgba(255,255,255,0)),color-stop(100%,rgba(255,255,255,1)))
      pointer-events: none
  .nav-tabs
    flex: 1
    display: flex
    border-bottom: none
    white-space: nowrap
    overflow-x: auto
    overflow-y: hidden
    .tab
      display: inline-block
      margin-bottom: 0
      .tabs__link
        margin-right: 0
        border-radius: 0
        border-bottom: 1px solid $color-for-border
        color: $color-for-no-active-link
        transition: border-bottom-color .2s ease, font-size .2s ease, font-family .2s ease
        &.active_tab
          font-family: $bold
          color: $text
          border-width: 0 0 1px 0
          border-bottom: solid $accent
  .tab-content
    &-wrapper
      padding: 2rem 0 3rem 0
    &__hint
      font-family: $bold
      color: $text
      word-wrap: break-word
      font-size: .99em
      margin: 1rem 0 2rem 0
    &__btn
      display: inline-block
      padding: .555rem
      line-height: 1
      border-radius: .222rem
      font-family: $medium
      word-wrap: normal
      white-space: nowrap
      color: $accent
      text-align: center
      border: 1px solid $accent
      margin-bottom: 1.5%
      margin-right: 1.5%
      &:hover
        background-color: $accent
        color: white
    &__btn_active
      border-color: $accent
      background-color: $accent
      color: white
    .v-spinner
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: white
      opacity: .85
      > div
        margin: 1.33rem auto 0 auto
  .tab-content_flexGrid
    display: flex
    flex-flow: row wrap
    justify-content: flex-start
</style>
