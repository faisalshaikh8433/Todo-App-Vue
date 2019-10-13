<template>
  <div class="flex justify-between">
    <span>{{ todo.work }}</span>
    <span>
      <Button name="Edit" />
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
