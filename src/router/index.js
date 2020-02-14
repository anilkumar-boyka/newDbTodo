import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import Dashboard from '@/components/Dashboard'
import todo from '@/components/todo'
import visualization from '@/components/visualization'
import firebase from 'firebase'

Vue.use(BootstrapVue)

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path:'*',
      riderect:'/'

    },
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
      path:'/chartData',
      name:'characterData',
      component:visualization
    },

    {
    	path: '/todo',
     name:'todo', 
     component: todo,
     meta:{
     	requiresAuth:true
     }

    }
    
    ]
})
   router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

   if (requiresAuth && !currentUser ) next('login');
  else if (!requiresAuth && currentUser) next('todo');
  else next();
});

   export default router;