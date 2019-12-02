<template>
  <div id="app" class="h-screen flex items-center justify-center">
    <div class="bg-white shadow p-2 w-3/5 font-mono">
      <Header></Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>
