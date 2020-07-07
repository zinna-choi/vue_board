import Vue from "vue";
import VueRouter from "vue-router";
import BoardList from "@/components/board/BoardList";
import BoardDetail from "@/components/board/BoardDetail";
import BoardCreate from "@/components/board/BoardCreate";

import NotFound from "@/components/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BoardList",
    component: BoardList,
  },
  {
    path: "/board/detail/:contentId",
    name: "BoardDetail",
    component: BoardDetail,
  },
  {
    path: "/board/create/:contentId?",
    name: "BoardCreate",
    component: BoardCreate,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
