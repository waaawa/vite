import { createApp } from 'vue';
import router from '@router';
import App from './App';
import 'css-doodle';
import '@style/tailwind.css';
import '@style/global.css';
// import store from './store';

createApp(App).use(router).mount('#app');
