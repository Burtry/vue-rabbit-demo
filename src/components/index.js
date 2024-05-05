import ImageView from './ImageView/index.vue'
import SkuView from './XtxSku/index.vue'


export const componentsPlugins = {
    install: (app) => {
        app.component('ImageView', ImageView)
        app.component('SkuView', SkuView)
    }
}