import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Skills from '../views/Skills.vue'
import SkillDetails from '../views/SkillDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: () => import('../views/ProjectDetails.vue'),
    props: true
  },
  {
    path: '/testimonials',
    name: 'Testimonial',
    component: () => import('../views/Testimonial.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/skills/:id',
    name: 'SkillDetails',
    component: () => import('../views/SkillDetails.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
