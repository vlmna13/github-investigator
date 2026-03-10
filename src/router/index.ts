import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/investigator/:username([a-zA-Z0-9-]+)',
      name: 'dossier',
      component: () => import('../pages/DossierPage.vue'),
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('../pages/ArchivePage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFoundPage.vue'),
    },
  ],
})

export default router
