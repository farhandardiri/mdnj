import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './components/Ninjas.vue'
import VueResource from 'vue-resource'

// Vue.component('ninjas',Ninjas);
// export const bus = new Vue();
Vue.use(VueResource)

new Vue({
el: '#app',
render:h => h(App)
})
