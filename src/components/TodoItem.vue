<template>
  <div class="todo-item row">
    <div class="col-sm-8">
      <div class="todo-content mb-4">
        {{ todo.content }}
      </div>
    </div>

    <div class="col-sm-4">
      <div
        class="btn-group"
        role="group"
        v-if="todo.status == status.STATUS_IN_COMPLETE"
      >
        <button class="btn badge badge-primary" @click="toggleStatus">
          {{ todo.status }}
        </button>
        <button class="btn btn-danger" @click="removeTodo">Remove</button>
      </div>
      <div class="btn-group" role="group" v-else>
        <button class="btn badge badge-success" @click="toggleStatus">
          {{ todo.status }}
        </button>
        <button class="btn btn-danger" @click="removeTodo">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as status from "../common/constant";

export default {
  name: "TodoItem",
  props: {
    todo: Object,
  },
  data() {
    return {
      status,
    };
  },
  methods: {
    ...mapActions(["removeTodoItem", "updateTodoItem"]),
    removeTodo: function () {
      this.removeTodoItem(this.todo); 
      this.$emit("removeTodo", this.todo);
    },
    toggleStatus: function () {
      this.todo.status =
        this.todo.status === this.status.STATUS_IN_COMPLETE
          ? this.status.STATUS_COMPLETED
          : this.status.STATUS_IN_COMPLETE;
      this.updateTodoItem(this.todo);
      this.$emit("toggleStatus", this.todo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-content:hover {
  background-color: #d1d0d0;
}
.todo-content {
  border: 2px solid #d1d0d0;
  border-radius: 7px;
  text-align: left;
  padding: 5px 5px;
  overflow: auto;
}
</style>
