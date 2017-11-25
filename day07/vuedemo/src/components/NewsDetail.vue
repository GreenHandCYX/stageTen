<template>
  <div class="temp">
      <div class="title">
          <h3>{{newsDetailData.title}}</h3>
          <div class="info">
              <span>{{newsDetailData.add_time | momentFilter('YYYY-MM-DD')}}   分类:经济民生 </span>
              <span>浏览量:{{newsDetailData.click}}</span>
          </div>
          <div class="content" v-html="newsDetailData.content">
          </div>
          <Comment :articleId='commentId'></Comment>
      </div>
  </div>
</template>
<script>
import tool from '../tool/tool'
import Comment from './sub/Comment.vue'
export default {
    data(){
        return {
            //单个数据是一个对象
            newsDetailData:{},
            commentId:0
        }
    },
    components:{
        Comment
    },
    created(){
        // console.log(this.$route.params.id);
        var id=this.$route.params.id
        this.getNewsDetailsData(id)
        this.commentId=id;
    },
    methods:{
        getNewsDetailsData(id){
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getnew/${id}`
            this.$http.get(url).then(
                res=>{
                  this.newsDetailData = res.body.message[0]
                },
                res=>{
                    console.log('newsdetail页面请求详情数据失败')
                }
            )
        }
    }
}
</script>
<style>
    .title h3{
        color:brown;
        text-align: center;
    }
    .title{
        padding: 3px;
       
    }
    .info{
        display: flex;
        justify-content: space-between;
        color:#ccc;
         border-bottom: 1px solid #eee;
    }

</style>


