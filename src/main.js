import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './assets/styles.scss';


createApp(App).use(router).use(store).mount('#app')