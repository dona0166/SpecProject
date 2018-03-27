<template>
  <div id="app">
    <title-bar class="title-bar" :title="title" :items="options"></title-bar>
    <!-- <div>
      <menu-view title="Menu" :items="blocks" class="header">
      </menu-view> -->
<!--       <router-view class="content"/>
 -->    <!-- </div> -->
   <router-view/>
  </div>
</template>

<script>
import MenuView from '@/components/globals/MenuView'
import TitleBar from '@/components/globals/TitleBar'
export default {
  name: 'App',
  components: {
    MenuView,
    TitleBar
  },
  data() {
    return {
      blocks: [
        {'title': 'Blocks', 'list': ['A', 'B', 'C', 'D', 'E', 'F']},
        {'title': 'Doses', 'list': ['22ml', '10ml', '100ml', '1ml']},
        {'title': 'Chemical', 'list': ['DFF', 'Stomp', 'Boxer', 'Hussar', 'Agil']}
      ],
      options: [
          /* 'Effectivness by dose',
          'Effectivness by chemical product' */
          {'name': 'Effectivness by Chemical', 'link': 'bychemical'}
      ],
      title: {'name': 'Patrioskundskyld App', 'link': '/'}
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
/* .content{
  height: 100vh;
  width: 80%;
  border: 1px solid blue;
}
.header{
  float: left;
  height: 100vh;
  width: 20%;
  margin: auto;
  background-color: grey;
  overflow: scroll;
  border-radius: 6px;
  box-shadow: 2px 1px;
  border: 1px solid white;
  direction: rtl;
} */

::-webkit-scrollbar {width: 10px; height: 4px; background: rgb(255, 208, 0); }
::-webkit-scrollbar-thumb { background-color: black;}

.title-bar{
  background-color: grey;
}

</style>
