<template>
  <div>
      Son.vue
      <!-- 点击向父组件以事件标识的方式传递值 -->
    <button @click='hello'>按钮</button>

  </div>
</template>
<script>
export default {
  data:function(){
      return {
          msg:'发给App的数据'
      }
  },
  //将父组件传来的值绑定在子组件上
  props:['yy','aa'],
  methods:{
      hello:function(){
          //利用该实例的$emit方法传递一个事件标识，值为子组件的数据
          this.$emit('sendApp',this.msg)
      }
  },
  created:function(){
      //实例化后获取父组件传来的值
      console.log(this.aa,this.yy)
  }
  
}
</script>
