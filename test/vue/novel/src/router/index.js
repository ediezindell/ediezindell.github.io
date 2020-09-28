import Vue from 'vue'
import VueRouter from 'vue-router'
import sanitizeHTML from 'sanitize-html';
import VueLoading from 'vue-loading-template'
Vue.prototype.$sanitize = sanitizeHTML;

Vue.use(VueRouter)
Vue.use(VueLoading)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "home",
    },
    props: false,
  },
  {
    path: '/index/:page',
    name: 'Home2',
    component: () => import('../views/Home.vue'),
    meta: {
      title: "home",
    },
    props: true,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue'),
    meta: {
      title: "edit",
    },
    props: true,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
    meta: {
      title: "detail",
    },
    props: true,
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
    meta: {
      title: "Not Found",
    },
    props: false,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(to)
    console.log(from)
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  console.log(from)
})

export default router
