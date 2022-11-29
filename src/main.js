import { createApp } from 'vue';
import App from './index.vue';
import { createPinia } from 'pinia';
import router from './router';
import VueCookies from 'vue-cookies';
import { createI18n } from 'vue-i18n';
import tw from './lang/tw.json';
import en from './lang/en.json';
import cn from './lang/cn.json';
import './assets/tw_master.css'
import './assets/tw_main.css'

const pinia = createPinia();
const i18n = createI18n({
    legacy: false,
    locale: "tw",
    fallbackLocale: "tw",
    messages: {
        "tw": tw,
        "en": en,
        "cn": cn
    }
});
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n).mount('#app')
app.config.globalProperties.$cookies = VueCookies
