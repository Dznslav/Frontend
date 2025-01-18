import Dashboard from '@/views/Dashboard.vue'
import LandingPage from '@/views/LandingPage.vue'
import MoodRecordPage from '@/views/MoodRecordPage.vue'
import History from '@/views/History.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/addmood',
      name: 'MoodRecordPage',
      component: MoodRecordPage,
    },
    {
      path: '/history',
      name: 'History',
      component: History,
    },

  ],
})

export default router
