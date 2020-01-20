<template>
<div>
     <h1>Registration Page</h1>
<div class="row">
    <div class="col-sm-8">
      <div class="card">
        <div class="card-body">

          <!-- Makes POST request to /register route -->
          <form action="/register" method="POST">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" name="username">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" name="password">
            </div>
            <button type="submit" class="btn btn-dark">Register</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import firebase from 'firebase';


export default{
  name:'login',
  data(){
   return{
   username:'',
   password:''

   }
  },
  methods:{
      login()
      {

      }
  }
}
</script>


   <style scoped>
   h1{
    text-align:left;
    padding:30px;
   }


    </style>
 