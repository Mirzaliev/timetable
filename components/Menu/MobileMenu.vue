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
    <client-only>
      <vue-drawer
        :visible.sync="visible"
        class="mobile-drawer"
        title="Расписание РГЭУ (РИНХ)"
        width="100%"
        height="80%"
        placement="bottom"
        :mask-closeable="true"
        :show-close="true"
        :before-close="beforeClose"
        @opened="openedMobileMenu"
      >
        <user-account-menu></user-account-menu>
      </vue-drawer>
    </client-only>
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
      const buttonClassList = this.$refs.openMobileMenuBut.classList
      if (buttonClassList.contains('is-active')) {
        buttonClassList.remove('is-active')
        this.visible = false
        return
      }
      buttonClassList.add('is-active')
      this.visible = true
    },
    beforeClose() {
      this.visible = false
      this.$refs.openMobileMenuBut.classList.remove('is-active')
    },
    openedMobileMenu() {
      const drawer = document.getElementsByClassName('mobile-drawer')
      const drawerContent = drawer[0].children[1].children[0]
      const dhh = drawerContent.children[0].offsetHeight // drawer header height
      const ac = drawerContent.children[1].children[0].children[0].offsetHeight // account header
      const navMenu = drawerContent.children[1].children[0].children[1]
      const navMenuHeight = drawerContent.offsetHeight - (dhh + ac)
      navMenu.style.height = navMenuHeight
      console.log(navMenuHeight)
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.header-mm
  display: none
.header-mm__hamburger
  outline: 0
  border: none
.mobile-drawer
  .acc-menu
    .header-nav-links
      .header-nav__link_mobile
        display: block
.drawer-body > div
  display: flex
  width: 100%
  min-height: 0
  max-height: 600px
  flex-direction: column
@include respond-below(phone)
  .header-mm
    display: block
  .drawer-body > div > .header-nav-links
    display: flex
    flex-direction: column
    text-align: left
    padding: .3rem
    overflow-x: hidden
    overflow-y: auto
    height: 100%
    .header-nav__link
      padding: .5rem 1rem
      &:first-child
        background-color: #3b8070
      &:last-child
        background-color: #3b8070
      &_special
        display: block
</style>
