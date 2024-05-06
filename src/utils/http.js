import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/user";
import router from '@/router';


// 创建axios实例
const instance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// axios请求拦截器
instance.interceptors.request.use(config => {
    const userStore = useUserStore()

    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
instance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    ElMessage({ message: e.response.data.message, type: 'error' })
    //401处理
    if (e.response.status === 401) {
        userStore.removeUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})


export default instance