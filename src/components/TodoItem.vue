<template>
  <div
    class="md:flex justify-between items-center m-2 font-serif border p-2 hover:bg-blue-100"
  >
    <div v-show="!isEditMode" class="text-center md:text-right">
      <input
        type="checkbox"
        class="mr-2"
        v-model="complete"
        @input="saveTodo"
        :checked="complete"
      />
      <span @click="checkIt" :class="complete ? 'line-through' : ''">{{
        todo.task
      }}</span>
    </div>
    <div
      v-if="isEditMode"
      :class="isEditMode ? 'md:w-9/12 md:m-0' : ''"
      class="w-full m-1"
    >
      <Input
        ref="inputs"
        v-model="currentValue"
        class="mr-2"
        :class="hasError ? 'border-red-400' : ''"
      />
      <ErrorMessage v-show="hasError" error-message="can't be blank !" />
    </div>
    <div class="md:w-3/12 text-center w-full">
      <Button
        buttonClass="hover:bg-blue-500 hover:text-white hover:font-semibold border border-blue-500 hover:border-transparent rounded p-1 text-sm font-serif"
        @click="toggleEditMode"
        v-show="!isEditMode && !complete"
        >Edit</Button
      >
      <Button
        buttonClass="hover:bg-blue-500 hover:text-white hover:font-semibold border border-blue-500 hover:border-transparent rounded p-1 text-sm font-serif"
        @click="saveTodo"
        v-show="isEditMode"
        >Save</Button
      >
      <Button
        buttonClass="hover:bg-red-500 hover:text-white hover:font-semibold border border-red-500 hover:border-transparent rounded p-1 text-sm font-serif ml-1"
        @click="removeTodo"
        >Delete</Button
      >
    </div>
  </div>
</template>

<script>
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input";
import Button from "./Button";
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      isEditMode: false,
      currentValue: this.todo.task,
      error: false,
      complete: this.todo.complete
    };
  },
  components: {
    Button,
    Input,
    ErrorMessage
  },
  props: {
    todo: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapActions(["updateTodo", "deleteTodo"]),
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
      this.$nextTick(() => {
        this.$refs.inputs.$el.focus();
      });
    },
    saveTodo() {
      if (this.currentValue != "") {
        this.updateTodo({
          id: this.todo.id,
          task: this.currentValue,
          complete: this.complete
        })
          .then(() => {
            this.isEditMode = false;
          })
          .catch(() => {
            console.log("error appeared");
          });
      } else {
        this.error = true;
      }
    },
    removeTodo() {
      this.deleteTodo(this.todo);
    },
    checkIt() {
      this.complete = !this.complete;
    }
  },
  watch: {
    currentValue() {
      if (this.currentValue != "") {
        this.error = false;
      }
    }
  },
  computed: {
    hasError() {
      return this.error;
    }
  }
};
</script>

<style lang="scss" scoped></style>
