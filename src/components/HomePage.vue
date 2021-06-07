<template>
  <div id="app">
    <Loading v-if="loading" />
    <div class="container">
      <h3 class="text-center mt-3">Todo App</h3>
      <div class="row container">
        <div class="col-sm-6">
          <div class="card text-left">
            <div class="card-body">
              <h4 class="card-title">In complete</h4>
              <div
                class="list-todo"
                v-for="(item, index) in todoList"
                :key="index"
              >
                <TodoItem
                  v-if="item.status == status.STATUS_IN_COMPLETE"
                  :todo="item"
                  @removeTodo="removeTodo"
                  @toggleStatus="updateStatusTodo"
                />
              </div>
              <p class="text-center" v-if="todoList.length === 0">Empty</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card text-left">
            <div class="card-body">
              <h4 class="card-title">Completed</h4>
              <div
                class="list-todo"
                v-for="(item, index) in todoList"
                :key="index"
              >
                <TodoItem
                  v-if="item.status == status.STATUS_COMPLETED"
                  :todo="item"
                  @removeTodo="removeTodo"
                  @toggleStatus="updateStatusTodo"
                />
              </div>
              <p class="text-center" v-if="todoList.length === 0">Empty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TodoItem from "./TodoItem";
import * as status from "../common/constant";
import Loading from "./Loading";

export default {
  name: "HomePage",
  components: {
    TodoItem,
    Loading,
  },
  data() {
    return {
      status: status,
    };
  },
  computed: {
    ...mapGetters(["todoList", "loading"]),
  },
  methods: {
    ...mapActions(["fetchTodoList"]),
    removeTodo: function (todo) {
      let index = this.todoList.findIndex((item) => item.id === todo.id);

      if (index >= 0) {
        this.todoList.splice(index, 1);
      }
    },

    updateCurrentStatus: function (event) {
      this.currentStatus = event.target.value;
    },

    updateStatusTodo: function (todo) {
      let index = this.todoList.findIndex((item) => item.id === todo.id);

      if (index >= 0) {
        this.todoList[index] = todo;
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
      }
    },
  },
  created() {
    this.fetchTodoList();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content {
  flex-direction: column;
}
.list-todo {
  width: 90%;
}
.heading-todo-list {
  border-bottom: 2px solid #78797a;
  width: 50%;
  text-align: left;
  padding-bottom: 10px;
}
.btn--update-status {
  float: right;
}
</style>
