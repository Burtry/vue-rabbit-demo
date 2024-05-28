import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/api/user";
import { useCartStore } from "@/stores/cart";




export const useUserStore = defineStore("user", () => {
    const userInfo = ref({})
    const cartStore = useCartStore()

    //获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
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