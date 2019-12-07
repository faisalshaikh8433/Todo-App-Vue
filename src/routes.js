import AllTodos from "./pages/AllTodos";
import Index from "./pages/Index";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/todos",
    name: "todos",
    component: AllTodos
  }
];

export default routes;
