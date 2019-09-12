<template>
  <div>
    <div class="acc-header">
      <div v-if="auth" class="acc-header-for-auth">
        <div
          class="avatar"
          style="background-image: url(https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg)"
        ></div>
        <div class="account-user-wrap">
          <span class="account-user__name acc-text-formatted"
            >Андрей Смолов</span
          >
          <span class="account-user__mail acc-text-formatted"
            >rsuejob@gmail.comdsfdsfsdfsdfsdfsdfdsffsdf</span
          >
          <a href="#" class="account-user__lk">Личный кабинет</a>
        </div>
      </div>
      <div v-else class="acc-header-for-noauth">
        <a href="#" class="acc-header-for-noauth__link">ВОЙТИ</a>
      </div>
    </div>
    <div class="acc-menu">
      <nav-links></nav-links>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserAccountMenu',
  components: {
    'nav-links': () => import('~/components/Menu/NavLinks.vue')
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
.acc-header
  padding: 1.3rem 1rem
  box-sizing: border-box
  border-bottom: 1px solid $color-for-border
  background-color: white
  min-height: 20%
  border-top-right-radius: 5px
  border-top-left-radius: 5px
  .acc-header-for-auth
    display: flex
  .acc-header-for-noauth
    width: 100%
    text-align: center
    &__link
      display: block
      color: $accent
      font-family: $medium
  .avatar
    width: 40px
    height: 40px
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    border-radius: 50%
    min-width: 40px
    margin-right: 1rem
  .account-user-wrap
    display: flex
    min-width: 0
    flex-direction: column
  .account-user__name
    font-family: $medium
    font-size: 1.1em
    line-height: 1
  .account-user__mail
    font-size: .9em
  .account-user__lk
    display: block
    font-size: .9em
    color: $accent
    margin-top: .5rem
    line-height: 1
  .acc-text-formatted
    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
.acc-menu
  .header-nav-links
    overflow-x: hidden
    margin-left: 0
    text-align: left
    display: flex
    flex-direction: column
  .header-nav__link
    display: block
    padding: .5rem 1rem
    &:hover
      background-color: $background-hover
      color: $text
  .header-nav__link_mobile
    display: none
  .logout
    border-top: 1px solid $color-for-border
@include respond-below(phone)
  .mobile-drawer
    .drawer-body, .drawer-body > div
      height: 100%
  .acc-menu
    height: 72%
    overflow-y: auto
    white-space: nowrap
    -webkit-overflow-scrolling: touch
    -ms-overflow-style: -ms-autohiding-scrollbar
    .header-nav-links
      .header-nav__link
        border-top: 1px solid $background-hover
        padding: .7rem 1rem
        text-overflow: ellipsis
        overflow: hidden
        white-space: nowrap
        &:first-child
          border-top: none
</style>
