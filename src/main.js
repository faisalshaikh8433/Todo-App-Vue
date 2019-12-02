import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import routes from "./routes";
import Vuex from "vuex";
import VueRouter from "vue-router";

import "./styles/tailwind.css";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  store: new Vuex.Store(store),
  router,
  render: h => h(App)
}).$mount("#app");
