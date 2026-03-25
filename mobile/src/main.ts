import { FlyApi } from '@/services/FlyApi';
import { System } from '@/services/System';
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

window.flyApi = new FlyApi();
window.system = new System();

createApp(App).mount('#app')
