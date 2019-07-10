import './js/test';
import './scss/main.scss';

window.Vue = require('vue');
import store from './store';

Vue.component('example-component', require('./components/Example.vue').default);
Vue.component("header-component", require("./components/Header.vue").default);
Vue.component("main-component", require("./components/Main.vue").default);

const app = new Vue({
    store,
    el: "#app",
});