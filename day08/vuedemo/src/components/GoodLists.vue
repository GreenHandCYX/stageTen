<template>
    <div class="temp">
      <div class="mui-content" style="background-color:#fff">
		  
            <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore">
              <ul class="mui-table-view mui-grid-view" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="80">
		        <li v-for="(item,index) in goodData" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
		            <router-link v-bind="{to:'/gooddetail/'+item.id}">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">
                            <h4>{{item.title}}</h4>
                          
                            <br>
                            <div class="info">
                                 <strong>{{item.market_price}}</strong>
                                <div>原:<del>{{item.sell_price}}</del></div>
                                <div>
                                        库存{{item.stock_quantity}}件 
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
		    </ul>  
            </mt-loadmore>  
	 </div>
   </div>
</template>
<style>
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    height: 80px;
    padding: 3px;
   
}
.mui-media-body h4{
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.info{
    display: flex;
    justify-content: space-between;
    height: 30px;
    flex-wrap: wrap
}
.info strong{
    color: red
}
</style>

<script>
import tool from '../tool/tool'
export default {
    data(){
        return {
            goodData:[],
            allLoaded:false,
            pageindex:0
        }     
    },
    created(){
        this.pageindex = 1;
        this.getGoodData(this.pageindex)
    },
    methods:{
        getGoodData(pageindex){
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getgoods?pageindex=${pageindex}`
            this.$http.get(url).then(
                  res=>{
                    this.goodData = res.body.message
                   
                     
                    },
                    res=>{
                        console.log('goodlists页面请求商品列表失败')
                    }
            )
        },
        loadTop() {
            // 加载更多数据
            this.pageindex =1
            this.getGoodData(this.pageindex)
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            
          // 若数据已全部获取完毕
           
            this.$refs.loadmore.onBottomLoaded();
        },
        loadMore() {
           
            console.log( this.pageindex)
            // // 加载更多数据
          
            


            this.loading = true;
            setTimeout(() => {
                this.pageindex+=1;
                 if(this.pageindex>2){
                     return
                }
                 this.getGoodData(this.pageindex)
                this.loading = false;
            }, 2500);
        }
    }
}
</script>

