// import firebase from "firebase";
// // import main from "../main.js";

// // import Vue from "vue"; 
// // import store from "../store";

// var todoRef = firebase.database().ref("todoItems/"); 

// todoRef.on("value", function(snapshot) {

//     var length=Object.keys(snapshot.val()).length;
//     console.log(length);
//     console.log("he chart"); 
//     console.log(Object.keys(snapshot.val()));
//     for(var i=0;i<length;i++)
//     {
//       console.log(Object.values(snapshot.val())[i].done);

//     }
// }
// );

//  var x=25;





const planetChartData = {
  
  type: 'pie',
  data: {
    labels: ['Completed', 'Not Completed', ],
    datasets: [
      { // one line graph
        label: 'Number of completed and not completed items yet',
        data: [2,5],
        backgroundColor: [
          'rgba(54,73,93,.5)', 
          'white',
         
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'Planet Mass (x1,000 km)',
        // data: [4.8, 12.1, 12.7],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
        ],
        borderColor: [
          '#47b784',
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Number of To do Items Completed(Checked) or Not completed(Unchecked)'
    },
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
}

export {planetChartData};