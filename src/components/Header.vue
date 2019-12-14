<template>
  <div class="flex justify-center items-center shadow bg-gray-200 h-10">
    <h1 class="m-y-2 text-lg font-bold font-serif">
      Hi
      <router-link to="/" class="underline hover:text-blue-600">
        {{ this.$store.state.userName }}
      </router-link>
    </h1>
  </div>
</template>
