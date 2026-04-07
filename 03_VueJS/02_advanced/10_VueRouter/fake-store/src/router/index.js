import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/electronics', name: 'electronics', component: ElectronicsPage },
    { path: '/jewelery', name: 'jewelery', component: JeweleryPage },
    { path: 'mensclothing', name: 'mensclothing', component: MensClothingPage },
    {
      path: 'womensclothing',
      name: "women's clothing",
      component: WomensClothingPage,
    },
  ],
});

export default router;
