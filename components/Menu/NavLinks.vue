<template>
  <nav class="header-nav-links">
    <a href="" class="header-nav__link header-nav__link_mobile">Мои экзамены</a>
    <a href="" class="header-nav__link header-nav__link_mobile">Мои экзамены</a>
    <a href="" class="header-nav__link header-nav__link_mobile"
      >Мое расписание</a
    >
    <a href="" class="header-nav__link header-nav__link_special">Моя группа</a>
    <a href="" class="header-nav__link header-nav__link_special logout">
      Выход
    </a>
  </nav>
</template>

<script>
export default {
  name: 'NavLinks'
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.header-nav-links
  overflow-x: auto
  white-space: nowrap
  -webkit-overflow-scrolling: touch
  -ms-overflow-style: -ms-autohiding-scrollbar
  width: auto
  margin-left: 2rem
  text-align: right
  &::-webkit-scrollbar
    display: none
.header-nav__link
  display: inline-block
  font-size: 1em
  padding-left: .8em
  &:first-child
    padding-left: 0
.header-nav__link_icon
  display: flex!important
  align-items: center
  svg
    width: 1.1rem
    margin-right: .5rem
    path
      fill: $color-for-border
.header-nav__link_special
  display: none
</style>
