import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/children/:id',
    name: 'Children',
    component: () => import('@/views/Children.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('@/views/Edit.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
