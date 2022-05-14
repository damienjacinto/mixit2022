import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CssChallenge from '../views/CssChallenge.vue'
import CssSelectChallenge from '../views/CssSelectChallenge.vue'
import JsChallenge from '../views/JsChallenge.vue'
const routes = [
  {
    path: '/', name: 'Home', component: HomePage,
  },
  {
    path: '/cssSelect', name: 'CssSelectChallenge', component: CssSelectChallenge
  },
  {
    path: '/cssChallenge', name: 'CssChallenge', component: CssChallenge
  },
  {
    path: '/JsChallenge', name: 'JsChallenge', component: JsChallenge
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
