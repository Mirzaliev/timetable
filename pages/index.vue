<template>
  <div class="container">
    <v-select
      label="name"
      :filterable="false"
      :options="options"
      @search="onSearch"
    >
      <template slot="no-options">
        По запросу ничего не найдено...
      </template>
      <template slot="option" slot-scope="option">
        <div class="d-center">
          {{ option.full_name }}
        </div>
      </template>
      <template slot="selected-option" slot-scope="option">
        <div class="selected d-center">
          {{ option.full_name }}
        </div>
      </template>
    </v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  components: {
    vSelect
  },
  data() {
    return {
      visible: false,
      options: []
    }
  },
  methods: {
    onSearch(search, loading) {
      loading(true)
      this.search(loading, search, this)
    },
    // eslint-disable-next-line no-undef
    search: (loading, search, vm) => {
      fetch(
        `https://api.github.com/search/repositories?q=${escape(search)}`
      ).then((res) => {
        res.json().then((json) => (vm.options = json.items))
        loading(false)
      })
    }
  }
}
</script>

<style lang="sass">
@import "~vue-select/src/scss/vue-select.scss"
.container
  display: flex
  margin-top: 10rem
  justify-content: center
  .v-select
    width: 500px
</style>
