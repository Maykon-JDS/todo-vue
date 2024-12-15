import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ToDoView.vue'
import ToDo from '@/components/ToDo.vue'
import ToDoView from '../views/ToDoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToDoView
    },
    {
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SobreView.vue')
    }
  ]
})

export default router
