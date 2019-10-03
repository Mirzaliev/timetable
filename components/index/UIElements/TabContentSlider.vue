<template>
  <div class="tab-content-slider tab-content_flexGrid">
    <a
      v-for="(slide, index) in content"
      :key="index"
      href=""
      class="tab-content__btn"
      >{{ slide }}</a
    >
  </div>
</template>

<script>
export default {
  name: 'TabContentSlider',
  props: {
    content: {
      required: true,
      type: [Object, Array]
    }
  }
}
</script>

<style lang="sass">
.searchPage .tab-content
  &-slider
    .tab-content__btn
      flex-basis: 5.2%
      &:nth-child(15n + 15)
        margin-right: 0
</style>
