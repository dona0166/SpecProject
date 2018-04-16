<template>
  <div>
    <div class="chart">
      <highcharts :options="options" ref="highcharts"></highcharts>
    </div>
      
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return{
      options: {
            title: {
              text: 'Concentration Overview',
              x: -20 //center
            },
            credits: {
              enable: false
            },
            subtitle: {
              text: 'Out of Chemical product',
              x: -20
            },
            xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
              ]
            },
            yAxis: {
              title: {
                text: 'Concentration (%)'
              },
              plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
              }]
            },
            tooltip: {
              valueSuffix: '%'
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              borderWidth: 0
            },
            series: [{
              name: 'Block A',
              data: [70, 50, 90, 80, 50, 60, 25, 26, 23, 18, 13, 9]
            }, {
              name: 'Block B',
              data: [10, 20, 5, 11, 17, 22, 24, 24, 20, 14, 8, 2]
            }, {
              name: 'Block C',
              data: [1, 2, 3, 8, 13, 17, 18, 17, 14, 9, 3, 1]
            }]
          }
    }
    
  },
  methods: {
    updateCredits: function() {
      var chart = this.$refs.highcharts.chart;
      chart.credits.update({
        style: {
          color: '#' + (Math.random() * 0xffffff | 0).toString(16)
        }
      });
    }
    
  }
}
</script>

<style>
.chart{
  margin: 0px auto;
  padding-top: 50px;
  width: 100%;
}
  
</style>
