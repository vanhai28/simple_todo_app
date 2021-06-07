// import api from "../../apis/mockapi";
import axios from "axios";
import * as API_URL from "../../common/apiUrl";
const state = {
  todoList: [],
  loading: false,
};

const getters = {
  todoList: (state) => state.todoList,
  loading: (state) => state.loading,
};

const actions = {
  fetchTodoList: function ({ commit }) {
    commit("setLoading", true);
    axios.get(API_URL.GET_TODO_LIST).then((res) => {
      commit("setTodoList", [...res.data]);
      commit("setLoading", false);
    });
  },
  addNewTodo: ({ commit }, item) => {
    commit("setLoading", true);
    axios.post(API_URL.POST_TODO_LIST, item).then(() => {
      commit("setLoading", false);
    });
  },
  removeTodoItem: ({ commit }, item) => {
    commit("setLoading", true);
    axios.delete(API_URL.POST_TODO_LIST + "/" + item.id, item).then(() => {
      commit("setLoading", false);
    });
  },

  updateTodoItem: ({ commit }, item) => {
    commit("setLoading", true);
    axios.put(API_URL.POST_TODO_LIST + "/" + item.id, item).then(() => {
      commit("setLoading", false);
    });
  },
};

const mutations = {
  setTodoList: (state, newTodoList) => {
    state.todoList = newTodoList;
  },
  addNewTodo: () => {},
  setLoading: (state, status) => {
    state.loading = status;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
