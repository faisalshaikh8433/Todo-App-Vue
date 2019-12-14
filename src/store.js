import createPersistedState from "vuex-persistedstate";
export const store = {
  state: {
    todos: [
      {
        id: 1,
        task: "Sample Task",
        complete: false
      }
    ],
    userName: "",
    counter: 1
  },
  mutations: {
    updateTodos(state, data) {
      state.todos = [...state.todos, data];
    },
    updateUserName(state, data) {
      state.userName = data;
    },
    updateATodo(state, data) {
      state.todos.forEach(todo => {
        if (todo.id === data.id) {
          todo.task = data.task;
          todo.complete = data.complete;
        }
      });
    },
    removeTodo(state, data) {
      state.todos = state.todos.filter(todo => todo.id != data.id);
    },
    incrementCounter(state) {
      state.counter++;
    }
  },
  actions: {
    addNewTodo({ commit }, data) {
      commit("updateTodos", data);
    },
    addUserName({ commit }, data) {
      commit("updateUserName", data);
    },
    updateTodo({ commit }, data) {
      commit("updateATodo", data);
    },
    updateCounter({ commit }) {
      commit("incrementCounter");
    },
    deleteTodo({ commit }, data) {
      commit("removeTodo", data);
    }
  },
  getters: {
    allTodos: state => {
      return state.todos;
    },
    counter: state => {
      return state.counter;
    }
  },
  plugins: [createPersistedState()]
};
