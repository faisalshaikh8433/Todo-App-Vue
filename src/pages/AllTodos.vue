<template>
  <div class="m-2">
    <TodoItem v-for="todo in allTodos" :todo="todo" :key="todo.id" />
    <Input class="mb-2" v-model="todoText" />
    <Button @click="handleClick" />
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";
import Input from "../components/Input";
import Button from "../components/Button";
import { mapActions, mapGetters } from "vuex";
export default {
  data: function() {
    return {
      todoText: ""
    };
  },
  components: {
    TodoItem,
    Button,
    Input
  },
  methods: {
    ...mapActions(["addNewTodo"]),
    handleClick() {
      // this.$store
      //   .dispatch("addNewTodo", { work: this.todoText })
      //   .then(() => {
      //     console.log("dispatched");
      //   })
      //   .catch(() => {
      //     console.log("error appeared");
      //   });
      this.addNewTodo({ work: this.todoText })
        .then(() => {
          console.log("dispatched");
          this.todoText = "";
        })
        .catch(() => {
          console.log("error appeared");
        });
    }
  },
  computed: {
    ...mapGetters(["allTodos"])
  }
};
</script>

<style lang="scss" scoped></style>
