<template>
  <div>
    <div class="acc-header" tabindex="1">
      <div v-if="auth" class="acc-header-for-auth" tabindex="1">
        <div
          tabindex="1"
          class="avatar"
          style="background-image: url(https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg)"
        ></div>
        <div class="account-user-wrap" tabindex="1">
          <span class="account-user__name acc-text-formatted" tabindex="1"
            >Андрей Смолов</span
          >
          <span class="account-user__mail acc-text-formatted" tabindex="1"
            >rsuejob@gmail.comdsfdsfsdfsdfsdfsdfdsffsdf</span
          >
          <a href="#" class="account-user__lk">Личный кабинет</a>
        </div>
      </div>
      <div v-else class="acc-header-for-noauth">
        <a href="#" class="acc-header-for-noauth__link">ВОЙТИ</a>
      </div>
    </div>
    <nav-links></nav-links>
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
  border-top-right-radius: 5px
  border-top-left-radius: 5px
  outline: none
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
    outline: none
  .account-user-wrap
    display: flex
    min-width: 0
    flex-direction: column
    outline: none
  .account-user__name
    font-family: $medium
    font-size: 1.1em
    line-height: 1
    outline: none
  .account-user__mail
    font-size: .9em
    color: $grey-for-text
    outline: none
  .account-user__lk
    display: block
    font-size: .9em
    color: $accent
    margin-top: .5rem
    line-height: 1
    outline: none
  .acc-text-formatted
    text-overflow: ellipsis
    overflow: hidden
    white-space: nowrap
</style>
