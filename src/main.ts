import naive from 'naive-ui'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(router).use(store).use(naive).mount('#app')