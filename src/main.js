import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { createPinia, PiniaVuePlugin } from "pinia";

import App from "./App.vue";

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(PiniaVuePlugin);

new Vue({
    pinia: createPinia(),
    render: (h) => h(App),
}).$mount("#app");
