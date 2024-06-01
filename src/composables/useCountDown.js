import { computed, ref } from 'vue';
import dayjs from 'dayjs';




export const useCountDown = () => {
    const time = ref(0)
    const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"))
    const start = (currentTime) => {
        // 倒计时逻辑
        time.value = currentTime
        setInterval(() => {
            time.value--;
        }, 1000);
    }

    return {
        start,
        formatTime
    }

}