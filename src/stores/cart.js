import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";
export const useCartStore = defineStore("cart", () => {
    const cartList = ref([]);

    const addToCart = (goods) => {
        // 添加逻辑
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count++
        } else {
            cartList.value.push(goods)
        }
    }

    const delCart = async (skuId) => {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
    }

    const allCount = computed(() => {
        return cartList.value.reduce((p, c) => p + c.count, 0)
    })

    const allPrice = computed(() => {
        return cartList.value.reduce((p, c) => p + c.count * c.price, 0)
    })
    return {
        allCount,
        allPrice,
        cartList,
        addToCart,
        delCart
    }
}, {
    persist: true
})