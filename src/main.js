import app from "./App.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store/index";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(app),
  store,
  router: router
}).$mount("#vue_app");
