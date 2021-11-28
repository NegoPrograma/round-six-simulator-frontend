<template>

<div class="col-3 my-2">
    <ul class='playerImageSelection'>
    <li @click="prevImg" class="my-4"><i class="fas fa-chevron-left"></i></li>
    <li  class="mx-5"  ><img class="playerImage" :src="currentImage" /></li>
    <li @click="nextImg" class="my-4"><i class="fas fa-chevron-right"></i></li>
    </ul>
    <input class=" ml-5 w-50" type="text" v-model="inputValue.name">
</div>
  
</template>

<script>
import p1 from "../assets/1.jpg";
import p2 from "../assets/2.jpg";
import p3 from "../assets/3.jpg";
import p4 from "../assets/4.jpg";
import p5 from "../assets/5.jpg";
import p6 from "../assets/6.jpg";
import p7 from "../assets/7.jpeg";

export default {
  name: 'Player',
  props:['modelValue'],
  computed: {
      inputValue: {
          get(){
              return this.modelValue;
          },
          set(value){
              value.name = this.modelValue.name;
              value.imageURL = this.modelValue.imageURL;
              this.$emit("update:modelValue",value);
          }
      }
  },
  data() {
      return {
          index: 0,
          imageList: [
                p1,
                p2,
                p3,
                p4,
                p5,
                p6,
                p7,
              ],
            currentImage: ""
      }
  },
  methods: {
      nextImg(){
          if(this.index + 1 == this.imageList.length){
              this.index = 0;
          }else{
              this.index++;
          }
          this.currentImage = this.imageList[this.index];
          
          
      },
      prevImg(){
          if(this.index -1 == -1){
              this.index = this.imageList.length-1;
          }else{
              this.index--;
          }
          this.currentImage = this.imageList[this.index];
      }
  },
  created(){
      this.currentImage = this.imageList[0];
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.playerBox {
    margin: 20px;
}


.playerImage {
    width: 100px;
    height: 100px;
    border: 10px solid #ab31ff;
}

.playerImageSelection {
    display: inline-flex;
    align:center;
    list-style: none;
}
</style>
