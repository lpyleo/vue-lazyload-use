import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue3-lazy'

createApp(App)
    .use(VueLazyload, {
        error: require('./assets/imgs/fail.jpeg'),// 图片加载失败时默认图片
        loading: require('./assets/imgs/loading.gif'), // 图片加载时默认图片
    })
    .mount('#app')
