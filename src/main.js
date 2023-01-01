import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import './assets/main.css'

const app = createApp(App);
import "bootstrap-icons/font/bootstrap-icons.css";

app.use(createPinia());
app.use(router);

app.mount("#app");
