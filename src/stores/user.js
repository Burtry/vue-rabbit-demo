import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/api/user";
import { useCartStore } from "@/stores/cart";
import { mergeCartAPI } from "@/api/cart";



export const useUserStore = defineStore("user", () => {
    const userInfo = ref({})
    const cartStore = useCartStore()

    //获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        //合并购物车
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))

        cartStore.updateCart()
    }
    const removeUserInfo = () => {
        userInfo.value = {}
        console.log("清除成功!!")
        console.log(cartStore.cartList)
        cartStore.cartList = []


    }

    return {
        userInfo,
        getUserInfo,
        removeUserInfo
    }
}, {
    persist: true
})