import Vue from 'vue'
import VueRouter from 'vue-router'
import sanitizeHTML from 'sanitize-html';

Vue.prototype.$sanitize = sanitizeHTML;

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/index/:page',
    name: 'Home2',
    component: () => import('../views/Home.vue'),
    props: true,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue'),
    props: true,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router
