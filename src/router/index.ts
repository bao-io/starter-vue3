import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
    },
  ],
  history: createWebHistory(),
})
