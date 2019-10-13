import AllTodos from "./pages/AllTodos";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: App
  },
  {
    path: "/todos",
    name: "todos",
    component: AllTodos
  }
];

export default routes;
