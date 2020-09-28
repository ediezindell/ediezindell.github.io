import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Tools from '../views/Tools.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
  },
]

const router = new VueRouter({
  routes
})

export default router
