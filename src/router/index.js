import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Layout from '@/components/layout'
import Home from '@/components/content/home'
import Express from '@/components/content/express'
import Resource from '@/components/content/resource'
import List from '@/components/content/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/layout/home',
          name: 'cms.home',
          component: Home
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: '/layout/express',
          name: 'cms.express',
          component: Express,
          children: [
            {
              path: '/layout/express/taba',
              name: 'cms.express.taba',
              component: Home
            },
            {
              path: '/layout/express/tabb',
              name: 'cms.express.tabb',
              component: Resource
            }
          ]
        },
        {
          path: '/layout/resource',
          name: 'cms.resource',
          component: Resource
        },
        {
          path: '/layout/list',
          name: 'cms.list',
          component: List
        }
      ]
    }
  ]
})
