import httpInstance from '@/utils/http.js'


// 获取首页轮播图
export const getBannerListAPI = () => {
    return httpInstance.get('home/banner')
}