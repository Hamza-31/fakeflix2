<template>
  <div class="home-container">
    <div class="row py-4">
      <SearchResults class="col-8" />
      <TopRatedMovies class="col-4 d-flex flex-column" />
    </div>
  </div>
</template>

<script>
import SearchResults from "@/components/SearchResults.vue";
import TopRatedMovies from "@/components/TopRatedMovies.vue";

export default {
  name: "HomeView",
  components: {
    SearchResults,
    TopRatedMovies,
  },
  methods: {
    getData: function () {
      this.$store.commit("setTokkenRequest");
      this.$store.dispatch("fetchRequestToken");
    },
  },
};
</script>

<style scoped>
button {
  background-color: red;
}
.home-container {
  width: 1000px;
  margin: 0 auto;
}
</style>
