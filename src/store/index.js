import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        searchQuery: '',
        searchResults: [],
        movieID: 0,
        movieTrailer: [],
        movieDetails: [],
        API_key: '338e64b8114d773d6a8d1dc0fb956525',
        topRatedMovies: []
    },
    getters: {},
    mutations: {
        setSearchQuery: function (state, query) {
            state.searchQuery = query
        },
        setSearchResults: function (state, results) {
            state.searchResults = results
        },
        setMovieDetails: function (state, movie) {
            state.movieDetails = movie
        },
        setMovieId: function (state, id) {
            state.movieID = id
        },
        setMovieTrailer: function (state, trailer) {
            state.movieTrailer = trailer
        },
        setTopRatedMovies: function (state, results) {
            state.topRatedMovies = results

        }
    },
    actions: {
        fetchMovies: function (context) {
            let query = context.state.searchQuery.split(' ').join('+');
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${context.state.API_key}&query=${query}`)
                .then(response => response.json())
                .then(movies => {
                    this.commit('setSearchResults', movies.results);
                })
        },
        fetchMovie: function (context) {


            fetch(`https://api.themoviedb.org/3/movie/${context.state.movieID}?api_key=${context.state.API_key}&language=en-US`)
                .then(response => response.json())
                .then(movie => {
                    this.commit('setMovieDetails', movie);
                })
        },
        fetchTrailer: function (context) {
            fetch(`https://api.themoviedb.org/3/movie/${context.state.movieID}/videos?api_key=${context.state.API_key}&language=en-US`)
                .then(response => response.json())
                .then(trailer => {
                    this.commit('setMovieTrailer', trailer);
                })
        },
        fetchTopRatedMovies: function (context) {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${context.state.API_key}&language=en-US`)
                .then(response => response.json())
                .then(latestMovies => {
                    this.commit('setTopRatedMovies', latestMovies.results.filter(movie => movie.original_language === 'en').slice(0, 10));
                })
        }
    },
    modules: {}
})