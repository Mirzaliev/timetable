<template>
  <section class="index-section searchPage">
    <div class="searchPage__title">ПОИСК</div>
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
  </section>
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
.index-section
  display: flex
  margin: 12rem auto 0 auto
  justify-content: center
  flex-direction: column
  width: 582px
  .v-select
    width: 100%
.index-section
  .vs__dropdown-toggle
    background-color: #41b883
    border-radius: 30px
  .vs__search
    background-color: #35495e
    color: white
</style>
