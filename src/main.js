import { createApp } from 'vue'
import App from './index.vue'
import router from './router'

import './assets/tw_master.css'
import './assets/tw_main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
