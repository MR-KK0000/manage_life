import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    meta: { title: 'login'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {title:'home'}
  },
  {
    path: '/about',
    name: 'About',
    meta: {title: 'about'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
