<template>
  <button :class="buttonClass" @click="$emit('click')"><slot></slot></button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Add"
    },
    buttonClass: {
      type: String,
      default:
        "bg-transparent hover:bg-green-500 hover:text-white hover:font-semibold border border-green-500 hover:border-transparent rounded p-1 w-full text-sm font-serif"
    }
  }
};
</script>

<style scoped></style>
