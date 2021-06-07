import Vuex from "vuex";
import Vue from "vue";
import HandleTodo from "./modules/HandleTodo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    HandleTodo,
  },
});
