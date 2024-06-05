import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: []
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/NewMoodView.vue')
    },
    {
      path:'/memo',
      name:'memo',
      component: ()=> import ('../views/CalendarView.vue')
    }
  ]
})

export default router
