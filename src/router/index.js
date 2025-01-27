import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Projects from '@/views/Projects'
import Interface from '@/views/Interface'
import Cases from '@/views/Cases'
import EditCase from '@/views/EditCase'
import Page404 from '@/views/Page404'

Vue.use(VueRouter)

// vue路由是从上往下匹配
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect:"/project",
    children: [
      {
        path: '/project',
        name: 'project',
        component: Projects
      },
      {
        path: '/interface',
        name: 'interface',
        component: Interface
      },
      {
        path: '/cases',
        name: 'cases',
        component: Cases
      },
      {
        path: '/cases/edit',
        name: 'editcase',
        component: EditCase
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/*',
    name: '404',
    component: Page404
  }
]

const router = new VueRouter({
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || window.sessionStorage.getItem('token')) {
    // 这里还可以鉴别token是否有效
    next()
  } else {
    next('/login')
  }
})

export default router
