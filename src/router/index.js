import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Issues from '../views/Issues.vue'
import CampaignSignUp from '../views/CampaignSignUp.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/issues',
    name: 'Issues',
    component: Issues
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/Issues.vue')
  },
  {
    path: '/organize',
    name: 'CampaignSignUp',
    component: CampaignSignUp
  },
  {
    path: '/*',
    name: '',
    component: 404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})

export default router

