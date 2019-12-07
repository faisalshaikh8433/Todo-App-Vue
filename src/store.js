import createPersistedState from "vuex-persistedstate";
export const store = {
  state: {
    todos: [
      {
        work: "I wana Work"
      },
      {
        work: "I wana Sleep"
      }
    ],
    userName: ""
  },
  mutations: {
    updateTodos(state, data) {
      state.todos = [...state.todos, data.value];
    },
    updateUserName(state, data) {
      state.userName = data;
    }
  },
  actions: {
    addNewTodo({ commit }, data) {
      commit("updateTodos", {
        value: data
      });
    },
    addUserName({ commit }, data) {
      commit("updateUserName", data);
    }
  },
  getters: {
    allTodos: state => {
      return state.todos;
    }
  },
  plugins: [createPersistedState()]
};
