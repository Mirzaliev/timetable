<template>
  <div class="groups-tab-wrapper tab-content-wrapper">
    <div class="faculties-wrapper">
      <div class="faculties-list tab-content_flexGrid">
        <a
          v-for="(faculty, i) in faculties"
          :key="i"
          href="#"
          class="tab-content__btn"
          :class="{
            'tab-content__btn_active': faculty.name === selectedFaculty.name
          }"
          @click.prevent="selectFaculty(faculty)"
          >{{ faculty.name }}</a
        >
      </div>
    </div>
    <div class="tab-content__hint">
      {{ selectedFaculty.shortName }}
    </div>
    <div class="groups-wrapper">
      <div class="groups-list">
        <spinner :loading="loading" color="#2962FF" size="25px"></spinner>
        <course
          v-for="(course, index) in courses"
          :key="index"
          :course="course"
        ></course>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GroupsTabsContent',
  components: {
    course: () =>
      import('~/components/index/UIElements/EveryCourseWithGroups.vue'),
    spinner: () => import('vue-spinner/src/BounceLoader.vue')
  },
  data() {
    return {
      loading: false,
      selectedFaculty: this.$store.state.faculties[0],
      courses: []
    }
  },
  computed: {
    ...mapGetters({
      faculties: 'GET_FACULTIES'
    })
  },
  mounted() {
    this.getFacultyGroups(this.selectedFaculty.name)
  },
  methods: {
    selectFaculty(faculty) {
      if (faculty.name === this.selectedFaculty.name) return 0
      this.selectedFaculty = faculty
      this.loading = true
      this.getFacultyGroups(faculty.name)
    },
    getFacultyGroups(facultyName) {
      this.$axios
        .$get(`/groups?faculty=${facultyName}`)
        .then((data) => {
          this.courses = data
          this.$nextTick(() => {
            this.loading = false
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/vars"
.groups-tab-wrapper
  .faculties
    &-list
      .tab-content__btn
        flex: 0 0 13%
        &:last-child
          margin-right: 0
  .groups-wrapper
    position: relative
</style>
