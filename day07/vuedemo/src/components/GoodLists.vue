<template>
    <div class="temp">
      <div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view">
		        <li v-for="(item,index) in goodData" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
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
                    </a>
                </li>
		    </ul>    
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
            goodData:[]
        }     
    },
    created(){
        this.getGoodData()
    },
    methods:{
        getGoodData(){
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getgoods?pageindex=1`
            this.$http.get(url).then(
                  res=>{
                    this.goodData = res.body.message
                    },
                    res=>{
                        console.log('goodlists页面请求商品列表失败')
                    }
            )
        }
    }
}
</script>

