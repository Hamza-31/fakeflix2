<template>
  <div class="hello">
    <header>
      <nav><input type="text" v-model="query" @keyup.enter="fetchMovie" /></nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data: function () {
    return {
      query: "",
      movies: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  align-items: center;
}
input {
  display: block;
  padding: 10px;
  outline: solid #48c0c3;
}
</style>
