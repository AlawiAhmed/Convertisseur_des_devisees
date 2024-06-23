import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' }
  },
 
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: 'About Page' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Set page title dynamically
router.beforeEach((to, from, next) => {
  const defaultTitle = 'Default Title'; // Default title if no meta title is set
  document.title = to.meta.title || defaultTitle;
  next();
})

export default router
