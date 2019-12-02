<template>
  <div class="flex justify-between m-2 font-serif border p-2 hover:bg-blue-100">
    <span>{{ todo.work }}</span>
    <span>
      <Button
        name="Edit"
        buttonClass="bg-transparent hover:bg-blue-500 hover:text-white hover:font-semibold border border-blue-500 hover:border-transparent rounded p-1 text-sm font-serif"
      />
    </span>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  components: {
    Button
  },
  props: {
    todo: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped></style>
