import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { auth } from "../firebase/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/layouts/Dashboard.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/create",
          name: "create",
          component: () => import("../views/CreateView.vue"),
        },
        {
          path: "/edit/:id",
          name: "edit",
          component: () => import("../views/EditView.vue"),
        },
        {
          path: "/read/:id",
          name: "read",
          component: () => import("../views/ReadView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }
  next();
});

export default router;
