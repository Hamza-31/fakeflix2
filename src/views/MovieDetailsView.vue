<template>
  <div class="about">
    <h1>MoviDetails</h1>
    <!-- <div>film {{ $route.params.id }}</div> -->
    <MovieDetails />
  </div>
</template>

<script>
import MovieDetails from "@/components/MovieDetails.vue";
export default {
  name: "movie-details",
  components: {
    MovieDetails,
  },
  // created: function () {
  //   this.$store.commit("setMovieId", $route.params.id);
  // },
};
</script>

