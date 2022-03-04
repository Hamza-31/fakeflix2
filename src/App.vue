<template>
  <div id="app">
    <router-link to="/">
      <img class="logo" src="./assets/logo.svg" width="50%" alt="" />
    </router-link>
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/my-favorite">Favorite</router-link>
      </nav>
      <nav><MainHeader /></nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

import "./css/bootstrap/bootstrap.css";
import "./assets/style.css";

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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  padding-top: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
