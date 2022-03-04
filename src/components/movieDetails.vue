<template>
  <section class="details-container">
    <div class="row py-4">
      <div class="col">
        <iframe
          width="1000"
          height="315"
          :src="trailerURL(trailer.results[0].key)"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="row">
      <figure class="col-6">
        <img :src="imgURL(movieDetails.poster_path)" />
        <figcaption>{{ movieDetails.original_title }}</figcaption>
      </figure>
      <article class="col-6">
        <h2>{{ movieDetails.original_title }}</h2>
        <p>{{ movieDetails.overview }}</p>
        <time :datetime="movieDetails.release_date">{{
          movieDetails.release_date
        }}</time>
      </article>
    </div>
  </section>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "MovieDetails",
  computed: {
    movieDetails() {
      return this.$store.state.movieDetails;
    },
    trailer() {
      console.log(this.$store.state.movieTrailer);
      return this.$store.state.movieTrailer;
    },
  },
  // filters: {
  //   toDate: function (value) {
  //     let date = new Date(value)
  //     value.toLocaleDateString("fr-FR", {
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //     });
  //   },
  // },
  methods: {
    imgURL: function (value) {
      if (value) {
        return "https://image.tmdb.org/t/p/w500" + value;
      } else
        return "https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png";
    },
    trailerURL: function (value) {
      if (value) {
        return "https://www.youtube.com/embed/" + value;
      } else
        return "https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png";
    },
  },
};
</script>

<style scoped>
.details-container {
  width: 1000px;
  margin: 0 auto;
}
article {
  color: white;
}
</style>
