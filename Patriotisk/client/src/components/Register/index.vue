<template>
  <div>
    <form  @submit="checkForm" action="localhost:8080" method="post">
<div class="" id="fundraise">
  <div class="rm_overlay--modal">
    <div class="rm_modal--header">
      <h1>Register new user</h1>
      <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
    </div>
    <div class="rm_modal--content">
      <div class="rm_input-group"  v-for="(element, index) in options"
            :key="index">
        <div class="rm_input-group--col">
          <label>{{element.Name}}<span>*</span></label>
        <div class="rm_input-group--col w-50">
          <input type="text" :id="'id'+index" :name="'id'+index" v-model="element.model" v-model:placeholder="element.Description" @click.stop="cleartext(index)" @blur="checktext(index)"/>
        </div>
        </div>
      </div>
      <input type="submit" class="rm_button--next" value="Register">
      <div class="rm_modal--footer">
        <div class="rm_float--right">Already have an account? <a class="rm_link" href="#">Sign In.</a></div>
      </div>
    </div>
  </div>
</div>
    </form>
  </div>

</template>

<script>
import MenuView from '@/components/globals/MenuView'
import TitleBar from '@/components/globals/TitleBar'
import Register from '@/components/Register'
import {_} from 'vue-underscore'

export default {
  name: 'Register',
  components: {
    MenuView,
    TitleBar,
    Register
    
  },
  data() {
    return {
      
      errors:[],
      PlaceHolders: [{Name: "Full Name"},
      {Name: "22-22-22-22"},
      {Name: "Your Email"},
      {Name: "Company You Are Associated With"},
      {Name: "Your Password"},
      {Name: "Your Password"}
      
      ],
      options: [ {'Name': 'Your Name', 'Description': 'Full Name', 'model': "name" },
                 {'Name': 'Phone Number', 'Description': '22-22-22-22', 'model': 'phone' },
                 {'Name': 'Email Address', 'Description': 'Your Email', 'model': 'email'},
                 {'Name': 'Company', 'Description': 'Company You Are Associated With', 'model': 'company' },
                 {'Name': 'Enter Password', 'Description': 'Your Password','model': 'password' },
                 {'Name': 'Repeat Password', 'Description': 'Your Password','model': 'passwords' }
      ]
     
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
      },
       checkForm:function(e) {
         
        this.errors = [];
        let name = this.options[0].model;
        let telephonenr = this.options[1].model;
        let email = this.options[2].model;
        let company = this.options[3].model;
        let password1 = this.options[4].model;
        let password2 = this.options[5].model;

        //Name Validator
        if(name.length < 3 || name == 'Full Name' || name == 'name')
        {
          this.errors.push("Name to short");
        }

        //Telephone Validator
        telephonenr = telephonenr.replace(/\D/g,''); //Removes all non-numbers
        if(telephonenr.length < 8)
        {
          this.errors.push("Phone number to short");
        }
        
        //Email validator
        let re = /\S+@\S+\.\S+/; 
        if(!re.test(email))
        {
          this.errors.push("Email Incorrect");
        }

        //Password Validator
        let passwordre = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
        if(passwordre.test(password1))
        {
          this.errors.push("Password must be at least 8 characters, contain 1 letter and 1 number");
        }
        if (password1 != password2)
        {
          this.errors.push("Passwords don't match")
        }

      e.preventDefault();
        

      },
      cleartext:function(index) {
        //this.PlaceHolders = [];
        //this.PalceHolders.push(this.options[index].Description);
        //this.sendRegistrationField(this.options[index].Description,index);
        this.options[index].Description = "";
      },
      checktext:function(index) {
        if (this.options[index].Description == "")
        {
          this.options[index].Description = this.PlaceHolders[index].Name;
        }
      },
      async sendRegistrationField(element,index){
        await this.$store.dispatch('setRegistrationField', {'index': index, 'value': element})
  }
  }
}
</script>
<style></style>

<style scoped>


.rm_overlay--modal {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: "Avenir", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 30px auto;
  padding: 30px 30px 30px;
  width: 100%;
}
@media (min-width: 768px) {
  .rm_overlay--modal {
    max-width: 560px;
  }
}
.rm_modal--header {
  color: #000000;
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
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  font-family: "Avenir", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 0 auto 15px;
  max-height: 100%;
  overflow: auto;
  padding: 30px;
}
.rm_modal--footer {
  color: #22313f;
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
  color: #111;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  margin: 0;
  text-transform: uppercase;
  vertical-align: top;
  text-align: center;
  width: 100%;
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
  border: 1px solid #e1e1e1;
  border-radius: 0;
  color: #353535;
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
.rm_input-group.split .rm_input-group--col:nth-child(n+2) {
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
  background-color: #2c3e50;
  border-radius: 2px;
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
}
.rm_link {
  color: #22313f;
  font-size: 12px;
  font-weight: 300;
}

.rm_float--right {
  float: right;
}
.rm_float--left {
  float: left;
}

</style>
