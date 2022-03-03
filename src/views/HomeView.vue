<template>
  <div class="home">
    <MainHeader />
    <SearchResults />
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import SearchResults from "@/components/SearchResults.vue";

export default {
  name: "HomeView",
  components: {
    MainHeader,
    SearchResults,
  },
};
</script>
