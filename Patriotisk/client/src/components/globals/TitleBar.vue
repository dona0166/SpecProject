<template>
    <div>
        <div class="Menu">
            <div :class="{'collapsed': scrolled}">
                <transition name="fade" mode="out-in">
                    <div key="a" v-if="!scrolled">
                        <router-link :to="title.link || 'default'" tag="img" :src="images.logo"></router-link>
                    </div>
                </transition>
            </div>
            <div class="List">

                <li class="login">
                    <a href="#" @click="show = !show">Login</a>
                    <div key="3" v-if="show">

                        <div v-click-outside="outside" class="rm_overlay" id="fundraise">
                            <div class="rm_overlay--modal active">
                                <div class="rm_modal--header">
                                    <h1>Login</h1>
                                </div>
                                <div class="rm_modal--content">
                                    <div class="rm_input-group">
                                        <label>Username
                                            <span>*</span>
                                        </label>
                                        <input type="text" placeholder="Your Email" />
                                    </div>
                                    <div class="rm_input-group">
                                        <label>Password
                                            <span>*</span>
                                        </label>
                                        <input type="text" placeholder="Password" />
                                    </div>
                                </div>
                                <a class="rm_button--next" href="#">Sign In</a>
                                <div class="rm_modal--footer">
                                    <div class="rm_float--right">Need Account?
                                        <a class="rm_link" href="/register">Register here!</a>
                                    </div>
                                    <a class="rm_link" href="#">Forgot Password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key="1" v-if="!show">
                    </div>

                </li>

            </div>
            <div class="List">
                <ul>
                    <li>
                        <transition name="fade" mode="out-in">

                            <div key="b" class="icon" v-if="scrolled">
                                <router-link :to="title.link || 'default'" tag="img" :src="images.logo2"></router-link>
                            </div>
                        </transition>
                    </li>
                    <li v-for="(item, index) in items" :key="index">
                        <div>
                            <router-link :to="item.link || 'default'">{{item.name}}</router-link>
                        </div>
                    </li>
                </ul>
            </div>

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
        logo: require("../../assets/icon.png"),
        logo2: require("../../assets/icon5.png")
      },
      limitPosition: 10,
      scrolled: false,
      lastPosition: 0
    };
  },
  methods: {
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
      }

      this.lastPosition = window.scrollY;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  showLogin() {
    show = true;
  }
};
</script>
<style scoped>
.Menu {
  width: 100%;
  height: 100%;
  background: linear-gradient(#01414d, #016173, #01829a, #01778d);

  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  overflow: hidden;
}
.Menu.collapsed {
  opacity: 0;

  max-height: 0;
}
.icon img {
  height: 80%;
  width: 80%;
}
#mynd {
  width: 100%;
  height: 100%;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
.Menu2 img {
  height: 75px;
  width: 75px;
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
}
.List a {
  font-size: 1.25em;
  color: white;
  text-decoration: none;

  border-bottom: 1px solid transparent;
  transition: all ease-in-out 500ms;
}

.List a:hover {
  font-size: 1.3em;
  border-bottom: 3px solid #ffffff;
}
.List img:hover {
  font-size: 1.3em;
  border-bottom: 3px solid #ffffff;
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
  transition: opacity 500ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.unpinned {
  background: blue;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html,
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}
body {
  background: -webkit-linear-gradient(135deg, #031634, #033649);
  background: -moz-linear-gradient(135deg, #031634, #033649);
  background: -o-linear-gradient(135deg, #031634, #033649);
  background: -ms-linear-gradient(135deg, #031634, #033649);
  background: linear-gradient(-45deg, #031634, #033649);
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
/*
 * Variables
 */
.rm_overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 60%;
  overflow: auto;
  z-index: 1;
  width: 100%;
}
.rm_overlay--modal {
  background: linear-gradient(#00414d, #00414d, #00414d, #01778d);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: "Avenir", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 30px auto;
  padding: 0 30px 30px;
  width: 100%;
  border-radius: 2px;
  box-shadow: 10px 14px 0px #01778d;
}
@media (min-width: 768px) {
  .rm_overlay--modal {
    max-width: 560px;
  }
}
.rm_modal--header {
  color: #fff;
  letter-spacing: 0.025em;
  text-align: center;
}
.rm_modal--header > h1 {
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;
}
.rm_modal--header > h1 > p {
  font-size: 16px;
  font-weight: 100;
  margin: 0;
  opacity: 0.85;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";
  filter: alpha(opacity=85);
  text-transform: initial;
}
.rm_modal--header .rm_header--navigation {
  list-style: none;
  margin: 0 0 15px;
  padding: 0;
  text-align: right;
  zoom: 1;
}
.rm_modal--header .rm_header--navigation:before,
.rm_modal--header .rm_header--navigation:after {
  content: "";
  display: table;
}
.rm_modal--header .rm_header--navigation:after {
  clear: both;
}
.rm_modal--header .rm_header--navigation li {
  display: inline-block;
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  transition: all 300ms ease;
}
.rm_modal--header .rm_header--navigation li span:first-of-type {
  border: 1px solid #fff;
  border-radius: 32px;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  text-align: center;
  width: 32px;
}
.rm_modal--header .rm_header--navigation li span:first-of-type + span {
  display: none;
}
.rm_modal--header .rm_header--navigation li.active span + span {
  margin-left: 10px;
  display: inline-block;
}
.rm_modal--header .rm_header--navigation li:not(.rm_float--right) {
  margin-right: 5px;
}
.rm_modal--header .rm_header--navigation li.rm_float--right {
  margin-left: 5px;
}
.rm_modal--content {
  font-family: "Avenir", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 0 auto 15px;
  max-height: 100%;
  overflow: auto;
  padding: 30px;
  border-radius: 2px;
}
.rm_modal--footer {
  color: #ffffff;
  font-size: 12px;
  margin: 15px 0 0;
  zoom: 1;
}
.rm_modal--footer:before,
.rm_modal--footer:after {
  content: "";
  display: table;
}
.rm_modal--footer:after {
  clear: both;
}
/*
 * Form Control
 */
.rm_input-group {
  border: 1px solid #e1e1e1;
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
}
.rm_input-group label {
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
  font-weight: 100;
  line-height: 12px;
  margin: 0;
  text-transform: uppercase;
  vertical-align: top;
}
.rm_input-group label span {
  color: #cf000f;
  display: inline-block;
  vertical-align: top;
}
.rm_input-group input[type="text"],
.rm_input-group select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;
  border-radius: 0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  height: 24px;
  padding: 0;
  width: 100%;
}
.rm_input-group.split {
  zoom: 1;
}
.rm_input-group.split:before,
.rm_input-group.split:after {
  content: "";
  display: table;
}
.rm_input-group.split:after {
  clear: both;
}
.rm_input-group.split .rm_input-group--col {
  float: left;
  padding-right: 10px;
}
.rm_input-group.split .rm_input-group--col input {
  border-right: 1px solid #e1e1e1;
}
.rm_input-group.split .rm_input-group--col:nth-child(n + 2) {
  padding-left: 10px;
}
.rm_input-group.split .rm_input-group--col:last-of-type {
  padding-right: 0;
}
.rm_input-group.split .rm_input-group--col:last-of-type input {
  border-right: 0;
}
.rm_input-group.split .rm_input-group--col.w-50 {
  width: 50%;
}
.rm_input-group.split .rm_input-group--col.w-33 {
  width: 33.33333%;
}
.rm_button--next {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #00b16a;
  border-radius: 2px;
  color: #fff;
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
}
.rm_link {
  color: #ffffff;
  font-size: 12px;
  font-weight: 300;
}
/*
 * Niche Styles
 * @gallery, @floats
 */
.rm_float--right {
  float: right;
}
.rm_float--left {
  float: left;
}
</style>
