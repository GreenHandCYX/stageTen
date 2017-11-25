<template>
  <div class="temp">
       <lg-preview></lg-preview>
  	<img id="pre" v-for="(img,index) in imgs" v-preview="img" :src="img" :key="index">
  </div>
</template>
<script>
export default {
  data(){
      return {
           imgs: ['http://covteam.u.qiniudn.com/ka2.jpg', 'http://covteam.u.qiniudn.com/poster.png']
      }
  }
}
</script>
<style>
  #pre{
     width: 100px;
     height: 100px;
   }  
</style>


