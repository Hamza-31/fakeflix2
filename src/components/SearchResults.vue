<template>
  <section>
    <div v-for="movie of searchResults" v-bind:key="movie.id">
      <router-link to="/movie-details">
        <img
          @click="getData(movie.id)"
          :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
        />
        <h2>{{ movie.title }}</h2>
      </router-link>
      <router-view />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchResults",
  computed: mapState(["searchResults", "searchQuery"]),
  methods: {
    getData: function (id) {
      console.log(id);
      this.$store.commit("setMovieId", id);
      this.$store.dispatch("fetchMovie");
      //   console.log(this.$store.state);
    },
  },
};
</script>