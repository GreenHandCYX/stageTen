<template>
  <div class="temp">
     
      <div class="title">
           <h4>{{GoodDesData.title}}</h4>
           <div v-html="GoodDesData.content"></div>
      </div>
  </div>
</template>
<script>
import tool from '../tool/tool'
export default {
    data(){
        return {
           GoodDesData:{}
        }
    },
  created(){
    //   console.log(this.$route.params.id)
    var id = this.$route.params.id;
    this.getGoodDesData(id)
  },
  methods:{
      getGoodDesData(id){
           var url = `${tool.HTTP}${tool.SERVER_PATH}/api/goods/getdesc/${id}`
            this.$http.get(url).then(
                res=>{
                    this.GoodDesData = res.body.message[0]
                },
                res=>{
                     console.log('gooddesc页面请求图文数据出错')
                }
            )
      }
  }
}
</script>
<style>
.title{
    padding: 5px;
}
.title h4{
    color:tomato;
    border-bottom:1px solid #ccc 
}
</style>


