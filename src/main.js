import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import keys from "./keys/firebaseKeys.js";

Vue.use(VueResource);

Vue.http.options.root = `${keys.url}`;
Vue.http.interceptors.push((request, next) => {
  // console.log(request);
  // if (request.method === "POST") {
  //   request.method = "PUT";
  // }

  console.log(request);

  next();
});

new Vue({
  el: "#app",
  render: h => h(App)
});
