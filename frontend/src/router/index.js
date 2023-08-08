import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUsView from '../views/ContactUsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/practise',
    name: 'practise',
    component: () => import( '@/views/PractiseAreasView.vue')
  },
  {
    path: '/attorneys',
    name: 'attorneys',
    component: () => import( '@/views/TeamView.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
