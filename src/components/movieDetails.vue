<template>
  <div>
    <img
      :src="'https://image.tmdb.org/t/p/w500/' + movieDetails.backdrop_path"
    />
    {{ movieDetails.budget }}
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "MovieDetails",
  computed: {
    movieDetails() {
      return this.$store.state.movieDetails;
    },
  },
};
</script>
