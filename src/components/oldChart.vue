<template>
	<div>
		<canvas id="planet-chart">
			
		
			
		</canvas>
		<h6 v-on:click="data">click me</h6>
		
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
			planetChartData: planetChartData,

		}
	},
	 methods:{
				createChart(chartId, chartData) {
				    const ctx = document.getElementById('planet-chart');
				    const myChart = new Chart(ctx, {
				      type: chartData.type,
				      data: chartData.data,
				      options: chartData.options,
		            });
				  },
				  data:function()
				  {
					//   alert("hello chart");
					//   var playersRef = firebase.database().ref("todoItems/");
					// var todoRef = firebase.database().ref("todoItems/");

										}
				   
			},
			
			mounted() {
  this.createChart('planet-chart', this.planetChartData);
}
};
	
</script>
