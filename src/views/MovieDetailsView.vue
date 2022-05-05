<template>
  <section class="details-container">
    <div class="row py-4">
      <div class="col">
        <iframe
          v-if="movieTrailer !== 0 ? true : false"
          width="1000"
          height="315"
          :src="trailerURL(movieTrailer.results[0].key)"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="row">
      <figure class="col-4">
        <img :src="imgURL(movieDetails.poster_path)" />
        <figcaption>{{ movieDetails.original_title }}</figcaption>
      </figure>
      <article class="col-8">
        <h2>{{ movieDetails.original_title }}</h2>
        <small>
          <time :datetime="movieDetails.release_date">
            {{ movieDetails.original_title }}: ({{
              movieDetails.original_language
            }}) - Released: {{ movieDetails.release_date | toDate }}</time
          >
        </small>
        <p class="py-4">{{ movieDetails.overview }}</p>

        <h3>Infos</h3>
        <ul>
          <li>Popularity : {{ movieDetails.popularity }}</li>
          <li>Vote : {{ movieDetails.vote_average }}/10</li>
          <li>Vote count : {{ movieDetails.vote_count }}</li>
        </ul>
      </article>
    </div>
    <div class="row watch-favorite py-5">
      <button class="col">Add to favorite</button>
      <button class="col">Add to watch</button>
    </div>
    <hr />
    <div class="row reviews">
      <h3>Reviews</h3>
      <div
        v-for="review in movieReviews.results"
        v-bind:key="review.id"
        class="p-5"
      >
        <p v-if="review.author">
          Rating : {{ review.author_details.rating }}/10
        </p>
        <h4>{{ review.author }}</h4>
        <p>{{ review.content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "movie-details",
  computed: mapState(["movieDetails", "movieTrailer", "movieReviews"]),
  filters: {
    toDate: function (value) {
      let date = new Date(value);
      return date.toLocaleDateString("en-EN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
  // created: function () {
  //   this.$store.dispatch("fetchMovie");
  // },
  props: ["moviedetails"],
  created: function () {
    this.$store.dispatch("fetchTrailer");
    this.$store.dispatch("fetchReviews");
    console.log(this.$store.state.movieReviews);
  },
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
  padding-bottom: 100px;
}
.watch-favorite {
  padding-bottom: 100px;
}
img {
  width: 300px;
  height: 450px;
  object-fit: cover;
}
article {
  color: white;
  text-align: left;
}
.reviews {
  margin-top: 100px;
  text-align: left;
}
</style>

