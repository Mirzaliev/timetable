<template>
  <div class="spinner-container">
    <spinner :loading="true" color="#2962FF"></spinner>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  spinner: () => import('vue-spinner/src/DotLoader.vue')
}
</script>

<style lang="sass">
.spinner-container
  display: flex
  width: 100%
  padding: 3rem
</style>
