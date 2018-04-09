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
        <div id="vue-instance">
          <div>
            <transition name="fade" mode="out-in">
          <div key="3" v-if="show">
            <input placeholder="Username"> <hr>
            <input placeholder="Password">
            </div>
          <div key="1" v-if="!show">
          </div>
        </transition>
            <a href="#" @click="show = !show">Login</a>
          </div>       
        </div> 
      </li>


    </ul>
  </div>
</template>

<script>
export default {
  name: 'Options',
  props: [
    'title',
    'items',
  ],
  data () {
    return {
                  show: false

    }
  }
}
</script>
<style scoped>
  .itemButton{
    border: 1px solid white;
    background-color: #264D4A;
    padding: 10px;
    margin: 10px;
  }
   .itemButton:hover{
    background-color: #458D88;
  }

  .element{
    display: inline-block;
  }

  .login{
    float: right;
    
  }

  ul{
    list-style-type: none;
  }

  li a {
    
    text-decoration: none;
    color: white;
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
  .topbar {
  padding: 30px 0 10px 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
    list-style-position: inside;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
}

  

  
</style>
