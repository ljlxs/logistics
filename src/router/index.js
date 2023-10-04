import { createRouter, createWebHashHistory } from 'vue-router'
import Labout from '../views/Labout/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'labout',
      component: Labout,
      children:[
        {
          path: '/RealTime',
          name: 'realTime',
          component: () => import('../views/RealTime/index.vue')
        },
        {
          path: '/MoniToring',
          name: 'monitoring',
          component: () => import('../views/MoniToring/index.vue')
        }
      ]
    },
    
  ]
})

export default router
