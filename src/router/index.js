import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Index from '@/pages/Index'

import SelfExam from '@/pages/SelfExam'

import StudentVoice from '@/pages/StudentVoice'
import CompanyNews from '@/pages/CompanyNews'
import NewsDetail from '@/pages/NewsDetail'

import CompanyProfile from '@/pages/CompanyProfile'
import ContactUs from '@/pages/ContactUs'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    }, 
    {
      path: '/home',
      name: 'home',
      component: Home
    },    
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/selfexam',
      name: 'selfexam',
      component: SelfExam
    },
    {
      path: '/studentvoice',
      name: 'studentvoice',
      component: StudentVoice,
    },
    {
      path: '/companynews',
      name: 'companynews',
      component: CompanyNews,
    },
    {
      path: '/newsdetail/:id',
      name: 'newsdetail',
      component: NewsDetail
    },
    {
      path: '/companyprofile',
      name: 'companyprofile',
      component: CompanyProfile
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs
    }
  ],
  linkActiveClass: 'active'
})
