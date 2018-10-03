import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Skill from '@/pages/Skill'
import Portofolio from '@/pages/Portofolio'
import Contact from '@/pages/Contact'
import UnderConstruction from '@/pages/UnderConstruction'
import Sample from '@/pages/Sample'

Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: UnderConstruction
    },
    {
      path: '/skills',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/portfolio',
      name: 'My Works',
      component: Portofolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
