import type { Router } from 'vue-router'

export function setupRouterGuards(router: Router) {
  router.beforeEach((to, _from, next) => {
    console.log('Navigating:', to.fullPath)

    next()
  })
}