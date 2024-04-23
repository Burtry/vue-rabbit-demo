import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { getCategoryAPI } from './api/category'
const app = createApp(App)
getCategoryAPI().then(res => {
    console.log(res);
})
app.use(createPinia())
app.use(router)

app.mount('#app')
