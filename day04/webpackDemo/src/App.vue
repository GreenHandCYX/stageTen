<template>
  <div>
      vue.app
    <h1> vue.app的h1</h1>
    <Son yy="hello" ></Son>
    <Son @flag="receiveSonData"></Son>
    <br>
    <brother-a></brother-a>
     <brother-b></brother-b>
  </div>
</template>
<script>
import Son from './Son.vue'
import brotherA from './BrotherA.vue'
import brotherB from './BrotherB.vue'
export default {
  components:{
      Son,
      brotherA,
      brotherB
  },
  methods:{
      receiveSonData:function(data){
          console.log(data)
      }
  }
}
</script>
<style>

</style>


