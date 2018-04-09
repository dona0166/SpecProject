<template>
  <div id="app">
    <title-bar class="title-bar" :title="title" :items="options"></title-bar>
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
          {'name': 'Effectivness by Chemical', 'link': 'bychemical'},
                    {'name': 'Register', 'link': 'register'}

      ],
      title: {'name': 'Patrioskundskyld App', 'link': '/'}
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
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-width: 640px;
}


::-webkit-scrollbar {width: 10px; height: 4px; background: rgb(255, 208, 0); }
::-webkit-scrollbar-thumb { background-color: black;}

.title-bar{
  background-color: grey;
}

</style>
