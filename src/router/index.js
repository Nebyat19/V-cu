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
      component: () => import('../views/NewMoodView.vue'),
      props:true,
    },
    {
      path:'/memo',
      name:'memo',
      component: ()=> import ('../views/CalendarView.vue')
    },
    {
    path:'/add-detail',
    name:'add-detail',
    component:()=> import('../views/AddDetailView.vue'),
    props:true,
    
    },
    {
      path:'/user/profile',
      name:'profile',
      component:()=>import('../views/user/ProfileView.vue')
    },
    {
      path:'/stats',
      name:'stats',
      component:()=>import('../components/AnalyticsLayout.vue'),
      children:[
        {
          path:'/stats',
          name:'productivity',
          component:()=>import('../views/analytics/RecordProductivity.vue')
        },
        {
          path:'/analytics',
          name:'analytics',
          component:() => import('../views/analytics/Analytics.vue')

        }
      ]
    }
  ]
})

export default router
