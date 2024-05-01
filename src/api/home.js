import httpInstance from '@/utils/http.js'


// 获取首页轮播图
export const getBannerListAPI = (params = {}) => {

    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
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