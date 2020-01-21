import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import Dashboard from '@/components/Dashboard'
import todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/login',
    	name:'login',
    	component:login
    },
    {
     path:'/register',
     name:'register',
     component:register
    },
    {
     path:'/dashboard',
     name:'dashboard',
     component:Dashboard
    },
    { path: '/user/:id',
     name:'todo', 
     component: todo
    },

    {
    	path: '/todo',
     name:'todo', 
     component: todo

    }
    
    


  ]
})
