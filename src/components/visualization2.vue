<template v-if="user.loggedIn">

<div class="myChart">
 
              <chart :chart-data="datacollection"></chart>
              
              
              </div>
    </template>
    <script>
    import firebase from "firebase";
    import { mapGetters } from "vuex";
    import Chart from "./newFileData.js";
    export default {
      components: {
        Chart
      },

      computed: {
            ...mapGetters({
        
              user: "user"
            }),

   
  },
    
      data() {
        return {
          
          datacollection: null,
          
          true:null,
          false:null
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
                var todoRef = firebase.database().ref("todoItems/");
                 var vm=this;
                 
                 
            
                 var trueCount=0;
                 var falseCount=0;
                 var userName = this.user.data.displayName;

                 
                 
              //main snapshot starts here
              todoRef.on("value", function(snapshot) {
               //  console.log('yo');
            
               // console.log('length is');
               // console.log(Object.keys(snapshot.val()).length);
                
            // todoRef.on("value", function(snapshot) {
              // console.log('data.val().name');
              
              // console.log('userName is'+userName);
               
              //     console.log(' inside');
                  console.log('trueCount value is'+trueCount);
                  console.log('falseCount value is'+falseCount);
               
                
                 
                        var length=Object.keys(snapshot.val()).length;
                        // console.log('main')
                        
                      for(var i=0;i<length;i++)
                      {

                        // console.log('done length'+length);
                        // console.log(Object.values(snapshot.val())[i].name);

                            
                            if(Object.values(snapshot.val())[i].done==true &&Object.values(snapshot.val())[i].name == userName)
                            {

                               trueCount++;
                               // console.log('incremented true');
                               // console.log('now tc is'+trueCount);

                            }
                            
                            else if(Object.values(snapshot.val())[i].done==false &&Object.values(snapshot.val())[i].name == userName)
                            {
                             falseCount++;
                             // console.log('incremented false');
                             // console.log('now fc is'+falseCount);
                            }
                        }
                        console.log('trueCount value is'+trueCount);
                        console.log('falseCount value is'+falseCount);
              
                  
                  // });//done snapshot ends here
                         vm.true=trueCount;
                         vm.false=falseCount;
                         // console.log("this.true is"+vm.true);

                }//main todo ref ends here


              
          // });
            // }//name for ends here
          // }if
          );//main snapshot ends here
              




          },
          // helloFunction(){
          //   console.log("helllloooo");
          //   console.log('inside hello function');
            
          // },
        fillData:

         function() 
         {
           var vm=this;
          // console.log('trueCount final is'+vm.true);
          // console.log('falseCount final is'+vm.false);
          // vm.helloFunction();
          // vm.dataAccess();
          
          
          // console.log('2nd time');

          
          
          // console.log('trueCount final is'+vm.true);
          // console.log('falseCount final is'+vm.false);

          
          vm.datacollection = {
            labels: [
              " Completed(Checked)",
              " NotCompleted(Unchecked) ",
              
              
            ],
            datasets: [
              {
                label: 'Number of completed and not completed items yet',
                backgroundColor: "#f87979",
                data: [vm.true,vm.false],
                 borderWidth: 5,
                  backgroundColor: [
                    'rgba(54,73,93,.5)', 
                    'white',
                  ],

                     backgroundColor: [
                      // 'rgba(191, 191, 191, 1)'
                      'rgba(71, 183,132,.5)', // Green
                    ],

                  // borderColor: [
                  //   '#36495d',
                    
                  // ]
              },

            
            ]
          };
          // this.true=null;
          // this.false=null;

        },
    //     options:{
    //       title: {
    //   display: true,
    //   text: 'Number of To do Items Completed(Checked) or Not completed(Unchecked)'
    // },
    //     }


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