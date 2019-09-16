<template>
  <div class="header-user">
    <div v-if="auth" class="header-user-auth account">
      <a href="#" class="account__avatar" @click="openAccountMenu">
        <span
          class="account__avatar_bg"
          style="background-image: url(https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg)"
        ></span>
      </a>
      <div ref="accountDropdown" class="account-dropdown">
        <user-account-menu></user-account-menu>
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
      auth: true,
      accountDropdownshow: false
    }
  },
  mounted() {
    const self = this
    window.addEventListener(
      'click',
      function(e) {
        if (e.path.length === 3) {
          self.closeAccountMenu()
          return 0
        }
        const eventTarget = e.target
        const eventParent = e.target.offsetParent
        if (
          eventParent.classList.contains('account-dropdown') ||
          eventTarget.classList.contains('account-dropdown')
        ) {
          return 0
        }
        if (!eventParent.classList.contains('account__avatar')) {
          self.closeAccountMenu()
        }
      },
      false
    )
  },
  methods: {
    openAccountMenu() {
      this.$refs.accountDropdown.classList.add('account-dropdown_shown')
    },
    closeAccountMenu() {
      this.$refs.accountDropdown.classList.remove('account-dropdown_shown')
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
  visibility: hidden
  z-index: 2201
  width: 270px
  background: white
  border: 1px solid $color-for-border
  box-shadow: 0 1px 3px rgba(0,0,0,.1)
  border-radius: 4px
  padding: .2rem 0
  right: 0
  top: 145%
  opacity: 0
  pointer-events: none
  transition: opacity 100ms linear, top 100ms linear, visibility 100ms linear
  &.account-dropdown_shown
    visibility: visible
    opacity: 1
    filter: none
    top: 120%
    pointer-events: auto
  &:before, &:after
    position: absolute
    content: ''
    height: 0
    width: 0
    border: solid transparent
    bottom: 100%
    right: 20px
    pointer-events: none
  &:before
    border-width: 9px
    margin: 0 -6px
    border-bottom-color: $color-for-border
  &:after
    border-width: 8px
    margin: 0 -5px
    border-bottom-color: #fff
.account-dropdown
  .header-nav-links
    display: flex
    flex-direction: column
    margin-left: 0
    text-align: left
    padding: .2rem 0
  .header-nav__link
    padding: .5rem 1rem
    &_mobile
      display: none
    &_special
      display: block
    &:hover
      background-color: $background-hover
      color: inherit
@include respond-below(laptop)
  .header-user__login
    font-size: .9em
</style>
