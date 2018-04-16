<template>
  <div class="MenuView">
    <div v-for="(item, index) in items"
            :key="index">
        <h1>{{item.title}}</h1>
          <transition-group name="list-complete" tag="li">
            <li 
            v-for="(element, index) in item.list"
            :key="index"
            class="element">
              <button class="itemButton" @click="sendChoice(element || 'default')">
                {{element}}
              </button>
            </li>
          </transition-group>
      </div>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  props: ["items"],
  data() {
    return {};
  },
  methods: {
    async sendChoice(element) {
      this.$store.dispatch("setChoice", { block: element });
    }
  }
};
</script>

<style scoped>
.MenuView {
  background: linear-gradient(#00414d, #00414d, #00414d, #01778d);
}
ul {
  border-top: 2px #00414d solid;
    list-style-type: none;

}

button {
  padding: 12px;

  font-size: 2.25em;
  color: white;
  text-decoration: none;

  border-bottom: 1px solid transparent;
  transition: all ease-in-out 500ms;
}

button:hover {
  font-size: 2.25em;
  border-bottom: 3px solid #01778d;
}


h1 {
  color: white;
  border-bottom: #01778d 2px solid;
}
</style>
