import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './app/App.vue';
import router from './app/router';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount('#root');
