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
  }
}
</script>
<style lang="sass">
@import "../assets/sass/vars"
.main-container
  position: relative
.header
  width: 100%
  display: flex
  align-items: center
  padding: 1.5rem 6rem
  border-bottom: 1px solid $color-for-border
  &-logo
    width: 25%
  &__logo
    display: block
    font-size: 1.4em
    font-family: $bold
    line-height: 1
    text-transform: uppercase
    white-space: nowrap
    margin-right: 1rem
  &-nav
    display: flex
    align-items: center
    justify-content: flex-end
    width: 75%
@include respond-below(laptop)
  .header
    padding: 1.1rem 1rem
    flex-direction: column
    &-logo
      margin-bottom: 1rem
      width: 100%!important
      text-align: center
    &-nav
      width: 100%!important
      justify-content: space-between
@include respond-below(phone)
  .header
    padding: 1.2rem .9rem!important
    flex-direction: row
    &-logo
      margin-bottom: 0
    &__logo
      font-size: 1.1em
    &-nav
      width: auto
      justify-content: flex-end
    &-nav-links , &-user
      display: none
    .header-mm__hamburger
      padding: 0
      .hamburger-box
        width: 33px
        height: 10px
      .hamburger-inner
        width: 33px
        height: 2px
        &:before, &:after
          width: 33px
          height: 2px
@include respond-below(lg)
  .header
    padding: 1.5rem 3rem
  .header-logo
    width: 35%
  .header-nav
    width: 65%
</style>
