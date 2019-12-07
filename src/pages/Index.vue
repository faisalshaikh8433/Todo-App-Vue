<template>
  <div>
    <div class="text-center">
      <strong>Name Please !</strong>
    </div>
    <Input
      class="mb-2"
      v-model="userName"
      :class="hasError ? 'border-red-400' : ''"
    />
    <p v-show="hasError" class="text-red-600 text-xs text-center mb-1">
      Allow us to know your name please !
    </p>
    <Button @click="handleClick">Save</Button>
  </div>
</template>

<script>
import Input from "../components/Input";
import Button from "../components/Button";
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      userName: "",
      error: false
    };
  },
  components: {
    Input,
    Button
  },
  methods: {
    ...mapActions(["addUserName"]),
    handleClick() {
      if (this.userName != "") {
        this.addUserName(this.userName)
          .then(() => {
            console.log("dispatched");
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
