<template>
 <div>
   <!-- <template v-if="user.loggedIn">
     <Visualization/>
     
   </template> -->
     <template v-if="user.loggedIn"><h1 class="time">{{time()}}</h1>
       <h1><b-badge>Welcome {{user.data.displayName}}</b-badge></h1>
     </template>
     
     <h2><b-badge>Keep Your Todo List Items Here</b-badge></h2>
     
     <div class="mainDiv">
     <b-card>
     <!-- <div class="box"> -->
    
    
       <form class="item" @submit.prevent="add">
        <input class="text"v-model="newItem" required  placeholder="Add Item ">
        <button  class="add" type="submit.prevent">+</button><br>

       </form>
       <div>
         <ul>
          <li class="item"v-for="input in inputs">
              <input type="checkbox" v-model="input.done" v-on:click="checkbox(input)">
              <p class="color" v-on:click="chooseColor(input,'green')"><i class="fas  fa-circle fa-0.2x green"></i></p>

              <p class="color"v-on:click="chooseColor(input,'blue')"><i class="fas fa-circle blue"></i></p>

              <p class="color"v-on:click="chooseColor(input,'pink')"><i class="fas fa-circle pink"></i></p>
              <span class="showitem" v-bind:class={done:input.done,greenBg:input.greenBg,blueBg:input.blueBg,pinkBg:input.pinkBg}>{{input.title}}</span>
              <button class="remove"v-on:click="remove(input)"><i class="fas fa-trash-alt fa-2x"></i></button>
          </li>
         </ul>
       <!-- </div> -->
     </div></b-card></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
// import chart from './Chart';
// import chart from './components/Chart';
import Visualization from './visualization.vue';
export default {
    name:'Todo',
    components:{
  
    Visualization
  },
   
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


//  getData() {
//               var playersRef = firebase.database().ref("todoItems/");

//     var item = [];

//      var userName = this.user.data.displayName;

//     playersRef.orderByChild("name").on("child_added", function(data) {
//       //console.log(data.val().name);
//       console.log(userName);
//       if(data.val().name == userName){
//       item.push({ title: data.val().title });
//       //item = data.val().name;
//     }
//     });

//     console.log(this.inputs); 
//     //this.inputs = [];

//     item.forEach(element => {
        
//       this.inputs.push({
//         title: element.title,
//         done: false
//       });
//     });




// this.newItem='';
//         },
        
         time:function(){
             var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
             return d;
         },
         choose:function(){
            alert("hello");
         },

         chooseColor:function(input,color)
         {
          console.log("hello color");
          console.log("color is"+color);
          console.log(input);
         
          
        
          if(color=='green')
          {
              input.greenBg='true';
              // input.pinkBg='true';
              console.log("final input data...");
            console.log(input);
           
            input.pinkBg=!input.greenBg;
            input.blueBg=!input.greenBg;
            var todoRef = firebase.database().ref("todoItems/"); 
            todoRef.on("value", function(snapshot) {

                      var length=Object.keys(snapshot.val()).length;

                          console.log("inside name and id is...");
                          console.log(Object.keys(snapshot.val())[2]);
                          // console.log(Object.values(snapshot.val())[2].name);
                          // console.log(Object.values(snapshot.val())[2].title);
                          console.log(input.title);

                      console.log("inside checkBox....");
                      console.log(Object.keys(snapshot.val()));



                        console.log("length is "+length);
                        for(var i=0;i<length;i++)
                        {
                          if(input.title==Object.values(snapshot.val())[i].title){
                          var db = firebase.database();
                          // db.ref("todoItems/"+Object.keys(snapshot.val())[i]+"/greenBg/").set(input.greenBg,input.blueBg);

                          db.ref("todoItems/"+Object.keys(snapshot.val())[i]).update({
                            greenBg:input.greenBg,blueBg:!input.greenBg ,pinkBg:!input.greenBg});


                          break;
                         
                          }                          
                       }
                       // var db = firebase.database();
                       // db.ref("todoItems/-LzlNSYqRLcS0mwsClsV").update({blueBg:!input.greenBg ,pinkBg:!input.greenBg});

            });


          }
          else if(color=='blue')
          {
            console.log("pink bg was..");

            console.log(input.pinkBg);
            console.log('green bg was..');
            console.log(input.greenBg);
            
            console.log("color selected is"+color);
            input.blueBg='true';
            console.log("final input data...");
            console.log(input);
             // if(input.pinkBg=='true'||input.greenBg=='true')
             // {
             //    console.log("inside blue if..");
              input.pinkBg=!input.blueBg;
              input.greenBg=!input.blueBg;

              var todoRef = firebase.database().ref("todoItems/"); 
            todoRef.on("value", function(snapshot) {

                      var length=Object.keys(snapshot.val()).length;

                          console.log("inside name and id is...");
                          console.log(Object.keys(snapshot.val())[2]);
                          // console.log(Object.values(snapshot.val())[2].name);
                          // console.log(Object.values(snapshot.val())[2].title);
                          console.log(input.title);

                      console.log("inside checkBox....");
                      console.log(Object.keys(snapshot.val()));



                        console.log("length is "+length);
                        for(var i=0;i<length;i++)
                        {
                          if(input.title==Object.values(snapshot.val())[i].title){
                          var db = firebase.database();
                          // db.ref("todoItems/"+Object.keys(snapshot.val())[i]+"/blueBg").set(input.blueBg);
                          db.ref("todoItems/"+Object.keys(snapshot.val())[i]).update({
                            greenBg:!input.blueBg,blueBg:input.blueBg ,pinkBg:!input.blueBg});
                          break;
                         
                          }                          
                       }

            });



            
          }
          else if(color=='pink'){
            
            console.log("color selected is"+color);
            input.pinkBg='true';
            console.log('after click on pink..');
          console.log(input.pinkBg);
          console.log("final input data...");
            console.log(input);
            // if(input.greenBg=='true'||input.blueBg=='true')
            // {
            //   console.log("inside pink if..");
              input.greenBg=!input.pinkBg;
              input.blueBg=!input.pinkBg;
            // }
            var todoRef = firebase.database().ref("todoItems/"); 
            todoRef.on("value", function(snapshot) {

                      var length=Object.keys(snapshot.val()).length;

                          console.log("inside name and id is...");
                          console.log(Object.keys(snapshot.val())[2]);
                          // console.log(Object.values(snapshot.val())[2].name);
                          // console.log(Object.values(snapshot.val())[2].title);
                          console.log(input.title);

                      console.log("inside checkBox....");
                      console.log(Object.keys(snapshot.val()));
                      console.log();


                        console.log("length is "+length);
                        for(var i=0;i<length;i++)
                        {
                          if(input.title==Object.values(snapshot.val())[i].title){
                          var db = firebase.database();
                          db.ref("todoItems/"+Object.keys(snapshot.val())[i]+"/pinkBg").set(input.pinkBg);
                          break;
                         
                          }                          
                       }

            });



          }

         },

         checkbox:function(input)
         {
             var currentUser=this.user.data.displayName;
             console.log("currentUser is"+currentUser);
             var cc;


            console.log("check box input is....");
            console.log(input.done);
            console.log(input);
            console.log(!input.done);
            var todoRef = firebase.database().ref("todoItems/");



            todoRef.on("value", function(snapshot) {

                      var length=Object.keys(snapshot.val()).length;

                          console.log("inside name and id is...");
                          console.log(Object.keys(snapshot.val())[2]);
                          // console.log(Object.values(snapshot.val())[2].name);
                          // console.log(Object.values(snapshot.val())[2].title);
                          console.log(input.title);

                      console.log("inside checkBox....");
                      console.log(Object.keys(snapshot.val()));



                        console.log("length is "+length);
                        for(var i=0;i<length;i++)
                        {
                          if(input.title==Object.values(snapshot.val())[i].title){
                          var db = firebase.database();
                          db.ref("todoItems/"+Object.keys(snapshot.val())[i]+"/done").set(!input.done);
                          break;
                         
                          }                          
                       }

            });

            // var db = firebase.database();
            // db.ref("todoItems/-LzWDdoDXZ3UzfpdBr7T/done").set(!input.done);
 
               












         },
        add:function()
        {
          

            var userName = this.user.data.displayName;
            console.log("Hello" + this.user.data.displayName);

               
           
                alert("i am clicked..");
                var fref = firebase.database().ref();
                fref.child("todoItems").push({
                  title:this.newItem,
                  name: userName,
                  done:false,
                  greenBg:false,
                  blueBg:false,

                  pinkBg:false
        
      });

                
       //changes23
                  var playersRef = firebase.database().ref("todoItems/");

    var item = [];

    playersRef.orderByChild("name").on("child_added", function(data) {
      //console.log(data.val().name);
      console.log("user name is"+userName);
      if(data.val().name == userName){

      item.push({ title: data.val().title,done:data.val().done,greenBg:data.val().greenBg,blueBg:data.val().blueBg,pinkBg:data.val().pinkBg
       });
      //item = data.val().name;
      console.log("items here are.."+item);

    }
    });

    
    this.inputs = [];

    item.forEach(element => {
        
      this.inputs.push({
        title: element.title,
        done: element.done,
        greenBg:element.greenBg,
        blueBg:element.blueBg,

        pinkBg:element.pinkBg
      });
    });
      
      // console.log("green bg values");
      // this.inputs.forEach(element=>
      // {console.log("inputttttsss .."+element.greenBg);
      //   });

    


 this.newItem='';

            

            console.log("Your input is:"+this.inputs);

             // location.reload();
             

               
        },

        remove:function(input)

        {   var  vm=this;  
              console.log("input id is..");
              console.log(input);
              console.log(input.title);

           //remove key
           var playersRef = firebase.database().ref("todoItems/");

           // console.log("keys....");

           //    playersRef.orderByKey().on("child_added", function(data) {
           //       console.log(data.key);

           //       vm.keyItems.push(data.key);
           //       console.log("name according to key..");
           //       console.log(data.key.name);

                 // console.log("key in this.keys are..."+vm.keyItems);
                 

                 
              // });
              //remove logic starts here

                playersRef.on("value", function(snapshot) {

                      var length=Object.keys(snapshot.val()).length;

                        console.log("length is "+length);
                        for(var i=0;i<length;i++)

                        {
               if(input.title==Object.values(snapshot.val())[i].title)
               {
                    console.log("both are same....");

                    var removeRef = firebase.database().ref("todoItems/");
                     removeRef.child(Object.keys(snapshot.val())[i]).remove();
                






               }
               else
                {console.log("not same....");}
            }
                 

            });//remove logic ends here


           //      playersRef.on("value", function(snapshot) {
           //              console.log("all data");
                         
           //                 console.log("before parsing...");
           //                 console.log(snapshot);
                          
           //                var length=Object.keys(snapshot.val()).length;

           //                console.log("length is "+length);
                           
           //                 // console.log(Object.values(snapshot.val())[6].title);

           //                 console.log("snapshot.name");
           //                 console.log(snapshot.val());
           //              //     console.log("after parsing...");


           //              // JSON.parse(JSON.stringify(snapshot.val()));
           //              //  console.log(snapshot.val());
           //              //  console.log("each title..");
           //              //  // console.log(todoItems);
                        

           //            }, function (error) {
           //               console.log("Error: " + error.code);
           //            });
           
     
           //   //by name
           // // var playersRef = firebase.database().ref("todoItems/");

           // //      playersRef.orderByChild("key").on("child_added", function(data) {
           // //        console.log("child");
           // //         console.log(data.val().key);
           // //      });


                 

























                    
           




























          // console.log("single op is:"+input.title);
          //deletion

          // console.log(e.title);
          // console.log(input);

               var removeRef = firebase.database().ref("todoItems/");
               removeRef.child(1).remove();
               console.log("removing");
               console.log("removed")

    
          

          const inputIndex=this.inputs.indexOf(input);
          this.inputs.splice(inputIndex,1);
            //           setTimeout(function () {
            //     location.reload();
            // }, 8000)

          


        },

    
         //  $this.http.get('https://login-66869.firebaseio.com/').then(function(data){
      //   console.log(data);
      // });

      

    //loads dom initiall
    start:function(){

        var vm=this;
        console.log("hello mounted......");
        var userName = this.user.data.displayName;
        console.log("Hello" + this.user.data.displayName);
      

        var titleRef = firebase.database().ref("todoItems/");

        titleRef.orderByChild("title").on("child_added", function(data) {

          if(data.val().name == userName){
             console.log(" inside if data is"+data.val().title);
             console.log("match found");
             var oldItems=[{title:data.val().title,done:data.val().done,greenBg:data.val().greenBg,blueBg:data.val().blueBg,pinkBg:data.val().pinkBg}];
             
             console.log("fetched items from db are:"+oldItems);
             console.log("input "+vm.inputs);
             oldItems.forEach(element=>{
              console.log("element is"+element.title);
              console.log("done is is.."+element.done);
              vm.inputs.push({title:element.title,done:element.done,greenBg:element.greenBg,
        blueBg:element.blueBg,

        pinkBg:element.pinkBg});
        });
    }
       console.log(" created data is"+data.val().title +"and" +data.val().name);
  
        

   


       });
      }

      },

      mounted:function(){
        this.start();

      }


   

}
    

</script>
<style scoped>

.done{
    text-decoration: line-through;
    background-color:#f1f1f6;

}

.item{
    min-height: 30px;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    font-family: 'Oxygen', sans-serif;
}
.mainDiv{
  
  max-width:600px;
  margin:30px auto;
  box-shadow:7px 17px 35px -5px rgba(0,0,0,0.3);
}
.green{
  color:#eef9bf;

 }
 .greenBg{
  background-color:#eef9bf;
 }
.blue{
  color:#b9cced;
  
}
.blueBg{
  background-color:#b9cced;
}
.pink{
  color:#ffbaba;

}
.pinkBg{
  background-color:#ffbaba;

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
     
     border:none;
     outline: none;
     box-shadow:inset 0 -3px 0 0 #A683E3;
 }.color{
  margin:3px;
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
padding:20px;
opacity:0.9;
}
 .remove{
     margin-left: 30px;
     
     border:none;
     background-color:transparent;
     opacity:0.5;
      }

      .time{
          color:grey;
          text-align: left;
           opacity:0.6;
          }

        .colorChange{
          color:light-blue;
        }
        
         
         template {
          background-color:black;
         }
      
</style>