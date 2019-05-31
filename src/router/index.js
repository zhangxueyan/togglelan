import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import SelfExam from '@/pages/SelfExam'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/',
      name: 'selfexam',
      component: SelfExam
    }
  ]
})
