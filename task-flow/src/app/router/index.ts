import { createRouter, createWebHistory } from 'vue-router'

import { AuthService } from '@task-flow/data-access'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('../views/AuthView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  //TODO: Implementar um Dependency Injection
  const authService = new AuthService();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authService.isAuthenticated()) {
      next()
    } else {
      next('/auth')
    }
  } else {
    next()
  }
});

export default router
