<template>
  <div class="top-rated-container">
    <h3>Top rated</h3>
    <hooper
      :itemsToShow="1"
      :infiniteScroll="true"
      :vertical="true"
      :autoPlay="true"
      :playSpeed="3000"
      class="row hooper bd-highlight"
    >
      <slide
        class="col slide"
        v-for="movie in topRatedMovies"
        v-bind:key="movie.id"
      >
        <router-link :to="'/movie/' + movie.id">
          <figure @click="getData(movie.id)">
            <img :src="imgURL(movie.poster_path)" :alt="movie.original_title" />
            <figcaption>{{ movie.original_title }}</figcaption>
          </figure>
        </router-link>
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import { mapState } from "vuex";
export default {
  name: "TopRatedMovies",
  components: {
    Hooper,
    Slide,
  },
  computed: mapState(["topRatedMovies"]),
  created: function () {
    this.$store.commit("setTopRatedMovies");
    this.$store.dispatch("fetchTopRatedMovies");
  },
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
  },
};
</script>
<style scoped>
.top-rated-container {
  max-width: 150px;
  margin: 0 auto;
}
.hooper {
  min-height: 250px;
  margin: 0 auto;
  overflow: visible;
  background-color: #000000;
}
figure {
  min-height: 250px;
}
img {
  width: 100px;
  height: 150px;
  object-fit: cover;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: underline;
  color: rgb(66, 185, 131);
}
</style>
