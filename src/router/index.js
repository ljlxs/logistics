import { createRouter, createWebHashHistory } from 'vue-router'
import Labout from '../views/Labout/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'labout',
      component: Labout
    }
  ]
})

export default router
