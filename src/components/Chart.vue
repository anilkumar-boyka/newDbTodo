<template>
	<div>
		<canvas id="planet-chart">
			
		
			
		</canvas>
		<!-- <h6 v-on:click="data">click me</h6> -->
		
	</div>
</template>


<script>
import {planetChartData} from './chartdata.js';
import Chart from 'chart.js';
import firebase from "firebase";
import { mapGetters } from "vuex";

export default{
	data(){
		return{
			 planetChartData :{

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
			// planetChartData: planetChartData,

		}
	},
	//  methods:{
	// 			createChart(chartId, chartData) {
	// 			    const ctx = document.getElementById('planet-chart');
	// 			    const myChart = new Chart(ctx, {
	// 			      type: chartData.type,
	// 			      data: chartData.data,
	// 			      options: chartData.options,
	// 	            });
	// 			  },
	// 			  data:function()
	// 			  {
	// 				//   alert("hello chart");
	// 				//   var playersRef = firebase.database().ref("todoItems/");
	// 				// var todoRef = firebase.database().ref("todoItems/");

	// 									}
				   
	// 		},
			
			mounted() {
//   this.createChart('planet-chart', this.planetChartData);
  
}
};
	
</script>
