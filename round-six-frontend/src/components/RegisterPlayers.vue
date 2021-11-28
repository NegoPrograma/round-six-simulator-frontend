<template>
  <div class="hello">
  <h1>Registre o nome dos pobretões</h1>

<div class="container">
    <div class="row">
        <player v-for="(player, index) in players" :key="index" v-model="player.info"/>
    </div>
    <span @update-player-info="updatePlayer()"></span>
    <div class="row">
        <button @click="startRoundOne" class="btn btn-primary mx-auto">
            Começar!</button>
    </div>
</div>
  </div>
</template>

<script>

let axios = require('axios');

export default {
  name: 'RegisterPlayers',
  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },
 computed: {
        inputValue: {
            get: function() {
                return this.modelValue;
            },
            set: function(value) {
                this.$emit('update:modelValue', value);
            }
        }
    },
  data(){
      return {
          players:[]
      }
  },
  methods: {
     async startRoundOne(){
          let players = this.players.map((player)=>{
              return player.info;
          })
        let requestParams = {
            method: 'post',
            url: 'http://localhost:3080/round/1',
            data: { players },
            headers: {
              'Access-Control-Allow-Headers': '*',
              'Content-Type': "application/json"
            }
        }
        let response = await axios(requestParams);
        let updateValue = {
          data: response.data,
          isRegistering: false,
          hasResults: true
        }
        this.inputValue = updateValue;
        console.log(this.inputValue.data);

      }
  },
  created(){
      for(let i= 0; i < 40; i++){
          this.players.push({
              info: {
                  name: "nome" + i,
                  imageURL: "../assets/1.jpg"
              }
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
