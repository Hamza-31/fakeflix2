<template>
  <div class="about">
    <!-- <div>film {{ $route.params.id }}</div> -->
    <MovieDetails />
  </div>
</template>

<script>
import MovieDetails from "@/components/MovieDetails.vue";
import { mapState } from "vuex";
export default {
  name: "movie-details",
  components: {
    MovieDetails,
  },
  computed: mapState(["movieId"]),
  // created: function () {
  //   this.$store.commit("setMovieId", this.$route.params.id);
  // },
};
</script>

