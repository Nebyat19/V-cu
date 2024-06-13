
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {

    path: '/change-port',
    name: 'change-port',
    component: () => import('../views/ChangePort.vue')

  },
  
  {
    path: '/',
    name: 'onboarding',
    component: () => import('../views/Onboarding.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: []
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/NewMoodView.vue'),
    props: true
  },
  {
    path: '/memo',
    name: 'memo',
    component: () => import('../views/CalendarView.vue')
  },
  {
    path: '/add-detail',
    name: 'add-detail',
    component: () => import('../views/AddDetailView.vue')
  },
  {
    path: '/mood/:id',
    name: 'mood-detail',
    component: () => import('../views/MoodDetailView.vue'),
    props: true
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: () => import('../views/user/ProfileView.vue')
  },
  {
    path: '/stats',
    name: 'stats',
    component: () => import('../components/AnalyticsLayout.vue'),
    children: [
      {
        path: '/stats',
        name: 'productivity',
        component: () => import('../views/analytics/RecordProductivity.vue')
      },
      {
        path: '/analytics',
        name: 'analytics',
        component: () => import('../views/analytics/Analytics.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
