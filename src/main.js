import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import '../node_modules/@themesberg/flowbite/dist/flowbite.bundle.js';


const app = createApp(App)

app.use(router)

app.mount('#app')
