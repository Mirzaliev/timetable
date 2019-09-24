<template>
  <div class="main-container">
    <header class="header">
      <div class="header-logo">
        <a href="#" class="header__logo">Расписание РГЭУ (РИНХ)</a>
      </div>
      <div class="header-nav">
        <nav-links />
        <auth-user />
        <mobile-menu />
      </div>
    </header>
    <nuxt />
  </div>
</template>
<script>
export default {
  components: {
    'nav-links': () => import('~/components/Menu/NavLinks.vue'),
    'auth-user': () => import('~/components/Menu/AuthUser.vue'),
    'mobile-menu': () => import('~/components/Menu/MobileMenu.vue')
  },
  mounted() {
    this.calculateHeight()
    window.addEventListener('resize', () => {
      this.calculateHeight()
    })
    window.addEventListener(
      'orientationchange',
      () => {
        this.calculateHeight()
      },
      false
    )
  },
  methods: {
    calculateHeight() {
      const wh = window.innerHeight
      const hh = document.getElementsByClassName('header')[0].offsetHeight
      document.getElementsByClassName(
        'searchPage-search-wrap'
      )[0].style.height = `${wh - hh}px`
    }
  }
}
</script>
<style lang="sass">
@import "../assets/sass/vars"
.main-container
  position: relative
  height: 100%
.header
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  padding: 1.5rem 6rem
  border-bottom: 1px solid $color-for-border
  &__logo
    display: block
    font-size: 1.4em
    font-family: $bold
    line-height: 1
    text-transform: uppercase
    white-space: nowrap
  &-nav
    display: flex
    align-items: center
    .acc-text-formatted
      overflow: initial
@import "../assets/sass/pages/default-media"
</style>
