<template>
  <div class="m-2">
    <div class="text-center">
      <h1 class="font-bold font-sans">Your Tasks</h1>
    </div>
    <TodoItem v-for="todo in allTodos" :todo="todo" :key="todo.id" />
    <Input
      class="mb-2"
      v-model="task"
      place-holder="Type your task here..."
      :class="hasError ? 'border-red-400' : ''"
    />
    <ErrorMessage
      v-show="hasError"
      error-message="Something is better than nothing !"
    />
    <Button @click="handleClick">Add New</Button>
  </div>
</template>

<script>
import ErrorMessage from "../components/ErrorMessage";
import TodoItem from "../components/TodoItem";
import Input from "../components/Input";
import Button from "../components/Button";
import { mapActions, mapGetters } from "vuex";
export default {
  data: function() {
    return {
      id: "",
      task: "",
      error: false
    };
  },
  components: {
    TodoItem,
    Button,
    Input,
    ErrorMessage
  },
  methods: {
    ...mapActions(["addNewTodo", "updateCounter"]),
    handleClick() {
      // this.$store
      //   .dispatch("addNewTodo", { task: this.todoText })
      //   .then(() => {
      //     console.log("dispatched");
      //   })
      //   .catch(() => {
      //     console.log("error appeared");
      //   });
      if (this.task != "") {
        this.addNewTodo({ id: this.id + 1, task: this.task, complete: false })
          .then(() => {
            this.updateCounter();
            this.task = "";
          })
          .catch(() => {
            console.log("error appeared");
          });
      } else {
        this.error = true;
      }
    }
  },
  computed: {
    ...mapGetters(["allTodos", "counter"]),
    hasError() {
      return this.error;
    }
  },
  watch: {
    task() {
      if (this.task != "") {
        this.error = false;
      }
    }
  },
  created() {
    this.id = this.counter;
  },
  mounted() {
    if (this.$store.state.userName == "") {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
