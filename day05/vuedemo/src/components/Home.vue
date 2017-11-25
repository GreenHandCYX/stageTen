<template>
  <div class="temp">
    <!-- 轮播组件 -->
    <Lunbo :lunboData='homeData'></Lunbo>
   <!-- 从mui中导入九宫格样式 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/newslists">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻列表</div>
                        </router-link>
                     </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
		</div>
  </div>
</template>
<script>
import Lunbo from './sub/Lunbo.vue'
//引入请求地址处理模块
import tool from '../tool/tool'
export default {
    data(){
      return {
        homeData:[]
      }
    },
    components:{
      Lunbo
    },
    created(){
      this.getHomeData()
    },
    methods:{
      getHomeData(){
        //vue-resource
        var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getlunbo`
        this.$http.get(url).then(
          res=>{
            //成功时的回调函数
            // console.log(res.body.message)
            //绑定到全局
            this.homeData = res.body.message
          },
          res=>{
            //失败时的回调
            console.log('Home页面请求轮播图数据时出错')
          }
        )
      }
    }
}
</script>
<style scoped>
/* scoped指样式只在当前组件内生效 */
    .mui-icon-home{
        background-image: url('../images/callme.png');
        /* 背景图像自动缩放直到适应且填充满整个容器 */
        background-repeat: round;
    }
    .mui-icon-home:before{
        content:''
    }
    .mui-icon{
        width: 30px;
        height: 30px;
    }
    .mui-grid-view.mui-grid-9{
      background-color: #fff;
    }
     
</style>


