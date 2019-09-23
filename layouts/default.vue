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
    const vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh100', `${vh}px`)
    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh100', `${vh}px`)
    })
    window.addEventListener(
      'orientationchange',
      function() {
        // Announce the new orientation number
        alert(screen.orientation)
      },
      false
    )
  }
}
</script>
<style lang="sass">
@import "../assets/sass/vars"
.main-container
  position: relative
.header
  width: 100%
  height: 15vh
  display: flex
  align-items: center
  justify-content: center
  padding: 0 6rem
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
    justify-content: flex-end
    width: 70%
    .acc-text-formatted
      overflow: initial
@import "../assets/sass/pages/default-media"
</style>
