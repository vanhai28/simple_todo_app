<template>
     <div class="form-group">
          <input type="text"
            class="form-control mb-4"
             placeholder="Enter new todo" v-model="newTodo">
          <button class="mt2 btn btn-primary btn-add-todo" @click="addTodo">
            Add
          </button>
        </div>
</template>

<script>

export default {
    name: 'AddToDo',
    data(){
        return{
            newTodo : '',
        }
    },
    methods: {
        addTodo: function(){
            let temp = this.newTodo;
            this.newTodo = '';
            this.$emit('addTodo', temp);
        }
    },
}
</script>

<style scoped>
.form-group {
  width: 50%;
}
.btn-add-todo {
  width: 100%;
}
</style>
