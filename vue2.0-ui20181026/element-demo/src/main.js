import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// 引用路由插件 
import VueRouter from 'vue-router'
// 试用路由插件 
Vue.use(VueRouter) 
//引入路由配置文件 
import routes from './config/routes'

Vue.use(Element)

// 使用配置文件规则 
const router = new VueRouter({ 
  mode: 'history', 
  base: __dirname, 
  routes: routes 
})
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const app = new Vue({ 
  router: router, 
  render: h => h(App) 
}).$mount('#app')
 
