<template>
  <div class="temp">
    <ul class="mui-table-view" >
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in shopCarData" :key="index">
           <input type="checkbox" name="" class="chk" @click='changeChk(index)' checked>
          
           <div class="con">
              <router-link v-bind="{to:'/gooddetail/'+item.id}">
              <img class="mui-media-object" :src="item.thumb_path">
              </router-link>
                <h4>{{item.title}}</h4>
           </div>

            <div class="info">
                  <strong>价格:{{item.sell_price}}</strong>
                  
                <div>
                        购买数量:
                  <Number :price='item.sell_price' :id='item.id' :buy='item.count' @toFather='getNumber'></Number> 
                </div>
            </div>
            <div :ref='item.id' class="totalMoney">{{rec[item.id]}}</div>
            
         
      </li>
    </ul>
    <div class="priceArea">
      <p>总计:<strong id="cart">{{total}}</strong>元</p>
      <p>已勾选<strong>{{totalNum}}</strong>件</p>
    </div>
    <mt-button type="danger" size="large" >发表</mt-button>
  </div>
</template>
<script>
import tool from '../tool/tool'
import {getItem} from '../tool/localstorage'
import Number from './sub/Number.vue'


export default {
  data(){
    return {
      shopCarData:[],
      localStorageData:[],
      total:0,
      totalNum:0,
      rec:{}
    }
  },
  components:{
    Number
  }
  ,
  created(){
   var localData = getItem();
 
    this.getShopCarData(localData);
     
  }
  ,
  methods:{
    getShopCarData(arr){
      for(var i=0;i< arr.length;i++){
        var goodsid = arr[i].goodsid;
        var count = arr[i].count;  
        var url = `${tool.HTTP}${tool.SERVER_PATH}/api/goods/getshopcarlist/${goodsid}`
         this.getOtherData(url,goodsid,count)
      
      }
        
    },
    getOtherData(url,goodsid,count){
       this.$http.get(url).then(
            res=>{
                var obj = res.body.message[0]
                obj.goodsid=goodsid
                obj.count = count;
                this.shopCarData.push(obj)     
                           
            },
            res=>{
                  console.log('shopcar页面请求商品参数区和价格，标题等数据出错')
            }
        )
    },
    getNumber(data){
        this.rec[data[0]] =data[1]
        
        //获取子组件num发生变化传来的值
      // console.log(this.$refs[data[0]].innerHTML)
       this.$refs[data[0]][0].innerHTML=data[1]
        this.getTotal()
    },
    getTotal(){
          var arr = document.getElementsByClassName('totalMoney')
         this.totalNum = arr.length  
         var sum = 0; 
         for(var i=0;i<arr.length;i++){
            sum  += (arr[i].innerHTML-0)
         }
         this.total = sum;
    },
    changeChk(i){

      var cur = document.getElementsByClassName('chk')[i]
      // console.log(cur.checked)
       var curPrice = document.getElementsByClassName('totalMoney')[i].innerText -0;
      if(!cur.checked){
        this.totalNum--;
       
        this.total-=curPrice
      }else if(cur.checked){
         this.totalNum++;
          this.total+=curPrice
      }
      
    }
  },
  mounted(){
      this.getTotal()
    }
}
</script>
<style>
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    height: 80px;
    padding: 3px;
   
}
.con h4{
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
.con{
  display: flex;
}
#check{
  display: inline-block;
  width: 20px;
  height: 30px;
}
.priceArea{
  padding: 5px;
  box-sizing: border-box;
  height: 50px;
 
  margin: 3px 0;
  background-color: #eee;
  text-align: right;
}
.priceArea p{
  margin: 0;
}
#cart{
  color:red;
  font-weight: bold;
}
</style>

