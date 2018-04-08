import Vue from 'vue'//导入vue
import Router from 'vue-router'//导入路由
import Index from '@page'//导入page
import teaSchool from '@page/school'//导入首页组件
  import Detail from '@page/school/detail'//导入详情组件
import Franchis from '@page/franchis'//导入加盟圈组件
import Goods from '@page/goods'//导入购物组件
import My from '@page/my'//导入我的组件
import Login from '@page/account/login'//导入登录组件
import Register from '@page/account/register'//导入注册组件
import Backps from '@page/account/backps'//导入找回组件
import Reset from '@page/account/reset'//导入重置组件
Vue.use(Router)//注入路由
let routes = [
  
    {
      path: '/',
      redirect: '/',
      component: Index,
      children: [
        {
          path: '/',
          name: 'teaSchool',
          component: teaSchool,
          meta: { navShow: true },
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail 
        }
      ]
    },
    {
      path: '/franchis',
      name: 'Franchis',
      component: Franchis,
      meta: { navShow: true }
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods,
      meta: { navShow: true }
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta: { navShow: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/reset',
      name: 'Reset',
      component: Reset
    },
    {
      path: '/backps',
      name: 'Backps',
      component: Backps
    }
    
]

const router = new Router({
  mode: 'hash',
  // base: __dirname,
  routes
})

export default router
