import VueRouter from "vue-router";
import HomePage from "../components/HomePage";
import AddTodoPage from "../components/AddTodoPage";
// import ErrorPage from "../components/ErrorPage";

const router = new VueRouter({
  routes: [
    {
      path: "/add-todo",
      component: AddTodoPage,
    },
    {
      path: "/",
      component: HomePage,
    },
    // {
    //     path: "/",
    //     component: ErrorPage
    // }
  ],
});
export default router;
