<template>
  <div class="flex justify-center items-center shadow bg-gray-200 h-10">
    <h1 class="m-y-2 text-lg font-bold font-serif" v-html="`Hi ${this.$store.state.userName}`"></h1>
  </div>
</template>
