import { createRouter, createWebHistory } from 'vue-router'

import { AuthService } from '@task-flow/data-access'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
        path: '',
        name: '',
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
      next('/login')
    }
  } else {
    next()
  }
});

export default router
