<template>
  <div id="app">
     <div class="container">
      <h3 class="text-center mt-3">Todo App</h3>
      <div class="content d-flex justify-content-center align-items-center">
        <AddToDo v-on:addTodo="addTodo"></AddToDo>
        <h2 class="heading-todo-list mb-4">
          Todo list
        </h2>
        <div class="list-todo" v-for="(item, index) in todoList" :key="index">
          <TodoItem v-bind:todo="item" v-on:removeTodo="removeTodo"></TodoItem>
        </div>

       <p class="text-center" v-if="todoList.length === 0">Empty</p> 
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem";
import AddToDo from './components/AddToDo';

export default {
  name: "App",
  components: {
    TodoItem,
    AddToDo
  },
  data (){
    return {
      todoList :JSON.parse(localStorage.getItem('todoList')) || [],
    }
  },
  methods: {
    addTodo:function(newTodo){
        //check empty string
        let tmp = newTodo;
      if(tmp.replace(/\s+/g, "") === "")
      {
        return;
      };

      this.todoList.push({
        content: newTodo,
      });

      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },

  removeTodo: function(todo){  
    let index = this.todoList.findIndex(item=>item.content == todo);

    if(index >=0)
    {
      this.todoList.splice(index,1); 
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    };
  }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  flex-direction: column;
}
.list-todo {
width: 50%;
}
.heading-todo-list {
  border-bottom: 2px solid #78797a; 
  width: 50%;
  text-align: left;
  padding-bottom: 10px;
}
</style>
