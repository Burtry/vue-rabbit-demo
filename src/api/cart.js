import instance from "@/utils/http"

export const insertCartAPI = ({ skuId, count }) => {
    return instance({
        url: "/member/cart",
        method: "post",
        data: {
            skuId,
            count
        }

    })
}

export const getCartListAPI = () => {
    return instance({
        url: "/member/cart"
    })
}


// 删除购物车商品
export const deleteCartAPI = (ids) => {
    return instance({
        url: `/member/cart`,
        method: "delete",
        data: {
            ids
        }
    })
}

//合并购物车

export const mergeCartAPI = (data) => {
    return instance({
        url: "/member/cart/merge",
        method: "post",
        data
    })
}