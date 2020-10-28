import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PageIndex from '@/views/PageIndex.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: PageIndex
  }
]

const router = new VueRouter({
  routes
})

export default router
