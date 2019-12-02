<template>
  <input
    :type="inputType"
    :class="InputClass"
    @input="$emit('input', $event.target.value)"
    :value="value"
  />
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    InputClass: {
      type: String,
      default:
        "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-teal-300"
    },
    value: String
  }
};
</script>

<style lang="scss" scoped></style>
