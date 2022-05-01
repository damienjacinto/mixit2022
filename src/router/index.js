import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CssChallenge from '../views/CssChallenge.vue'
const routes = [
  {
    path: '/', name: 'Home', component: HomePage,
  },
  {
    path: '/css', name: 'CssChallenge', component: CssChallenge
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
