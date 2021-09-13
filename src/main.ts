import { createApp } from 'vue';
import router from '@router/index';
import App from './App';
import 'css-doodle';
import '@style/tailwind.css';
import '@style/global.css';
// import store from './store/index'

createApp(App).use(router).mount(document.getElementById('app')!);
