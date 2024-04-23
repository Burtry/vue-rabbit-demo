import instance from "@/utils/http"


export function getCategoryAPI() {
    return instance.get("home/category/head")
}
