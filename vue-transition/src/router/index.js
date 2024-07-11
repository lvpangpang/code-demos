import Vue from 'vue'
import VueRouter from 'vue-router'
import A from '@/views/a'
import B from '@/views/b'
import C from '@/views/c'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: A,
    meta: {
      index: 0
    }
  },
  {
    path: '/b',
    component: B,
    meta: {
      index: 1
    }
  },
  {
    path: '/c',
    component: C,
    meta: {
      index: 2
    }
  }
]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
})

export default router
