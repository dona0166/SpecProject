<template>
<div>
  <div class="Menu">
     <router-link :to="title.link || 'default'" tag="img" :src="images.logo"></router-link>
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
      <div class="List">
   <ul>
      <li 
        v-for="(item, index) in items"
        :key="index">
        <div>
          <router-link :to="item.link || 'default'">{{item.name}}</router-link>
          </div>
        </li>
   </ul>
    </div>
    
  </div>
</div>
  </div>
 
</template>

<script>
export default {
  name: "Options",
  props: ["title", "items"],
  data() {
    return {
      show: false,
      images: {
        logo: require("../../assets/icon.png")
      }
    };
  }
};
</script>
<style scoped>


.Menu {
  width: 100%;
  background: linear-gradient(#01414D,#016173,#01829A,#01778d);

}
.List {
  width: 100%;
  text-transform: uppercase;
  border-bottom: 4px #016173 solid;
}


.login {
  float: right;
}

.List ul {
    border-top: 2px #016173 solid;

  
}
.List li {
  display: inline-block;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
  padding: 12px;
  border-left: 2px #016173 solid;

}
.List a {
  font-size: 1.25em;
  color: white;
    text-decoration: none;

  border-bottom: 1px solid transparent;
    transition: all ease-in-out 500ms;

}

.List a:hover {
    font-size: 1.30em;
  border-bottom: 3px solid #016173;
}

.title {
  position: absolute;
  margin: 1em 1em;
}

h1,
h2 {
  font-weight: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
