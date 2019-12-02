export const store = {
  state: {
    todos: [
      {
        work: "I wana Work"
      },
      {
        work: "I wana Sleep"
      }
    ]
  },
  mutations: {
    addTodo(state, data) {
      state.todos = [...state.todos, data.value];
    }
  },
  actions: {
    addNewTodo({ commit }, data) {
      commit("addTodo", {
        value: data
      });
    }
  },
  getters: {
    allTodos: state => {
      return state.todos;
    }
  }
};
