<template>
  <div>
    <transition name="popup">
        
        <div v-cloak v-if="show">
            <menu-view class="header" :items="blocks">
            </menu-view>
            <label>SELECT:</label>
            <select v-model="selected" class="selection">
                <option v-html="descriptionTag" value="Description"></option>
                <option v-html="diagramTag" value="Diagram"></option>
            </select>
            <div v-if="!isActive" class="description">
                <description :item='description' ></description>
            </div>
            <div v-if="isActive" class="chart">
                <vue-chart type="bar" :data="chartData"></vue-chart>
            </div>
        </div>
    </transition>   
  </div>
</template>

<script>
import MenuView from '@/components/globals/MenuView'
import TitleBar from '@/components/globals/TitleBar'
import Description from '@/components/DiagramByChemical/Description'
import {_} from 'vue-underscore'

export default {
  name: 'DiagramByChemical',
  components: {
    MenuView,
    TitleBar,
    Description
    
  },
  data() {
    return {
      blocks: [
        {'title': 'Blocks', 'list': ['A', 'B', 'C', 'D', 'E', 'F']},
      ],
      options: [
        {'name': 'Effectivness by Chemical', 'link': 'bychemical'}
      ],
      description: {
          'title': 'Block', 
          'text': 'All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy'},
      show: false,
      chartData: {
        labels: ['Weed 1', 'Weed 2', 'Weed 3'],
        datasets: [
            {
                label: 'DFF',
                backgroundColor: 'red',
                borderColor: 'orange',
                borderWidth: 1,
                data: [66, 77, 88]
            },
            {
                label: 'Stomp CS',
                backgroundColor: 'blue',
                borderColor: '#0abab5',
                borderWidth: 1,
                data: [10, 20, 30]
            },
            {
                label: 'Boxer',
                backgroundColor: 'purple',
                borderColor: 'pink',
                borderWidth: 1,
                data: [100, 90, 90]
            },
            {
                label: 'Hussar',
                backgroundColor: 'green',
                borderColor: 'yellow',
                borderWidth: 1,
                data: [1, 1, 10]
            },
            {
                label: 'Agil 100 EC',
                backgroundColor: 'brown',
                borderColor: 'orange',
                borderWidth: 1,
                data: [33, 37, 22]
            }
        ]
      },
      selected: "Description",
      isActive: false,
      descriptionTag: "DESCRIPTION &#9666;",
      diagramTag: "DIAGRAM"
    }
  },
  mounted(){
        setTimeout(()=> 
        {
            this.show = true
        }, 1000)
  },
  methods: {
      mountclass: function(){
          this.show = true
      }
  },
  watch: {
    selected: function(value){
       this.isActive = !this.isActive
         if(this.isActive){
            this.descriptionTag = "DESCRIPTION"
            this.diagramTag = "DIAGRAM &#9666;"
        }
        else{
            this.descriptionTag = "DESCRIPTION &#9666;"
            this.diagramTag = "DIAGRAM"
        }
    }
  },
  /* computed: {
    decodeSpecial: function(){
        this.selectionTag = "&#x25BC;"
        return _.escape(this.selectionTag)
    }
  } */
}
</script>
<style></style>

<style scoped>
[v-clock]{
    display: none;
}

.chart{
  margin: 0px auto;
  padding: 10px;
  width: 50%;
}

.description{
  margin: 0px auto;
  padding: 10px;
  width: 50%;
}

.selection{
  background: orange;
  margin: 10px auto;
}

.selection{
    text-align-last:center;
}

.header{
  border: 2px #01778d solid;
  padding: 10px;
  margin: 25px;
  float: left;
  height: 100%;
  min-width: 10em;
  transition: all ease-in-out 500ms;

/*   position: fixed;
 */  
}
.header:hover {
     box-shadow: 5px 7px 3px #01778d;

}


.something{
    color: green;
}
.else{
    color: purple;
    font-size: 60px;
}

.popup-enter-active{
    animation: popup 2s;
}
.popup-leave-active{
    animation: popup 2s backwards;
}
@keyframes popup{
    0%{
        transform: translate(-10em);
    }
    100%{
        transform: translate(0em);
    }
}
/* .popup-enter-active, .popup-leave-active{
    transition: opacity 3s ease;
}
.popup-enter, .popup-leave-to{
    opacity: 0.1;
}   */

</style>
