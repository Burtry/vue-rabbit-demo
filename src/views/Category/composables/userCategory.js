import { getSubCategoryAPI } from "@/api/category.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from 'vue-router'

export function userCategory() {
    const route = useRoute()
    const categoryData = ref({})
    const getCategoryData = async (id = route.params.id) => {
        const res = await getSubCategoryAPI(id)
        console.log(res);
        categoryData.value = res.result
    }
    onMounted(() => {
        getCategoryData()
    })
    onBeforeRouteUpdate((to) => {
        getCategoryData(to.params.id)
    })

    return {
        categoryData
    }

}