import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import App from "./App.vue";
import "uno.css";
import "@unocss/reset/tailwind-compat.css";

const pinia = createPinia();
const router = createRouter({ routes, history: createWebHistory() });

const app = createApp(App);
app.use(router).use(pinia).mount("#app");
