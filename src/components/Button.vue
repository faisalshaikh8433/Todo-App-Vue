<template>
  <button
    :class="buttonClass"
    class="bg-transparent hover:bg-blue-500 hover:text-white border border-blue-500 hover:border-transparent rounded"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Add"
    },
    buttonClass: {
      type: String
    }
  }
};
</script>

<style scoped></style>
