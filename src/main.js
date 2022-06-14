import Vue from 'vue'
import App from './App.vue'

import "./assets/index.scss"

import VueLazyTree from "./components/tree.vue";
Vue.component('VueLazyTree', VueLazyTree)
console.log(Vue)
new Vue({
    el: '#app',
    render: h => h(App)
})