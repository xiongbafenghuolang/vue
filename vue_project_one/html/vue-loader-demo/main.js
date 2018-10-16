import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);
// 配置路由
const router =new VueRouter();

router.map({
    'Home':{
        component:Home
    },
    'News':{
        component:News
    }
})

// new Vue({
//     el:'body',
//     components:{
//         app:App
//     }
// })  