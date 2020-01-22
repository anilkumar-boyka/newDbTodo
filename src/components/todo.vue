<template>
 <div>
 <template v-if="user.loggedIn">
            <h1>Welcome {{user.data.displayName}}{{user.uid}}</h1>
          </template>
     <h1 class="time">{{time()}}</h1>
     <h1>Keep Your Todo List Items Here</h1>
<div class="box">
    
    
<form class="item" @submit.prevent="add">
    
    <input class="text"v-model="newItem" required  placeholder="Add Item ">
    <button  class="add" type="submit.prevent">+</button><br>
  </form>
  <div>
  <ul>
      <li class="item"v-for="input in inputs">
          <input type="checkbox" v-model="input.done">
          <p class="showitem" v-bind:class={done:input.done}>{{input.title}}</p>
          <button class="remove"v-on:click="remove(input)"><i class="fas fa-trash-alt fa-2x"></i></button>
      </li>
  </ul>
  </div>
</div>
 </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
    name:'Todo',
    computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    }),

   
  },
    
    data()
    {   return{
           newItem:'',
           inputs:[],
           
               
        }     
            
    },
   

           
     methods:{


 getData() {
              var playersRef = firebase.database().ref("todoItems/");

    var item = [];

     var userName = this.user.data.displayName;

    playersRef.orderByChild("name").on("child_added", function(data) {
      //console.log(data.val().name);
      console.log(userName);
      if(data.val().name == userName){
      item.push({ title: data.val().title });
      //item = data.val().name;
    }
    });

    console.log(this.inputs);
    //this.inputs = [];

    item.forEach(element => {
        
      this.inputs.push({
        title: element.title,
        done: false
      });
    });




this.newItem='';
        },
        
         time:function(){
             var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
             return d;
         },
        add:function()
        {

            var userName = this.user.data.displayName;
            console.log("Hello" + this.user);

               
           
                alert("i am clicked..");
                var fref = firebase.database().ref();
                fref.child("todoItems").push({
                    title:this.newItem,
         name: userName
        
      });

                

                  var playersRef = firebase.database().ref("todoItems/");

    var item = [];

    playersRef.orderByChild("name").on("child_added", function(data) {
      //console.log(data.val().name);
      console.log(userName);
      if(data.val().name == userName){
      item.push({ title: data.val().title });
      //item = data.val().name;
    }
    });

    console.log(this.inputs);
    this.inputs = [];

    item.forEach(element => {
        
      this.inputs.push({
        title: element.title,
        done: false
      });
    });




this.newItem='';

            

            console.log("Your input is:"+this.inputs);

        },

        remove:function(input)
        { console.log("single op is:"+input);
          const inputIndex=this.inputs.indexOf(input);
          this.inputs.splice(inputIndex,1);

        }
    },

    created(){
      //  $this.http.get('https://login-66869.firebaseio.com/').then(function(data){
      //   console.log(data);
      // });
      var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
var titleRef = firebase.database().ref("todo/");

    titleRef.orderByChild("title").on("child_added", function(data) {
   console.log(data.val().title);
});
    }


}
    

</script>
<style scoped>

.done{
    text-decoration: line-through;
}

.item{
    min-height: 30px;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    font-family: 'Oxygen', sans-serif;
}

::placeholder
{
    color:grey;
    opacity: 1;
}
 .text{
     text-align: center;
     height: 60px;
     top:10px;
     font-size:30px;
     width:360px;
     border:none;
     outline: none;
     box-shadow:inset 0 -3px 0 0 #A683E3;
 }

 .box{
     max-width: 500px;
     margin:50px auto;
     background-color: white;
     border-radius: 5px;
     box-shadow:7px 17px 35px -5px rgba(0,0,0,0.3);
 } 
 .add{
     min-height: 50px;
     width:50px;
     border-radius: 50px;
     border-color: transparent;
     background-color: #A683E3;
     color:white;
     font-size:30px;
     padding-bottom: 6px;
     border-width:0;
     margin-left: 12px;

 }

 .showitem{
     margin-right:10px ;
     padding:20px 30px 10px 20px;
     font-size:20px;
     font-weight: 1100;
     color:#00204a;
     width:275px;
     font-family: 'Oxygen', sans-serif;
     font-size: x-large;
 }

 input[type="checkbox"]
 {
     margin: 20px;
 }

h1{
color:#A683E3;
text-align: center;
padding:30px;
opacity:0.9;
}
 .remove{
     margin-left: 350px;
     position: absolute;
     border:none;
     background-color:transparent;
     opacity:0.5;
      }

      .time{
          color:grey;
          text-align: left;
           opacity:0.6;
          
         
      }
</style>