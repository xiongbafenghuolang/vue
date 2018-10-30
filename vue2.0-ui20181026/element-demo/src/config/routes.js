//加载模板文件 
import Home from '../components/Home'
import News from '../components/News'
//路由规则设置 
export default [ 
  { 
    path: '/', 
    component: Home 
  }, 
  { 
    path: '/list', 
    component: News 
  } 
] 