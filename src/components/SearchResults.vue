<template>
  <section id="results-container">
    <div class="row" v-if="isResults()">
      <h3 v-if="searchQuery">
        Results for : <b>{{ searchQuery }}</b>
      </h3>
      <div
        class="col py-2"
        v-for="movie of searchResults"
        v-bind:key="movie.id"
      >
        <router-link :to="`/movie/${movie.id}`">
          <figure @click="getData(movie.id)">
            <img :src="imgURL(movie.poster_path)" />
            <figcaption>{{ movie.title }}</figcaption>
          </figure>
        </router-link>
      </div>
    </div>
    <div v-else>
      <h3>
        The are no results for the search : <b>{{ searchQuery }}</b>
      </h3>
      <img src="../assets/404.jpg" alt="Not found" />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchResults",
  computed: mapState(["searchResults", "searchQuery"]),
  methods: {
    imgURL: function (value) {
      if (value) {
        return "https://image.tmdb.org/t/p/w500" + value;
      } else {
        return "https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png";
      }
    },
    getData: function (id) {
      this.$store.commit("setMovieId", id);
      this.$store.commit("setMovieTrailer", id);
      this.$store.dispatch("fetchMovie");
      this.$store.dispatch("fetchTrailer");
    },
    isResults: function () {
      return this.$store.state.searchResults.length === 0 &&
        this.$store.state.searchQuery.length !== 0
        ? false
        : true;
    },
  },
};
</script>
<style scoped>
#results-container {
  width: 800px;
  margin: 0 auto;
  padding-top: 40px;
}
img {
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
}
figure {
  width: 220px;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: underline;
  color: white;
}
</style>