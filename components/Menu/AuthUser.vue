<template>
  <div class="header-user">
    <div v-if="auth" class="header-user-auth account">
      <a href="#" class="account__avatar">
        <span
          class="account__avatar_bg"
          style="background-image: url(https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg)"
        ></span>
      </a>
      <div class="account-dropdown">
        <div class="content-wrapper">
          <user-account-menu></user-account-menu>
        </div>
      </div>
    </div>
    <a v-else href="#" class="header-user__login">Вход</a>
  </div>
</template>

<script>
export default {
  name: 'AuthUser',
  components: {
    'user-account-menu': () => import('~/components/Menu/UserAccountMenu.vue')
  },
  data() {
    return {
      auth: true
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.header-user__login
  display: block
  background-color: $accent
  padding: .8rem 2.5rem
  margin-left: 2.5rem
  border-radius: 40px
  color: white
  &:hover
    background-color: lighten($accent, 10%)
    color: white
.header-user-auth
  margin-left: 1.5rem
  position: relative
  &:hover
    .account-dropdown
      display: block
.account__avatar
    display: block
    position: relative
    width: 45px
    height: 45px
    border-radius: 10em
    transition: all .8s
    border: 1.5px solid transparent
    &_bg
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-position: center
      background-repeat: no-repeat
      background-size: cover
      border-radius: 10em
    &:hover
      transform: scale(1)
      border-color: $accent
.account-dropdown
  display: block
  position: absolute
  z-index: 2201
  max-height: 600px
  min-width: 200px
  max-width: 280px
  width: auto
  background-color: white
  margin-top: .3rem
  top: 100%
  right: 50%
  border: 1px solid $color-for-border
@include respond-below(laptop)
  .header-user__login
    font-size: .9em
</style>
