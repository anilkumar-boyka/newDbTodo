<template>
  <div id="app">
    
      <navbar></navbar>
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        </div>
      </div>
</template>

<script>
import login from './components/login';
import navbar from './components/Navbar';

export default {
  name: 'App',
  components:{
     navbar,
    login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>




