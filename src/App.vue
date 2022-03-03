<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <router-link to="/">Home</router-link>
    <router-link to="/my-favorite">Favorite</router-link>
    <router-view />
    <MainHeader />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import "@/css/style.css";
export default {
  components: {
    MainHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
