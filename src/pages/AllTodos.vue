<template>
  <div>
    <TodoItem v-for="todo in $store.state.todos" :todo="todo" :key="todo.id" />
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";
export default {
  components: {
    TodoItem
  }
};
</script>

<style lang="scss" scoped></style>
