<template>
 <div>
     BrotherA
     <button @click="sendToB">传递给兄弟组件的值</button>
</div>
</template>
<script>
//引入邻居实例
import Bus from './bus'

export default {
    methods:{
        sendToB:function(){
            //借由中间实例bus将数据传过去
            Bus.$emit('flag','1111') 
        }
    }
}
</script>
