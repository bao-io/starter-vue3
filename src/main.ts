import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import 'uno.css'
import '@unocss/reset/tailwind-compat.css'

const pinia = createPinia()

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
