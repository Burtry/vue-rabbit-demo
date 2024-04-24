
import { createApp } from 'vue'
import { createPinia } from 'pinia'
//导入css文件
import './style/common.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
