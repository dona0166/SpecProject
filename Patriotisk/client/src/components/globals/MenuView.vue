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
  
  <!-- <v-card height="350px">
    <v-navigation-drawer left permanent absolute v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="@/assets/land_icon.png" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title> Select Land</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-select
      :items="states"
      v-model="e2"
      label="Select"
      single-line
      auto
      append-icon="map"
      hide-details
    ></v-select>
    </v-navigation-drawer>
  </v-card> -->
</template>

<script>
export default {
  name: 'MenuView',
  /* props: {
    title:{
      default: 'title',
      type: String
    },
    items:{
      default: [],
      type: Array
    }
  }, */
  props: [
    'items'
  ],
  data () {
    return {
      /* defaultitems: [] */
      /* items: [
        { title: 'Area 1', icon: 'dashboard' },
        { title: 'Area 2', icon: 'question_answer' }
      ],
      right: null,
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ] */
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
