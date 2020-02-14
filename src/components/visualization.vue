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
      
        this.fillData();

      },
      methods: {
          dataAccess:function(){
                 var vm=this;
                 
            
                 var trueCount=0;
                 var falseCount=0;
                 var userName = this.user.data.displayName;
                 
                 var todoRef = firebase.database().ref("todoItems/"); 
            todoRef.orderByChild("title").on("child_added", function(data) {
                if(data.val().name == userName){
                  // var todoRef = firebase.database().ref("todoItems/");
                  console.log('m inside');
                  console.log('trueCount value is'+trueCount);
                  console.log('falseCount value is'+falseCount);
               
                
                  todoRef.on("value", function(snapshot) {
                        var length=Object.keys(snapshot.val()).length;
                        
                      for(var i=0;i<length;i++)
                      {

                            
                            if(Object.values(snapshot.val())[i].done==true)
                            {
                               trueCount++;
                            }
                            // console.log('trueCount is'+trueCount);
                            else if(Object.values(snapshot.val())[i].done==false)
                            {
                             falseCount++;
                            }
                        }
                        console.log('trueCount value is'+trueCount);
                        console.log('falseCount value is'+falseCount);
                        // vm.true=trueCount;
                        //  vm.false=falseCount;
                  
                  });
                         vm.true=trueCount;
                         vm.false=falseCount;
                }

              
          });

          },
        fillData() 
         { var vm=this;
          console.log('trueCount final is'+vm.true);
          console.log('falseCount final is'+vm.false);
          vm.dataAccess();
          console.log('2nd time');
          console.log('trueCount final is'+vm.true);
          console.log('falseCount final is'+vm.false);
          
          vm.datacollection = {
            labels: [
              " NotCompleted(Checked)",
              " Completed(Unchecked) ",
              
              
            ],
            datasets: [
              {
                label: 'Number of completed and not completed items yet',
                backgroundColor: "#f87979",
                data: [this.true,this.false],
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