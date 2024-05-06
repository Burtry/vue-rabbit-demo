
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/common.scss'
import { lazyPlugin } from '@/directives/lazyPlugin'
import { componentsPlugins } from "@/components/index";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugins)

app.mount('#app')