import instance from "@/utils/http"


export function getCategoryAPI() {
    return instance.get("home/category/head")
}

//获取二级分类
export function getSubCategoryAPI(id) {
    return instance({
        url: '/category',
        params: {
            id
        }
    })
}

//获取二级分类列表数据
export function getCategoryFilterAPI(id) {
    return instance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}