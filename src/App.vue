<template>
  <div id="app">
    <router-link to="/">
      <img class="logo" src="./assets/logo.svg" width="50%" alt="" />
    </router-link>
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/my-favorite">Favorite</router-link> |
        <router-link to="/watch-list">Watch List</router-link>
      </nav>
      <nav><MainHeader /></nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  components: {
    MainHeader,
  },
};
</script>



<style>
header {
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
  min-height: 80px;
}
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  background-color: #000000;
}
.logo {
  padding-top: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a:hover {
  font-weight: bold;
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
