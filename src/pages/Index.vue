<template>
  <div>
    <div class="text-center">
      <strong>Name Please !</strong>
    </div>
    <Input
      class="mb-2"
      v-model="userName"
      :class="hasError ? 'border-red-400' : ''"
      autofocus="true"
    />
    <ErrorMessage
      v-show="hasError"
      error-message="Allow us to know your name please !"
    />
    <Button @click="handleClick">Save</Button>
  </div>
</template>

<script>
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input";
import Button from "../components/Button";
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      userName: this.$store.state.userName,
      error: false
    };
  },
  components: {
    Input,
    Button,
    ErrorMessage
  },
  methods: {
    ...mapActions(["addUserName"]),
    handleClick() {
      if (this.userName != "") {
        this.addUserName(this.userName)
          .then(() => {
            this.$router.push("./todos");
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
    hasError() {
      return this.error;
    }
  },
  watch: {
    userName() {
      if (this.userName != "") {
        this.error = false;
      }
    }
  }
};
</script>
