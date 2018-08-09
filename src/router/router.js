import Vue from 'vue'
import Router from 'vue-router'
import Home from 'app/components/home/home'
// import About from '@/components/About'
// import Skill from '@/components/Skill'
// import Portofolio from '@/components/Portofolio'
// import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About 
    // }, 
    // {
    //   path: '/skills',
    //   name: 'Skill',
    //   component: Skill 
    // }, 
    // {
    //   path: '/portfolio',
    //   name: 'My Works',
    //   component: Portofolio 
    // }, 
    // {
    //   path: '/contact',
    //   name: 'Contact',
    //   component: Contact 
    // }
  ]
})