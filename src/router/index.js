import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PokemonDetailsView from '../views/PokemonDetailsView.vue';
import FavoritesView from '../views/FavoritesView.vue';

const routes = [
  { path: '/', 
  component: HomeView },

  { path: '/pokemon/id:', 
  component: PokemonDetailsView },
  
  { path: '/favorites', 
  component: FavoritesView },
  // Outras rotas...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;