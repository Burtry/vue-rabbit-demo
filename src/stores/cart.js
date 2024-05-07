import { defineStore } from "pinia";
import { ref } from "vue";
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
    return {
        cartList,
        addToCart
    }
}, {
    persist: true
})