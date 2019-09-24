<template>
  <div class="header-mm">
    <button
      ref="openMobileMenuBut"
      class="header-mm__hamburger hamburger hamburger--spin"
      type="button"
      @click="openMobileMenu"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <modal
      name="hello-world"
      width="100%"
      height="58%"
      :adaptive="true"
      :pivot-y="1"
      @opened="mobileMenuOpened"
      @closed="mobileMenuClosed"
    >
      <user-account-menu></user-account-menu>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  components: {
    'user-account-menu': () => import('~/components/Menu/UserAccountMenu.vue')
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    openMobileMenu() {
      this.$modal.show('hello-world')
    },
    mobileMenuOpened() {
      this.$refs.openMobileMenuBut.classList.add('is-active')
      document.getElementById('bodyPage').classList.add('body_overflowHidden')
    },
    mobileMenuClosed() {
      this.$refs.openMobileMenuBut.classList.remove('is-active')
      document
        .getElementById('bodyPage')
        .classList.remove('body_overflowHidden')
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.header-mm
  display: none
  .v--modal
    border-radius: 0
.header-mm__hamburger
  outline: 0
  border: none
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
</style>
