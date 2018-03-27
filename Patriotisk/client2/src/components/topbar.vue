<template>
  <div class="topbar">
<div id="vue-instance">
  <div>
    <transition name="fade" mode="out-in">
  <div key="3" v-if="show">
    <input placeholder="Username">
    <input placeholder="Password">
    </div>
  <div key="1" v-if="!show">
  </div>
</transition>
    <a href="#" @click="show = !show">Login</a>
  </div>
</div>
            
  </div>
</template>

<script>
export default {
  name: 'topbar',
   data() {
    return{
            show: false
    }
   }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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