import httpInstance from '@/utils/http.js'


// 获取首页轮播图
export const getBannerListAPI = () => {
    return httpInstance.get('home/banner')
}

export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

export const getHotAPI = () => {
    return httpInstance.get('home/hot')
}

export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}