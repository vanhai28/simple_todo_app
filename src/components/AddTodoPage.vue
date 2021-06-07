<template>
  <div class="content d-flex justify-content-center align-items-center">
            <h3 class="text-center mt-3">Todo App</h3>
    <AddToDo v-on:addTodo="addTodo" />
    <h2 class="heading-todo-list mb-4">
      Todo list
      <!-- <div class="btn--update-status dropdown open">
            <button
              class="btn btn-info dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ currentStatus }}
            </button>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <button
                class="dropdown-item"
                value="All"
                @click="updateCurrentStatus"
              >
                All
              </button>
              <button
                class="dropdown-item"
                value="In Complete"
                @click="updateCurrentStatus"
              >
                In Complete
              </button>
              <button
                class="dropdown-item"
                value="Completed"
                @click="updateCurrentStatus"
              >
                Completed
              </button>
            </div>
          </div> -->
    </h2>


    <p class="text-center" v-if="todoList.length === 0">Empty</p>
  </div>
</template>

<script>
import cryptoRandomString from "crypto-random-string";
import AddToDo from "./AddToDo";

export default {
  name: "AddTodoPage",
  components: {
    AddToDo,
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
      currentStatus: "All",
    };
  },
  methods: {
    addTodo(newTodo) {
      //check empty string
      let tmp = newTodo;
      if (tmp.replace(/\s+/g, "") === "") {
        return;
      }

      this.todoList.push({
        id: cryptoRandomString({ length: 10 }),
        status: "In Complete",
        content: newTodo,
      });

      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
  },
};
</script>

<style scoped>
.content {
  flex-direction: column;
}
</style>
