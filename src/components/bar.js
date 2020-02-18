import {
    Bar,
    mixins
} from 'vue-chartjs'

export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    data() {
        return {
            options1: { //Chart.js options
                title: {
                          display: true,
                          text: ''
                        },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            padding:25,

                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: false,
                            padding:25,
                            
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                lineTension:1,
                maintainAspectRatio:false,
                aspectRatio:2

            }

        }
    },
    mounted() {
        this.renderChart(this.chartdata, this.options1)
    }

}