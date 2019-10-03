<template>
  <div class="teachers-tab-wrapper tab-content-wrapper">
    <tab-content-slider :content="sliders"></tab-content-slider>
    <div class="tab-content__hint">
      Сортировка по цифре: 1
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassRoomTabContent',
  components: {
    tabContentSlider: () =>
      import('~/components/index/UIElements/TabContentSlider.vue')
  },
  data() {
    return {
      sliders: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
}
</script>

<style lang="sass"></style>
