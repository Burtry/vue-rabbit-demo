import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";
import { useUserStore } from "./user.js";
import { insertCartAPI, getCartListAPI, deleteCartAPI } from "../api/cart.js";
export const useCartStore = defineStore("cart", () => {
    const cartList = ref([]);
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)


    //更新购物车列表
    const updateCart = async () => {
        const res = await getCartListAPI()
        cartList.value = res.result
    }

    const addToCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            //登录的加入购物车逻辑
            await insertCartAPI({ skuId, count })
            updateCart()
        } else {
            // 添加逻辑
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count++
            } else {
                cartList.value.push(goods)
            }
        }


    }

    const delCart = async (skuId) => {
        if (isLogin.value) {
            //登录的删除购物车逻辑
            await deleteCartAPI([skuId])
            updateCart()

        } else {
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }

    }



    const allCount = computed(() => {
        return cartList.value.reduce((p, c) => p + c.count, 0)
    })

    const allPrice = computed(() => {
        return cartList.value.reduce((p, c) => p + c.count * c.price, 0)
    })

    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => skuId === item.skuId)
        if (item) {
            item.selected = selected
        }
    }

    //全选功能
    const checkAll = (selected) => {
        cartList.value.forEach((item) => {
            item.selected = selected
        })
    }

    //已选商品数量
    const selectedCount = computed(() => {
        return cartList.value.reduce((p, c) => p + (c.selected ? c.count : 0), 0)
    })

    //已选商品总价
    const selectedPrice = computed(() => {
        return cartList.value.reduce((p, c) => p + (c.selected ? c.count * c.price : 0), 0)
    })

    //是否全选
    const isAll = computed(() =>
        cartList.value.every((item) => item.selected))
    return {
        allCount,
        allPrice,
        cartList,
        addToCart,
        delCart,
        singleCheck,
        isAll,
        checkAll,
        selectedCount,
        selectedPrice,
        updateCart

    }
}, {
    persist: true
})