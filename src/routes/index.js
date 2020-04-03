/*
 * @Author:aaron
 * @Date: 2019-11-24 20:28:01
 * @LastEditTime : 2019-12-26 15:38:51
 * @LastEditors  : Please set LastEditors
 * @Description: 路由界面
 * @FilePath: /shiyi_website/src/routes/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'

Vue.use(Router)

const vueRouter = new Router({
  mode:"history",
  routes:[
    {path:"/", redirect:"/home"},
    {
      path:"/home",
      component:Home,
      children:[
        {path:'', name:"index",component: () => import('../pages/index/index.vue'), meta:{title:"首页"}},
      ]
    },
    {
      path:"/eatWhat",
      name:"eatWhat",
      component: () => import('../pages/eatWhat/index.vue'),
      meta:{
        title:"今晚吃啥"
      }
    },
    {
      path:"/feedBack",
      name:"feedBack",
      component: () => import('../pages/feedBack/index.vue'),
      meta:{
        title:"留言墙"
      }
    },
    {
      path:"/resume",
      name:"resume",
      component: () => import('../pages/resume/index.vue'),
      meta:{
        title:"简历"
      }
    },
    {
      path:"/work",
      name:"work",
      component: () => import('../pages/work/index.vue'),
      meta:{
        title:"简历"
      }
    },
  ]   
})
export default vueRouter