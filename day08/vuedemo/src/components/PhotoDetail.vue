<template>
    <div class="temp">
        <div class="title">
            <h3>{{imgInfoData.title}}</h3>
           
            <div class="otitle">
                 {{imgInfoData.click}}浏览
                 <div>分类:经济民生</div>   
            </div>
        </div>
        <lg-preview class="preview"></lg-preview>
        <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in thumimages" :key="index">
                      <img :src="item.src" v-preview="item.src" alt="">
                    </li>
                </ul>
        </div>
        <div class="content" v-html="imgInfoData.content">
        </div>
        <Comment :articleId='commentId'></Comment>
    </div>
</template>
<script>
import tool from '../tool/tool'
import Comment from './sub/Comment.vue'
export default {
    data(){
        return {
            imgInfoData:{},
            thumimages:[],
            commentId:0
        }
    },
    components:{
        Comment
    },
  created(){
    //   console.log(this.$route.params.id)
    var id = this.$route.params.id;
    this.getImginfo(id)
    this.getThumimages(id)
    this.commentId = id
  },
  methods:{
      //获取图片详情
      getImginfo(id){
          var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getimageInfo/${id}`
         this.$http.get(url).then(
             res=>{
                 this.imgInfoData = res.body.message[0]
             },
             res=>{
                 console.log('Photodetail页面请求图片详情失败')
             }
         ) 
      },
      //获取图片缩略图数组/api/getthumimages/:imgid
      getThumimages(id){
          var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getthumimages/${id}`
         this.$http.get(url).then(
             res=>{
                 this.thumimages = res.body.message
             },
             res=>{
                 console.log('Photodetail页面请求图片缩略图数组失败')
             }
         ) 
      },
  }
}
</script>
<style>
    .title{
        padding: 3px;

    }
    .title h3{
        color:skyblue
    }
    .otitle{
        color: rgba(1,1,1,0.3);
        display: flex;
        justify-content: space-between;
    }
    .content{
        padding: 3px;
        color: rgba(1,1,1,0.3);
    }
   .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
     .mui-grid-9 img{
         width: 70px;
         height: 70px;
     }
    .preview{
        position: absolute;
        left: 0;
        top: 0;
    }
</style>


