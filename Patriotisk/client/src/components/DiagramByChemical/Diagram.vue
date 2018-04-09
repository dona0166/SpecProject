<template>
  <div>
      <div class="chart">
        <vue-chart type="bar" :data="chartData"></vue-chart>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Diagram',
  props: [
    'item'
  ],
  
}
</script>
<style></style>
<style scoped>

  .main{
    display: flex;
  }

  .mapImage{
    width: 50%;;
    margin: 5px;
  }

  .text{
    width: 50%;
    margin: 5px;
  }

  .selection{
    /* float: left;
    margin: 10px; */
    background: orange;
    margin: 10px auto;
  }
  

  
</style>
