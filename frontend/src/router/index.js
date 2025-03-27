import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// Définir les routes
const routes = [
]

// Créer le routeur
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(), // pour l'historique avec hachage, # dans l'URL
  routes
})

export default router