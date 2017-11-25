<template>
  <div class="temp">
    <ul class="mui-table-view" 
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="60"
  >
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsdatalist" :key="index">
        <!-- 为路由传递变量 -->
          <router-link  v-bind="{to:'/newsdetail/'+item.id}">
              <img class="mui-media-object mui-pull-left" :src="item.img_url">
              <div class="mui-media-body">
                  {{item.title}}
                  <p class='mui-ellipsis'>发布时间:{{item.add_time | momentFilter('YYYY-MM-DD hh:mm:ss')}} <span>点击量: {{item.click}}</span> </p>
              </div>
          </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import tool from '../tool/tool'
import { InfiniteScroll } from 'mint-ui';

export default {
  data(){
    return {
      newsdatalist:[],
      loading:false
    }
  }
  ,
  created(){
    this.getListData()
  },
  methods:{
    getListData(){
      var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getnewslist`
      this.$http.get(url).then(
        res=>{
          console.log(res)
           this.newsdatalist=res.body.message
        },
        res=>{
          console.log('newslist页面请求列表数据时出错')
        }
      )
    },
    loadMore() {
      console.log(123);
      this.loading = true;
      setTimeout(() => {
        let last = this.newsdatalist[this. newsdatalist.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.newsdatalist.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }
}
</script>
<style>
.temp{
    
}
</style>