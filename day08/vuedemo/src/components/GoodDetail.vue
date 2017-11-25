<template>
  <div class="temp">
      <Lunbo :lunboData='LunboData'></Lunbo>
      <div class="title">
          <h4>{{ GoodInfoData.title}}</h4>
          <div class="shopCarArea">
              <div class="priceArea">
                   折扣价: ￥{{GoodInfoData.sell_price}}
                    <div>
                        原价: <del>￥{{GoodInfoData.market_price}}</del> 
                    </div>
              </div>
              <div class="numArea">
                  购买数量:
                  <Number :kucun='GoodInfoData.stock_quantity' @toFather='getNumber'></Number>


                    <transition
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter"
                        v-on:after-enter="afterEnter"
                    >
                    <div v-if="isBallShow" class="ball"></div>
                    </transition>
                   
              </div>
              <div class="btnArea">
                   <mt-button type="primary" size="small" >立即购买</mt-button>
                   <mt-button type="danger" size="small" @click.prevent='addShopCar'>加入购物车</mt-button>
              </div>
          </div>
      </div>
      <div class="canshu">
         <h6>商品参数:</h6>   
          <div>
            <ul>
                <li>商品货号: {{GoodInfoData.goods_no}}</li>
                <li>库存情况: {{GoodInfoData.stock_quantity}}</li>
                <li>上架时间: {{GoodInfoData.add_time |　momentFilter('YYYY/MM/DD')}}</li>
            </ul>
        </div>
      </div>
      <div class="btns">
           <mt-button plain type="primary" size="large" @click="goToDesc">图文介绍</mt-button>
          <mt-button class="bottomBtn" plain type="danger" size="large" @click="goToComment">商品评论</mt-button>
      </div>
  </div>
</template>
<script>
import {setItem} from '../tool/localstorage'
import {bus} from '../tool/bus'
import tool from '../tool/tool'
import Lunbo from './sub/Lunbo.vue'
import Number from './sub/Number.vue'
export default {
    data(){
        return {
            LunboData:[],
            GoodInfoData:{},
            //默认购物车货物数量
            receiveNum:1,
            isBallShow:false
        }
    },
    components:{
        Lunbo,
        Number
    },
    created(){
        var id = this.$route.params.id;
        this.getLunboData(id)
        this.getGoodInfo(id)
    },
    methods:{
        getLunboData(id){
            var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getthumimages/${id}`
            this.$http.get(url).then(
                res=>{
                    this.LunboData = res.body.message
                },
                res=>{
                     console.log('gooddetail页面请求轮播图数据出错')
                }
            )
        }
        ,
        getGoodInfo(id){
             var url = `${tool.HTTP}${tool.SERVER_PATH}/api/goods/getinfo/${id}`
            this.$http.get(url).then(
                res=>{
                    this.GoodInfoData = res.body.message[0]
                },
                res=>{
                     console.log('gooddetail页面请求商品参数区和价格，标题等数据出错')
                }
            )
        },
        goToDesc(){
            //图文介绍:需通过路由传值
            //通过$router可以实现路由的跳转,因为这里是跳的新的页面所以用push
            //push中name与路由设置routes:[{name}]中的name相对应,params指参数
            this.$router.push({
                name:'gooddesc',
                params:{
                    id:this.$route.params.id
                }
            })
            
        },
        goToComment(){
            var id = this.$route.params.id;
            this.$router.push({
                name:'discuss',
                params:{
                    id:id
                }
            })
        },
        getNumber(data){
            
            //获取子组件num发生变化传来的值
            this.receiveNum = data
          
        },
        addShopCar(){
           
            //设置小球运动终止状态
           this.isBallShow = !this.isBallShow
            //为首页底部导航徽章传值(兄弟传值)
            bus.$emit('badgeCount',this.receiveNum)
            var id = this.$route.params.id;
            var count = this.receiveNum
            //存入本地数据库
            var data = {
                "goodsid":id,
                "count":count
            }
            setItem(data)
        },
         // 小球过渡动画
        // --------
        beforeEnter: function (el) {
            // ...
            el.style.transform = 'translate3d(0,0,0)'
        },
        // 此回调函数是可选项的设置
        // 与 CSS 结合时使用
        enter: function (el, done) {
            // ...done执行后就会立即完成动画
            var w = el.offsetWidth;
             el.style.transform = 'translate3d(-39px,316px,0)'
            done()
        },
        afterEnter: function (el) {
            // ...
             this.isBallShow = !this.isBallShow
        }
    }
}
</script>
<style>
    .title,.canshu{
        padding: 5px;
        border: 1px solid rgba(1,1,1,0.4);
        border-radius: 3px;

    }
    .title h4{
        color: skyblue;
         border-bottom: 1px solid rgba(1,1,1,0.4);
    }
    .canshu h6{
         border-bottom: 1px dashed rgba(1,1,1,0.4);
    }
    .canshu ul{
        list-style: none;
        padding: 10px;
    }
    .priceArea{
        display: flex;
        justify-content: space-between;
    }
    .btnArea{
          display: flex;
        justify-content: space-around; 
    }
     .btns .bottomBtn{
        margin-top: 5px;
    }
    .numArea{
        margin: 3px 0;
         position: relative;
         display: flex;
        justify-content: space-between; 
    }
     .ball{
          width: 35px;
        height: 35px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        right: 43px;
        top: 0px;
        transition: all 1s cubic-bezier(0,-0.81,.02,-0.17)
    }
</style>


