import Vue from "vue"
import VueRouter from "vue-router"
// import HomeView from '../views/HomeView.vue'
import Home from "../views/Home/Home.vue"
import HomeCode from "../views/Home/index.vue"
import TheLab from "../views/TheLab/index.vue" //
import TreeHoles from "../views/TreeHoles/index.vue" //
import MyFile from "../views/MyFile/index.vue" //
import MyEditor from "../views/MyEditor/index.vue" //

import About from "../views/About/About.vue"
// import Details from "../views/Details/Details.vue"

import Photography from "../views/Photography/Photography.vue"
import Login from "../views/Login/index.vue"

Vue.use(VueRouter)

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
        // children: [
        //   // 详情页
        //   {
        //     path: "/Details",
        //     name: "Details",
        //     component: Details,
        //   },
        // ],
      },
      {
        //树洞
        path: "/TreeHoles",
        name: "TreeHoles",
        component: TreeHoles,
      },
      {
        //写博客
        path: "/MyEditor",
        name: "MyEditor",
        component: MyEditor,
      },
      {
        // 归档
        path: "/MyFile",
        name: "MyFile",
        component: MyFile,
      },
      {
        // 实验室
        path: "/TheLab",
        name: "TheLab",
        component: TheLab,
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
      // {
      //   path: "/Details",
      //   name: "Details",
      //   component: Details,
      // },
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
]

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
})

export default router
