<template>
<div>
<RegisterPlayers v-model="parentInfo" v-if="parentInfo.isRegistering"/>

<ShowResults v-model="parentInfo" v-if="parentInfo.hasResults" :winners="parentInfo.players" :losers="parentInfo.deadplayers"/>
</div>
</template>

<script>
import RegisterPlayers from "./components/RegisterPlayers.vue";
import ShowResults from "./components/ShowResults.vue";

//let axios = require('axios');

export default {
  name: 'App',
  components: {
    RegisterPlayers,
    ShowResults
  },
  data() {
    return {
      info: "",
      parentInfo: {
        data: [],
        isRegistering: true,
        hasResults: false,
      }
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #000;
  background-image: url('./assets/rsbackground.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
