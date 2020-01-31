<template>
  <div class="hello">
    <div class="mainContent">
      <!-- Keep list of items -->
     
 <!-- <img src="../assets/eg.jpg"> -->
 <img class="eg"src="../assets/eg.jpg"></div>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mainContent{
  height:240px;

  // background-color:green;
}
.eg{
   align:left;
   padding-right:1000px;
}
</style>

