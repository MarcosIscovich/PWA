const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/newcomponente", component: () => import("../pages/newComponente.vue") },
      { path: "/rutine", component: () => import("../pages/rutinas/NewRutine.vue") },
    ],
  },
  {
    path: "/otherpage",
    component: () => import("pages/pagesoutside/OtherPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
