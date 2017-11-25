<template>
  <div>
    <!-- <img src="./images/demo.jpg" alt=""> -->
      <!-- 引用子组件,并以属性的形式传入父组件的值 -->
      <!-- 接受子组件传来的标识 -->
      <Son :yy="1" :aa="msg" @sendApp="world"></Son>
      App.vue
  </div>
  <!-- 注意：模板必须有一个根元素 -->
</template>

<script>
//引入子组件
import Son from "./Son.vue";
export default {
  //将组件内的变量等暴露出去
  
  data:function(){
    return {
      msg:'给son的礼物'
    }
  },
  methods:{
    //子组件标识的事件,参数为子组件的数据
    world:function(data){
      console.log(data)
    }
  },
  components:{
    //需在父组件中声明子组件
    // Son:Son//别名一致可以只写一个
    Son
  }
}
</script>

<style>
div{
    color:red;
}
</style>

