<template>
  <div class="hello">
    <nav>
      <input id="input" type="text" @keyup.enter="getData()" />
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainHeader",

  methods: {
    getData: function () {
      this.$store.commit(
        "setSearchQuery",
        document.getElementById("input").value
      );
      this.$store.dispatch("fetchMovies");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  min-height: 80px;
  background-color: #9e9e9e;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
nav {
  display: flex;
  justify-content: center;
  width: 100%;
}
input {
  display: block;
  padding: 10px;
  outline: solid #48c0c3;
}
</style>
