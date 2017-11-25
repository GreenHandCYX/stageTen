<template>
  <div class="comment">
      <div class="comment-submit">
          <h3>提交评论</h3>
          <textarea ref='textarea' placeholder="请输入评论内容"></textarea>
          <mt-button type="primary" size="large" @click="postComment(articleId)">发表</mt-button>
      </div>
      <div class="comment-show">
          <h3>展示评论</h3>
            <ul>
                <li v-for="(item,index) in commentData" :key="index">
                    <div>
                        {{item.content}}
                    </div>
                    <div class="info">
                        {{item.user_name}}
                        <div>
                             {{item.add_time | momentFilter('YYYY/MM/DD')}}
                        </div>
                    </div>
                </li>
            </ul>
      </div>
  </div>
</template>
<style>
.comment{
      padding: 5px;
}
.comment-submit{
    border-bottom: 1px solid rgba(1,1,1,0.5);
    padding-bottom: 10px;
}
.comment-submit textarea{
 margin-bottom: 3px;
}
.comment-show h3{
     border-bottom: 1px solid rgba(1,1,1,0.5);
}
.info{
    display: flex;
    justify-content: space-between;
}
.comment-show ul{
    padding: 0px;
    margin: 0px;
}
.comment-show li{
    list-style: none;
    border-bottom: 1px solid rgba(1,1,1,0.2);
}
</style>

<script>
//提示信息
import { Toast } from 'mint-ui';
import tool from '../../tool/tool'
export default {
    data(){
        return {
            commentData:[]
        }
    },
    props:['articleId'],
    created(){
        // console.log(this.articleId)
 
        this.getComment(this.articleId)
    },
    methods:{
        //提交评论/api/postcomment/:artid
        postComment(id){
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/postcomment/${id}`
            this.$http.post(url,{
                artid:this.articleId,
                content:this.$refs.textarea.value
                },{emulateJSON:true}).then(
                    res=>{
                        Toast('提交成功')
                        this.$refs.textarea.value = ''
                        this.getComment(id)
                    },
                    res=>{
                         Toast('提交失败')
                    }
                )
        },
        //读取评论
        getComment(id){
        var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getcomments/${id}?pageindex=1`
         this.$http.get(url).then(
             res=>{
                 this.commentData = res.body.message
             },
             res=>{
                 console.log('comment页面请求评论失败')
             }
         ) 
        }
        
    }
}
</script>

