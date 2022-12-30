import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import ViewInvoice from "../views/ViewInvoice.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/invoice/:id',
      name: 'viewinvoice',
      component: ViewInvoice
    }
  ]
})

export default router
