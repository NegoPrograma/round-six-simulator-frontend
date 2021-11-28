import { createApp } from 'vue'
import App from './App.vue'
import Player from "./components/Player.vue";
import RegisterPlayers from "./components/RegisterPlayers.vue";
import ShowResults from "./components/ShowResults.vue";

createApp(App)
.component('player',Player)
.component('register-players',RegisterPlayers)
.component('show-results',ShowResults)
.mount('#app')
