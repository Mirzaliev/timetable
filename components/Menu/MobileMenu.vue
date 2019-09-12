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
@include respond-below(phone)
  .header-mm
    display: block
</style>
