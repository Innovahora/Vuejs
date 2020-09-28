import { isAuthenticated } from '@/utils/auth'

export default function middlewareAuth (to, from, next) {
  if (/*!isAuthenticated()*/false) {
    next({
      path: '/ingresar',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
