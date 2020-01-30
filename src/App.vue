<template>
  <div>
    

    
  <div id="app">
    
      <navbar></navbar>

      
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        </div>
            <div>
              <footer>© 2020 Egyanam Technologies Private Limited. All rights reserved.
                <br>Follow Us On
                <span><i class="fab fa-facebook-f fa-lg white-text fa-1x"> </i></span>
                <span><i class="fab fa-linkedin-in fa-lg white-text fa-1x"> </i></span>
                <span><i class="fab fa-instagram fa-lg white-text fa-1x"> </i></span>
              </footer>
            </div>       

    
         
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
  margin-top: 30px;
  // background-color:#f1f1f6;
  

  
}
footer{
  color:white;
  background-color:black;
  padding: 20px 20px 30px 20px;
  margin-top:220px;

}
.fab{
  margin-left:10px;
}


</style>




