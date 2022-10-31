import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TwLogin from '../views/LoginView.vue'
import ForgotPassword from '../views/ForgotPasswordView.vue'
import SignUp from '../views/SignUpView.vue'
import SignUpSetPassword from '../views/SignUpSetPasswordView.vue'
import MemberCentre from '../views/MemberCentre.vue'
import PersonalInformation from '../views/PersonalInformation.vue'
import MemberInformationEditing from '../views/MemberInformationEditing.vue'
import LoginSettings from '../views/LoginSettings.vue'
import ChangePassword from '../views/ChangePassword.vue'
import MembershipManagementMeasures from '../views/MembershipManagementMeasures.vue'
import ActivityListOngoing from '../views/ActivityListOngoing.vue'
import ActivityListOver from '../views/ActivityListOver.vue'
import ActivityListCancelled from '../views/ActivityListCancelled.vue'
import ActivitiesOngoing from '../views/ActivitiesOngoing.vue'
import ActivitiesOver from '../views/ActivitiesOver.vue'
import ActivitiesCancelled from '../views/ActivitiesCancelled.vue'
import EventTicketing from '../views/EventTicketing.vue';
import CancelRegistration from '../views/CancelRegistration.vue'
import VotesTaken from '../views/VotesTaken.vue'

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
    ,
    {
      path: '/PersonalInformation',
      name: 'PersonalInformation',
      component: PersonalInformation
    }
    ,
    {
      path: '/MemberInformationEditing',
      name: 'MemberInformationEditing',
      component: MemberInformationEditing
    }
    ,
    {
      path: '/LoginSettings',
      name: 'LoginSettings',
      component: LoginSettings
    }
    ,
    {
      path: '/ChangePassword',
      name: 'ChangePassword',
      component: ChangePassword
    }
    ,
    {
      path: '/MembershipManagementMeasures',
      name: 'MembershipManagementMeasures',
      component: MembershipManagementMeasures
    }
    ,
    {
      path: '/ActivityListOngoing',
      name: 'ActivityListOngoing',
      component: ActivityListOngoing
    }
    ,
    {
      path: '/ActivityListOver',
      name: 'ActivityListOver',
      component: ActivityListOver
    }
    ,
    {
      path: '/ActivityListCancelled',
      name: 'ActivityListCancelled',
      component: ActivityListCancelled
    }
    ,
    {
      path: '/ActivitiesOngoing',
      name: 'ActivitiesOngoing',
      component: ActivitiesOngoing
    }
    ,
    {
      path: '/ActivitiesOver',
      name: 'ActivitiesOver',
      component: ActivitiesOver
    }
    ,
    {
      path: '/ActivitiesCancelled',
      name: 'ActivitiesCancelled',
      component: ActivitiesCancelled
    }
    ,
    {
      path: '/EventTicketing',
      name: 'EventTicketing',
      component: EventTicketing
    }
    ,
    {
      path: '/CancelRegistration',
      name: 'CancelRegistration',
      component: CancelRegistration
    }
    ,
    {
      path: '/VotesTaken',
      name: 'VotesTaken',
      component: VotesTaken
    }
  ]
})

export default router
