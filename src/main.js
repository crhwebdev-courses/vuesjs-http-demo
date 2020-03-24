import Vue from "vue";
import App from "./App.vue";

Vue.use(VueResource);

new Vue({
  el: "#app",
  render: h => h(App)
});
