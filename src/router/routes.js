import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import index from "./index";
import common from "./common";

const routes = [
    ...index,
    ...common
  ]

  const Router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })

export default Router