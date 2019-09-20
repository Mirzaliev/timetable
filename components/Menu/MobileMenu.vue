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
      pivot-y="1"
      @closed="$refs.openMobileMenuBut.classList.remove('is-active')"
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
      this.$refs.openMobileMenuBut.classList.add('is-active')
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
