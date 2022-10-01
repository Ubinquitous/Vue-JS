/* eslint-disable */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/data',
    name: 'data',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */'../views/DataBindingStringView.vue'),
  },
  {
    path: '/html',
    name: 'html',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */'../views/DataBindingHtmlView.vue'),
  },
  {
    path: '/input',
    name: 'input',
    component: () => import(/* webpackChunkName: "dataBinding", webpackPrefetch:true */'../views/DataBindingInputView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router