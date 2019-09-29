<template>
  <client-only>
    <vue-tabs>
      <v-tab title="First tab">
        First tab content
      </v-tab>

      <v-tab title="Second tab">
        Second tab content
      </v-tab>

      <v-tab title="Third tab">
        Third tab content
      </v-tab>
    </vue-tabs>
  </client-only>
</template>

<script>
import { VueTabs, VTab } from 'vue-nav-tabs/dist/vue-tabs.js'

export default {
  components: {
    VueTabs,
    VTab
  },
  data() {
    return {
      key: ''
    }
  },
  methods: {
    handleScroll(evt, el) {
      console.log('handleScroll')
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
@import '~vue-nav-tabs/themes/vue-tabs.scss'
</style>
