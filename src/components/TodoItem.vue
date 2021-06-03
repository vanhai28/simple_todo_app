<template>
     <div class="todo-item row">
            <div class="col-sm-10">
              <div class="todo-content mb-4">
                {{todo.content}}
              </div>
            </div>

            <div class="col-sm-2">
              <button class="btn btn-danger"
                @click="removeTodo" >
                  Remove
              </button>
            </div>
          </div>
</template>

<script> 

export default {
  name: "TodoItem",
  props: {
    todo : Object,
  },
  methods:{
   removeTodo:function(){
     this.$emit("removeTodo",this.todo.content )
   }
  }
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
