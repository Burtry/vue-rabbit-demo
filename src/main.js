
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/common.scss'
import { lazyPlugin } from '@/directives/lazyPlugin'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')