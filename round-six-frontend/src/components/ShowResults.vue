<template>
<div class="container">

<div class="row">
    <div class="col-6 winners">
        <div v-for="(winner, i) in results" :key="i">
            <img class="playerImage" :src="winner.imageURL"/>
            <p> {{winner.eventPhrase}}</p>
        </div>
    </div>
<div class="col-6 losers">
        <div v-for="(loser, i) in results" :key="i">
            <img class="playerImage" :src="loser.imageURL"/>
            <p> {{loser.eventPhrase}}</p>
        </div>
    </div>

</div>
</div>
</template>

<script>

export default {
  name: 'ShowResults',
  props: ['winners','losers','modelValue'],
  computed: {
        results: {
            get: function() {
                return this.modelValue;
            },
            set: function(value) {
                this.$emit('update:modelValue', value);
            }
        }
    },
  data() {
    return {
      info: "",
      isRegistering: true
    }
  },
   mounted () {
    console.log(this.results);
  }
  
}
</script>

<style>

.playerBox {
    margin: 20px;
}


.playerImage {
    width: 100px;
    height: 100px;
    border: 10px solid #ab31ff;
}


</style>
