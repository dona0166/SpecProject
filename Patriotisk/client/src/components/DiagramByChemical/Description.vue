<template>
  <div>
      <!-- <div>
        <select v-model="selected" class="selection">
          <option value="Description">DESCRIPTION &#9660;</option>
          <option value="Diagram">DIAGRAM</option>
        </select>
        
      </div> -->
      
      <h1 class="title">{{item.title || ''}} {{this.$store.state.choice}}</h1>
      <div class="main">
        <img class="mapImage" :src="imagePath" alt="">
        <div class="text">
          {{item.text}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: [
    'item'
  ],
  data () {
    return {
      selected: "Description"
    }
  },
  computed: {
    imagePath: function () {
      var path = require('../../assets/' + this.$store.state.choice + '.jpg')
      return path
    } 
  },
  methods: {
    
  },
  watch: {
    selected: function(value){
      /* this.$router.push("chemicaldetail") */

    }
  }
  
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
