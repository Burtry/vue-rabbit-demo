import instance from "@/utils/http"

export function getDetailAPI(id) {
    return instance({
        url: "/goods",
        method: "get",
        params: {
            id
        }
    })
}