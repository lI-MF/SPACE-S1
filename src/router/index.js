import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/HomeView.vue'
import Home from "../views/Home/Home.vue";
import HomeCode from "../views/Home/index.vue";
import News from "../views/News/index.vue";
import WebCode from "../views/WebCode/index.vue";
import About from "../views/About/About.vue";
import Photography from "../views/Photography/Photography.vue";
import Login from "../views/Login/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/index",
    name: "Index",
    component: HomeCode,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/WebCode",
        name: "WebCode",
        component: WebCode,
      },
      {
        path: "/News",
        name: "News",
        component: News,
      },
      {
        path: "/Photography",
        name: "Photography",
        component: Photography,
      },
      {
        path: "/About",
        name: "About",
        component: About,
      },
    ],
  },
  {
    path: "/Login",
    name: "/Login",
    component: Login,
  },
  {
    path: "/",
    routes: "/Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;