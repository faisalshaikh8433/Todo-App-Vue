import AllTodos from "./pages/AllTodos";

const routes = [
  {
    path: "/",
    name: "index",
    component: AllTodos
  },
  {
    path: "/todos",
    name: "todos",
    component: AllTodos
  }
];

export default routes;
