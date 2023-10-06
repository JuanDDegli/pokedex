import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', 
  component: HomeView },

  { path: '/about', 
  component: AboutView },
  // Outras rotas...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;