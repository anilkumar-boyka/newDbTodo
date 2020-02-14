<template>
<div>
              <chart :chart-data="datacollection"></chart>
              <h6 v-on:click="dataAcess">click me</h6>
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
      data() {
        return {
          
          datacollection: null,
          x:55,
          true:null
        };
      },
      mounted() {
      
        this.fillData();
      },
      methods: {
          dataAcess:function (){
            
            var trueCount=0;
            var falseCount=0;
              alert('hello');
              var todoRef = firebase.database().ref("todoItems/"); 
              todoRef.on("value", function(snapshot) {
                var length=Object.keys(snapshot.val()).length;
                console.log("hey "+length);
                console.log(Object.keys(snapshot.val()));
                for(var i=0;i<length;i++)
                        {
                            console.log("done is.....");
                            console.log("done values are"+Object.values(snapshot.val())[i].done);
                            if(Object.values(snapshot.val())[i].done===true)
                            {
                               trueCount++;
                            }
                            // console.log('trueCount is'+trueCount);
                            else if(Object.values(snapshot.val())[i].done===false)
                            {
                             falseCount++;
                            }console.log('falseCount is'+falseCount);
                            console.log('trueCount is'+trueCount);
                        }
              }
              
              );this.true=trueCount;
              console.log('trueCount final is'+this.true);

          },
        fillData() {
          this.dataAcess();
          
          this.datacollection = {
            labels: [
              "Number of Todo Items Completed(Checked)",
              "Number of Todo Items NotCompleted(Unchecked) ",
              
              
            ],
            datasets: [
              {
                label: "GitHub Commits",
                backgroundColor: "#f87979",
                data: [40,this.true]
              },
            //   {
            //     label: "Monthly incomes",
            //     backgroundColor: "#A5CC82",
            //     data: [205, 408, 188, 190]
            //   }
            ]
          };
        },
      }
    };
    </script>
    <style>
    </style>