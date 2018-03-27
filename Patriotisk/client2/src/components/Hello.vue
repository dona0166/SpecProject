<template>
  <div class="hello">
    <div class="Checkbox">
      <ul><h1>Products</h1>
       <li  v-for="item in items">
         {{ item.name }}
             <input type="checkbox" v-bind:id="item.name" v-bind:value="item.name" v-model="$root.checkedNames">
     </li>
    </ul>
    <br>
    <span>Checked names: {{ $root.checkedNames }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      items: [
        {name: "Product1"},
        {name: "Product2"},
        {name: "Product3"},
        {name: "Product4"}        
      ]
    }
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    height: 100vh;

}
h1, h2 {
  font-size: 1.3rem;
}
ul {
    list-style-position: inside;
}
a {
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
    border-bottom: black 2px solid;

}
ul h1 {
  border-bottom: black 2px solid;
}

</style>