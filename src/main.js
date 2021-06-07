import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./routers/index";
import store from "./store/index";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
