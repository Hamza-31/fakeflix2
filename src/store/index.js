import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        searchQuery: '',
        searchResults: [],
        movieID: '',
        movieDetails: [],
        API_key: '338e64b8114d773d6a8d1dc0fb956525'
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
        }
    },
    actions: {
        fetchMovies: function () {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.API_key}&query=${this.state.searchQuery}`)
                .then(response => response.json())
                .then(movies => {
                    this.commit('setSearchResults', movies.results);
                })
        },
        fetchMovie: function () {
            console.log(this.state.movieID)
            fetch(`https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=${this.state.API_key}&language=en-US`)
                .then(response => response.json())
                .then(movie => {
                    this.commit('setMovieDetails', movie);
                })
        },
    },
    modules: {}
})