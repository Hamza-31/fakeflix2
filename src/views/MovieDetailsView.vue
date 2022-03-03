<template>
  <div class="about">
    <h1>MoviDetails</h1>
    <MovieDetails />
  </div>
</template>

<script>
import MovieDetails from "@/components/movieDetails.vue";
export default {
  name: "movie-details",
  components: {
    MovieDetails,
  },
};
</script>

