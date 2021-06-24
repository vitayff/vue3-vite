import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/pic",
    name: "name",
    component: () => import("../views/Photo.vue")
  }, {
    path: '/buy',
    component: () => import("../views/Buy.vue"),
    meta: { index: 1 }
  },
  {
    path: '/Cart',
    component: () => import("../components/Cart.vue")
  },
  {
    path: '/OrderForm',
    component: () => import("../components/OrderForm.vue")
  },
  {
    path: '/Login',
    component: () => import("../components/Login.vue")
  },
  {
    path: '/Profile',
    component: () => import("../components/Profile.vue"),
    children: [
      {
        path: 'EditAddressPage',
        component: () => import("../components/EditAddressPage.vue")
      },
      {
        path: 'AddNewAddress',
        component: () => import("../components/AddNewAddress.vue")
      },
      {
        path: 'ModifyAddress',
        component: () => import("../components/ModifyAddress.vue")
      }
    ]
  },
  {
    path: '/DetailsPage',
    component: () => import("../components/DetailsPage.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
