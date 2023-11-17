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
        },
        {
          path: '/DistriBution',
          name: 'distribution',
          component: () => import('../views/DistriBution/index.vue')
        },
        {
          path: '/ComPlaint',
          name: 'complaint',
          component: () => import('../views/ComPlaint/index.vue')
        },
        {
          path: '/EmploYee',
          name: 'employee',
          component: () => import('../views/EmploYee/index.vue')
        },
        {
          path: '/WareHouse',
          name: 'warehouse',
          component: () => import('../views/WareHouse/index.vue')
        },
        {
          path: '/LatticePoint',
          name: 'latticepoint',
          component: () => import('../views/LatticePoint/index.vue')
        }
      ]
    },
    
  ]
})

export default router
