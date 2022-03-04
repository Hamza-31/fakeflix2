<template>
  <section id="results-container">
    <div class="row">
      <div class="col" v-for="movie of searchResults" v-bind:key="movie.id">
        <router-link :to="'/movie/' + movie.id">
          <figure>
            <img @click="getData(movie.id)" :src="imgURL(movie.poster_path)" />
            <figcaption>{{ movie.title }}</figcaption>
          </figure>
        </router-link>
      </div>
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
      console.log(id);
      this.$store.commit("setMovieId", id);
      this.$store.commit("setMovieTrailer", id);
      this.$store.dispatch("fetchMovie");
      this.$store.dispatch("fetchTrailer");
      //   console.log(this.$store.state);
    },
  },
};
</script>
<style scoped>
#results-container {
  width: 1000px;
  margin: 0 auto;
  padding-top: 40px;
}
img {
  width: 200px;
  height: 300px;
  object-fit: cover;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: underline;
}
</style>