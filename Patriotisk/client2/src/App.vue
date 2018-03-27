<template>
  <div id="app">
    <topbar></topbar>
    <hello></hello>
    <graphs></graphs>
  </div>
</template>

<script>
import Hello from './components/Hello'
import graphs from './components/Graphs'
import topbar from './components/topbar'

export default {
  name: 'app',
  components: {
    topbar,
    Hello,
    graphs
  },

data() {
    return {
      show: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    background: #4c9b95;

  color: #2c3e50;
}
.topbar {
  height: 70%;
  width: 100%;
  border-bottom: #2c3e50 1px solid;
}
.hello {
  width: 25%;
  float: left;
    border-right: #2c3e50 1px solid;


}
.graphs {
  
  width: 75%;
}
a {
  color: black;
}
</style>