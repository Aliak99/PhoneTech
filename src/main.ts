import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

createApp(App).mount("#app");

const app = createApp(App);

app.provide("API_URL", "https://restapi.fr/api");
