import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './components/Ninjas.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

// Vue.component('ninjas',Ninjas);
// export const bus = new Vue();
// ---

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
routes:Routes
})
// awal filter

Vue.filter('snipped', function(value){
    return value.slice(0,100) + '...';
})
// akhir filter

//awal vue directive

// Vue.directive('theme',{
//     bind(el, binding, vnode){
//         if(binding.value=='wide'){
//             el.style.maxWidth='1200px';
//         }else if(binding.value=='narrow'){
//             el.style.maxWidth='560px';
//         }
//         if (binding.arg == 'column'){
//             el.style.background='#ddd';
//             el.style.padding='20px';
//         }
//     }
// })
// akhir vue directive

new Vue({
el: '#app',
render:h => h(App),
router : router
})
