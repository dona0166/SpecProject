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
              <button class="itemButton">
                {{element}}
              </button>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Options',
  props: [
    'items'
  ],
  data () {
    return {
    }
  }
}
</script>

<style>
  .itemButton{
    width: 100%;
    border: 1px solid white;
    background-color: rgb(90, 80, 218);
  }

  .element{
    width: 50%;
    margin: 10px auto;
  }

  ul{
    list-style-type: none;
  }



  
</style>
