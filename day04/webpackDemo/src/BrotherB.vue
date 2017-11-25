<template>
  <div>
      BrotherB
      </div>
</template>

<script>
//引入邻居实例
import Bus from './bus'

export default {
    //在页面实例化后触发
    created:function(){
        //接受中间实例中传递的值
        //第一个参数为标识
        //第二个回调函数的参数是传递过来的值
        Bus.$on('flag',function(data){
            console.log(data)
        })
    }
}
</script>


