import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/endPoints",
      name: "endPoints",
      component: () => import("./components/EndPointsList")
    },
    {
      path: "/endPoints/:id",
      name: "tutorial-details",
      component: () => import("./components/EndPoints")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddFormulario")
    }
  ]
});