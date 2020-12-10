import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "@/views/Main.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Restaurants.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
