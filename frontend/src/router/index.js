import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'

// Définir les routes
const routes = [
  { path: '/', name: 'Page1', component: Page1 },
  { path: '/page2/:msg', name: 'Page2', component: Page2 },
  { path: '/page3/:msg', name: 'Page3', component: Page3 },
]

// Créer le routeur
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(), // pour l'historique avec hachage, # dans l'URL
  routes
})

export default router