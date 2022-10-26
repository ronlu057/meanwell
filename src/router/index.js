import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TwLogin from '../views/LoginView.vue'
import ForgotPassword from '../views/ForgotPasswordView.vue'
import SignUp from '../views/SignUpView.vue'
import SignUpSetPassword from '../views/SignUpSetPasswordView.vue'
import MemberCentre from '../views/MemberCentre.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: TwLogin
    },
    {
      path: '/ForgotPassword',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/SignUpSetPassword',
      name: 'SignUpSetPassword',
      component: SignUpSetPassword
    },
    {
      path: '/MemberCentre',
      name: 'MemberCentre',
      component: MemberCentre
    }
  ]
})

export default router
