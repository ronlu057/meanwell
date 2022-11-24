import { createApp } from 'vue'
import App from './index.vue'
import { createPinia } from 'pinia'
import router from './router'
import VueCookies from 'vue-cookies'

import './assets/tw_master.css'
import './assets/tw_main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
app.config.globalProperties.$cookies = VueCookies
