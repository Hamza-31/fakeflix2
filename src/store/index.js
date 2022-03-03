import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({

    state: {
        searchQuery: "",
        searchResults: []
    },
    getters: {

    },
    mutations: {},
    actions: {
        fetchMovie: async function () {
            let response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=338e64b8114d773d6a8d1dc0fb956525&query=${this.query}`
            );
            let movie = await response.json();
            this.movies = movie.results;
            console.log(this.movies);
        }
    },
    modules: {

    },

})