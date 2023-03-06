import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Foods from '../views/Foods.vue'
import Ingredients from '../views/Ingredients.vue'
import LocalCulinary from '../views/LocalCulinary.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/Foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/Ingredients/:title',
    name: 'Ingredients',
    component: Ingredients
  },
  {
    path: '/LocalCulinary/:id',
    name: 'LocalCulinary',
    component: LocalCulinary
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router