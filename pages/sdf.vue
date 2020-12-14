<template>
  <div class="timetable tt">
    <div class="tt-nav">
      <div class="tt-title">
        <span class="tt-title_hint">Расписание группы</span> ПИ-811
      </div>
      <div class="tt-toolbar">
        <dropdown
          :options="arrayOfObjects"
          :selected="object"
          :placeholder="'Select an Item'"
          :close-on-outside-click="false"
          @updateOption="methodToRunOnSelect"
        ></dropdown>
        <a
          href="https://innologica.github.io/vue2-daterange-picker/#usage"
          target="_blank"
          >dfgdfgdfg</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import dropdown from 'vue-dropdowns'

export default {
  components: {
    dropdown
  },
  data() {
    return {
      arrayOfObjects: [
        {
          name: 'dsfdsfdsf'
        },
        {
          name: 'dsfdsfdsf11'
        }
      ],
      object: {
        name: 'Object Name'
      },
      key: ''
    }
  },

  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload
    }
  }
}
</script>

<style lang="scss"></style>
