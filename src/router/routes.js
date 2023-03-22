const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/newcomponente", component: () => import("../pages/newComponente.vue") },
      { path: "/rutine1", component: () => import("../pages/rutinas/RutineOpen.vue") },
      { path: "/rutine2", component: () => import("../pages/rutinas/RutineOpen2.vue") },
      {
        path: "/variables/:id",
        component: () => import("../pages/rutinas/SistVariables.vue"),

      },
      {
        path: "/medicion",
        component: () => import("../pages/rutinas/NewMedicion.vue"),

      }
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
