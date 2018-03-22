<template>
  <div id="app">
    
    <div>
      <menu-view title="Menu" :items="blocks" class="header">
      </menu-view>
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import MenuView from '@/components/globals/MenuView'
export default {
  name: 'App',
  components: {
    MenuView
  },
  data() {
    return {
      blocks: [
        {'title': 'Blocks', 'list': ['A', 'B', 'C', 'D', 'E', 'F']},
        {'title': 'Doses', 'list': ['22ml', '10ml', '100ml', '1ml']},
        {'title': 'Chemical', 'list': ['DFF', 'Stomp', 'Boxer', 'Hussar', 'Agil']}
      ]

    }
  },
  /* async mounted(){
    this.blocks = [
      'A', 'B', 'C', 'D'
    ]
  } */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-width: 640px;
}
.content{
  height: 100vh;
  width: 80%;
  border: 1px solid blue;
}
.header{
  float: left;
  height: 100vh;
  width: 20%;
  border: 1px solid blue;
  z-index: 2;
  margin: auto;
  background-color: grey;
}
</style>
