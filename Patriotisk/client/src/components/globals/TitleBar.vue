<template>
  <div>
      <div class="title">
        <router-link :to="title.link || 'default'">{{title.name}}</router-link>
      </div>
      <ul>
        <li 
        v-for="(item, index) in items"
        :key="index"
        class="element">
          <div class="itemButton">
            <router-link :to="item.link || 'default'">{{item.name}}</router-link>
          </div>
        </li>
        <li class="login">
          <div>LOGIN</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Options',
  props: [
    'title',
    'items'
  ],
  data () {
    return {
    }
  }
}
</script>
<style></style>
<style scoped>
  .itemButton{
    border: 1px solid white;
    background-color: rgb(255, 170, 11);
    padding: 10px;
    margin: 10px;
    border-radius: 6px;
    box-shadow: 2px 1px black;
  }

  .element{
    display: inline-block;
  }

  .login{
    float: right;
    margin: 10px 10px;
    background-color: black;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 2px 1px black;
    border: 1px solid white;
    color: rgb(255, 166, 0);
  }

  ul{
    list-style-type: none;
  }

  li a {
    text-decoration: none;
    color: black;
  }

  .title{
    position: absolute;
    margin: 1em 1em;
  }

  .title a{
    color: rgb(255, 166, 0);
    text-shadow: 1px 1px black;
    text-decoration: none;
  }
  

  

  
</style>
