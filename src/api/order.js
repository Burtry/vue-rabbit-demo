import request from '@/utils/http'
// 创建订单
export const createOrderAPI = (data) => {
    return request({
        url: '/member/order',
        method: 'POST',
        data
    })
}

export const getOrderAPI = (id) => {
    return request({
        url: `/member/order/${id}`
    })
}