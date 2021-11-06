import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import io from 'socket.io-client';

const app =  createApp(App);
app.config.globalProperties.$soketio = io(`${process.env.VUE_APP_SERVER_SOCKET_IO_ENDPOINT}:${process.env.VUE_APP_SERVER_SOCKET_IO_ENDPOINT_PORT}`);
app.use(store).use(router).mount('#app')
