<template>
  <div class="temp">
       <lg-preview class="preview"></lg-preview>
  	<img id="pre" v-for="(img,index) in imgs" v-preview="img" :src="img" :key="index">
  </div>
</template>
<script>
export default {
  data(){
      return {
           imgs: ['./images/0-1.jpg', './images/0-2.jpg','./images/0-3.jpg','./images/0-4.jpg']
      }
  }
}
</script>
<style>
  #pre{
     width: 100px;
     height: 100px;
   }  
   .preview{
     position: absolute;
     left: 0;
     top: 0;
   }
</style>


