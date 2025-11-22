import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Swiper 스타일 불러오기
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const app = createApp(App)

app.use(router)

app.mount('#app')
