import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/my-favorite',
        name: 'favorite',
        component: () => import('../views/FavoriteView.vue')
    },
    {
        path: '/movie/:id',
        name: 'movie-details',
        component: () => import('../views/MovieDetailsView.vue')
    },
    {
        path: '/my-watch-list/',
        name: 'watch-list',
        component: () => import('../views/WatchListView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router