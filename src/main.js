import Vue from "vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "bricki-css/dist/main";

Vue.use(Vuesax, {
  colors: {
    primary: "#80d2d8",
    success: "rgb(23, 201, 100)",
    danger: "rgb(242, 19, 93)",
    warning: "rgb(255, 130, 0)",
    dark: "#495057",
  },
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
