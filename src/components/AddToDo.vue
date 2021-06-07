<template>
  <div class="form-group">
    <input
      type="text"
      class="form-control mb-4"
      placeholder="Enter new todo"
      v-model="content"
    />
    <button class="mt2 btn btn-primary btn-add-todo" @click="addTodo">
      Add
    </button>
    <Loading v-if="loading"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import cryptoRandomString from "crypto-random-string";
import Loading from "./Loading";
import * as status from "../common/constant";

export default {
  name: "AddToDo",
  data() {
    return {
      content: "",
    };
  },
    computed: {
    ...mapGetters(["loading"]),
  },
  components:{
    Loading,
  },
  methods: {
    ...mapActions(["addNewTodo"]),
    addTodo: function () {
      let newItem = {
        id: cryptoRandomString({ length: 10 }),
        content: this.content,
        status: status.STATUS_IN_COMPLETE,
      };
      this.content = "";
      this.addNewTodo(newItem);
    },
  },
};
</script>

<style scoped>
.form-group {
  width: 50%;
}
.btn-add-todo {
  width: 100%;
}
</style>
