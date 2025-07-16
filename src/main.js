import './assets/main.css'
import AOS from 'aos'
import { createApp } from 'vue'
import App from './App.vue'
import 'aos/dist/aos.css'
createApp(App).mount('#app')
// Initialiser AOS
AOS.init()