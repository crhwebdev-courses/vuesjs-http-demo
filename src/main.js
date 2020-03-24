import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import keys from "./keys/firebaseKeys.js";

Vue.use(VueResource);

Vue.http.options.root = `${keys.url}/data.json`;

new Vue({
  el: "#app",
  render: h => h(App)
});
