<template>
  <div>
    <Header v-show="displayHeading"></Header>
    <div class="h-screen flex items-center justify-center">
      <div class="bg-white shadow p-2 w-3/5 font-mono">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  },
  computed: {
    displayHeading() {
      return this.$store.state.userName.length > 0;
    }
  }
};
</script>
