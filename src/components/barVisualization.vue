<template v-if="user.loggedIn">

<div class="myChart">
 
              <chart :chart-data="datacollection"></chart>
              
              
              </div>
    </template>
    <script>
    import firebase from "firebase";
    import { mapGetters } from "vuex";
    import chart from "./bar.js";
    export default {
      components: {
        chart
      },

      computed: {
            ...mapGetters({
        
              user: "user"
            }),

   
  },
    
      data() {
        return {
          
          datacollection: null,
          
          green:null,
          blue:null,
          pink:null
        };
      },
     
      mounted() {
      
        var vm=this;
        this.dataAccess();
      setTimeout(function(){
        vm.fillData();
      },3500);

      },
      methods: {
          dataAccess:function(){
            console.log("bar data");
                 var vm=this;
                 
                 var greenCount=0;
                 var blueCount=0;
                 var pinkCount=0;
                 var userName = this.user.data.displayName;
                 
                 
                 var todoRef = firebase.database().ref("todoItems/");
                 
              todoRef.on("value", function(snapshot) {
            
               console.log('length is');
               console.log(Object.keys(snapshot.val()).length);
                
           
              console.log('data.val().name');
              
              console.log('userName is'+userName);
                // if(Object.values(snapshot.val())[i].name == userName){//first if for  ame starts here
                  // var todoRef = firebase.database().ref("todoItems/");
                  console.log(' inside');
                  console.log('greenCount value is'+greenCount);
                  console.log('blueCount value is'+blueCount);
                  console.log('pinkCount value is'+pinkCount);
               
                
                  // todoRef.on("value", function(snapshot) {//done snapshot starts here
                        var length=Object.keys(snapshot.val()).length;
                        console.log('main')
                        
                      for(var i=0;i<length;i++)
                      {

                        console.log('done length'+length);
                        console.log(Object.values(snapshot.val())[i].name);
                        console.log(Object.values(snapshot.val())[i].greenBg);
                        console.log('userName i'+userName);

                            
                            if(Object.values(snapshot.val())[i].greenBg=='true' && Object.values(snapshot.val())[i].name == userName)
                            {


                               greenCount++;
                               console.log('incremented true');
                               console.log('now gc is'+greenCount);

                            }
                            // console.log('trueCount is'+trueCount);
                            else if(Object.values(snapshot.val())[i].blueBg=='true' &&Object.values(snapshot.val())[i].name == userName)
                            {
                             blueCount++;
                             console.log('incremented false');
                             console.log('now bc is'+blueCount);

                            }
                            else if((Object.values(snapshot.val())[i].pinkBg=='true' &&Object.values(snapshot.val())[i].name == userName))
                            {
                              pinkCount++;
                              console.log('incremented false');
                             console.log('now bc is'+blueCount);

                            }
                        }
                        console.log('greenCount value is'+greenCount);
                        console.log('blueCount value is'+blueCount);
                        console.log('pinkCount value is'+pinkCount);
                        // vm.true=trueCount;
                        //  vm.false=falseCount;
                  
                  // });//done snapshot ends here
                         vm.green=greenCount;
                         vm.blue=blueCount;
                         vm.pink=pinkCount;
                         // console.log("this.true is"+vm.true);
                }//main todo ref ends here


              
          // });
            // }//name for ends here
          // }if
          );//main snapshot ends here


          },
         
        fillData:function() 
         { var vm=this;
           console.log('greenCount final is'+vm.green);
          console.log('blueCount final is'+vm.blue);
          console.log('pinkCount final is'+vm.pink);
          
          
          vm.dataAccess();
          
          
          console.log('2nd time');
          
          
          console.log('greenCount final is'+vm.green);
          console.log('blueCount final is'+vm.blue);
          console.log('pinkCount final is'+vm.pink);

          
          vm.datacollection = {
            labels: [
              " Green",
              " Blue",
              "Pink"
              
              
            ],
            datasets: [
              {
                
               
                data: [vm.green,vm.blue,vm.pink],
                 borderWidth: 5,
                  backgroundColor: [
                    // 'rgba(54,73,93,.5)', 
                    // '#ADD8E6',
                    // 'rgba(54,73,93,.5)', 
                    // '#ffbaba',
                    // 'rgba(54,73,93,.5)', 
                    // '(red)',
                    'rgba(200, 247, 197, 1)',
                    
                    'rgba(54, 162, 235, 0.2)',  
                    
                    'rgba(255, 99, 132, 0.2)'

                  ],

                  

                    
              },

            
            ],

          };
         

        },


      }
    };
    </script>
    <style>
    .myChart{
      max-width: 300px;
      max-height: 300px;
      text-align: center;
      /*margin: 10px 0 20px 0;*/
      /*position:relative;*/

    }
    </style>