import './style/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vue3SeamlessScroll from "vue3-seamless-scroll";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3SeamlessScroll);

app.mount('#app')
