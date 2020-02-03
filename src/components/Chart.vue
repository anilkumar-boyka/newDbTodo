<template>
	<div>
		<canvas id="planet-chart">
		
			
		</canvas>
	</div>
</template>


<script>
import planetChartData from './chartdata.js';

export default{
	data(){
		return{

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
  			    }
	        }
};
	
</script>
