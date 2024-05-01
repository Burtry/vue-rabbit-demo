import { ref, onMounted } from "vue";
import { getBannerListAPI } from '@/api/home'
export function userBanner() {
    const bannerList = ref([])

    const getBannerData = async () => {
        const res = await getBannerListAPI({
            distributionSite: '2'
        })
        bannerList.value = res.result
    }
    onMounted(() => {
        getBannerData()
    })

    return { bannerList }
}