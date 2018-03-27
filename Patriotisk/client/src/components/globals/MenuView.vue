<template>
  <div>
    <div v-for="(item, index) in items"
            :key="index">
        <h2>{{item.title}}</h2>
        <ul>
            <li 
            v-for="(element, index) in item.list"
            :key="index"
            class="element">
              <button class="itemButton" @click="sendChoice(element || 'default')">
                {{element}}
              </button>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MenuView',
  props: [
    'items'
  ],
  data () {
    return {
      
    }
  },
  methods: {
      async sendChoice(element){
        this.$store.dispatch('setChoice', {'block': element})
      }
  }
}
</script>

<style></style>
<style scoped>
  .itemButton{
    width: 100%;
    border: 1px solid white;
    background-color: rgb(255, 170, 11);
    padding: 10px;
    border-radius: 6px;
    box-shadow: 2px 1px;
  }

  .element{
    width: 50%;
    margin: 10px auto;
  }

  ul{
    list-style-type: none;
  }

  h2{
    margin: 10px auto;
  }



  
</style>
