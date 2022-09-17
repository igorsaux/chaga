import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faPlus,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";

import "./assets/base.css";

library.add(faTrash);
library.add(faPlus);
library.add(faClipboard);

const pinia = createPinia();
const app = createApp(App);

app.component("fa-icon", FontAwesomeIcon);
app.use(MotionPlugin);
app.use(pinia);
app.mount("body");
